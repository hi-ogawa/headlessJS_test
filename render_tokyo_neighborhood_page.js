// http://phantomjs.org/quick-start.html

var page = require('webpage').create();
var fs = require('fs');

// neighborhood: Tokyo
var url = 'https://www.odigo.travel/neighborhoods/535e0da669702d70c9000000';

// http://phantomjs.org/page-automation.html
page.open(url, function(){

  var rendered_html = page.evaluate(function() {
    // http://stackoverflow.com/questions/982717/how-do-i-get-the-entire-pages-html-with-jquery
    var $html = $('html');
    $html.find('script').remove();
    return $html[0].outerHTML;
  });

  // http://phantomjs.org/api/fs/method/write.html
  fs.write('tokyo.html', rendered_html, 'w');

  phantom.exit();
});
