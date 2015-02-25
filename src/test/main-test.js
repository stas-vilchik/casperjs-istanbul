casper.test.begin('my simple test', 1, function (test) {

  casper
      .start('http://localhost:8000/pages/index')

      .then(function () {
        test.assertSelectorContains('body', 'My Application')
      })

      .then(function () {
        casper.evaluate(function () {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open('POST', '/coverage/client', true);
          xmlhttp.setRequestHeader('Content-Type', 'application/json');
          xmlhttp.send(JSON.stringify(window.__coverage__));
        });
      })

      .run(function () {
        test.done();
      });

});
