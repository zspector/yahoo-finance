$(document).ready(function() {
  console.log('ready');


  $('.get-stock-data').click(function(e) {
    e.preventDefault();
    var url = 'http://query.yahooapis.com/v1/public/yql';
    var val = $('.stock').val();
    var data = encodeURIComponent("select * from yahoo.finance.quotes where symbol in ('" + val + "')");

    $.getJSON(url, 'q=' + data + '&format=json&diagnostics=true&env=http://datatables.org/alltables.env')
      .done(function(data) {
        $('p').text(data.query.results.quote.LastTradePriceOnly);
        console.log(data.query.results.quote);
      });
  });
});
