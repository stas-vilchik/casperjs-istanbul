(function () {

  window.onload = function () {

    if (1 > 0) {
      throw new Error('this line is not covered');
    } else {
      var el = document.createElement('div');
      el.innerText = 'My Application';
      document.body.appendChild(el);
    }

  };

})();
