// fake account created on test.odigo.jp
var user = {
  email: "phantom@js.com",
  nickname: "phantomjs",
  password: "easy-password"
}

casper.test.begin("user should be able to login", function (test) {

  casper.start("http://test.odigo.jp/", function() {
    test.assertTitleMatch(/^Plan\ \& share\ your\ travel\ to\ Japan\ \-\ Odigo$/);
  });

  var signInBtn = "header a[ng-click='signin()']";
  casper.then(function(){
    test.assertVisible(signInBtn);
    test.assertSelectorHasText(signInBtn, "Log in");
    this.click(signInBtn);
  })

  var loginForm = ".ngdialog-content form";
  casper.waitForSelector(loginForm, function() {
    test.assertVisible(loginForm);
    this.fillSelectors(loginForm, {
      "input#user_email": user.email,
      "input#user_password": user.password
    }, true);
  });

  var userMenuNickname = "header .user-menu ul li a.text-bold";
  casper.waitForSelector(userMenuNickname, function() {
    test.assertSelectorHasText(userMenuNickname, user.nickname);
  });

  casper.run(function() {
    test.done();
  });
});
