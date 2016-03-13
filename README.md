# Headless JS runner examples

Assume you're using something Mac OS. Note that running each example below takes roughly more than 20 sec.

### PhantomJS

PhantomJS can read and manipulate webpage without browser.

```
-- installation --
$ brew cask install phantomjs
$ phantomjs -v    # should be more than 2.0 for good SSL support
2.1.1

-- run example --
$ phantomjs render_tokyo_neighborhood.js  # render page (odigo tokyo neighborhood show page on production) and write content in tokyo.html
$ open tokyo.html                         # see rendered html on browser
```

### CasperJS

CasperJS runs on top of PhantomJS.
It gives a easy-to-use syntax (api for PhantomJS) and works well as testing framework.
The latest version of CasperJS uses PhantomJS under 2.0,
so there're some difference from above PhantomJS examples (especially https support).

```
-- installation--

$ brew install casperjs --devel # installing development version is officially recommended
$ casperjs --help
CasperJS version 1.1.0-beta4 at /usr/local/Cellar/casperjs/1.1-beta4/libexec, using phantomjs version 1.9.8

-- run example --

$ casperjs show_trips_on_homepage.js --ignore-ssl-errors=true  # staging server test.odigo.jp
Daytripping to Yoichi and Otaru from Sapporo
Gifu City, Takayama & Minokamo City
Finding the Heart of Tokyo
Animal Lovers Trip in Tokyo
Bonsai Tour in Omiya
Shinjuku by Night

$ casperjs test testing_login_flow.js --ignore-ssl-errors=true  # staging server test.odigo.jp
Test file: testing_login_flow.js
# user should be able to login
PASS user should be able to login (NaN test)
PASS Subject is strictly true
PASS Selector is visible
PASS Find "Log in" within the selector "header a[ng-click='signin()']"
PASS Selector is visible
PASS Find "phantomjs" within the selector "header .user-menu ul li a.text-bold"
PASS 5 tests executed in 25.522s, 5 passed, 0 failed, 0 dubious, 0 skipped.
```

### Useful options (from PhantomJS)

- `--remote-debugger-port=9000`: to use `debugger` (see below reference for detail)
- `--debug=true`: show what PhantomJS does on realtime
- `--ignore-ssl-errors=true`: this is necessary when you run PhantomJS under 2.0

### References

- http://phantomjs.org/
- http://casperjs.org/

- use debugger and dev console:
  - http://stackoverflow.com/questions/17573249/getting-remote-debugging-set-up-with-phantomjs
  - https://drupalize.me/blog/201410/using-remote-debugger-casperjs-and-phantomjs

- DIY prerender
  - http://www.yearofmoo.com/2012/11/angularjs-and-seo.html
  - https://builtvisible.com/javascript-framework-seo/

- prerender:
  - rendering service: https://github.com/prerender/prerender#how-it-works
  - proxy on rails: https://github.com/prerender/prerender_rails#how-it-works
