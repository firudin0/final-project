const toggleButtons = document.getElementsByClassName('toggleButton');
    const singIn = document.getElementById('singIn');
    const singUp = document.getElementById('singUp');

    for (let i = 0; i < toggleButtons.length; i++) {
      toggleButtons[i].addEventListener('click', function () {
        if (singIn.style.display !== 'none') {
          singIn.style.display = 'none';
          singUp.style.display = 'block';
        } else {
          singIn.style.display = 'block';
          singUp.style.display = 'none';
        }
      });
    }