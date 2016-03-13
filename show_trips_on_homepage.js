// $ `casperjs --debug=true`
// var casper = require('casper').create({
//   verbose: true,
//   logLevel: "debug"
// });

var casper = require('casper').create();

// https://www.odigo.travel/ doesn't work because PhantomJS's version running in CasperJS is under 2.0
// see more: https://github.com/ariya/phantomjs/issues/12181#issuecomment-137241251

casper.start('http://test.odigo.jp/', function() {
  var trips = this.evaluate(function(){
    return _.map($(".trip-container figcaption h1"), function(dom){
      return $(dom).text();
    });
  });
  this.echo(trips.join('\n'));
});

casper.run();
