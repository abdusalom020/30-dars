var elsFeaturesItem = document.querySelectorAll('.features-item');
var elsFeaturesButton = document.querySelectorAll('.features-button');
var elsFeaturesButtonSimple = document.querySelectorAll('.features-button--simple');
var elsFeaturesButtonSpeedy = document.querySelectorAll('.features-button--speedy');
var elsFeaturesButtonEasy = document.querySelectorAll('.features-button--easy');
var elsSimpleBox = document.querySelectorAll('.Simple-box');



elsFeaturesButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsFeaturesItem.forEach(function (item) {
      item.classList.remove('features-item--active');
    });

    button.parentElement.classList.add('features-item--active');
  });
});



elsFeaturesButtonSimple.forEach(function (plus) {
  plus.addEventListener('click', function () {
    elsSimpleBox.forEach(function (box) {
      box.classList.remove('simple-box--active');
    });

    plus.closest('.simple-box--active').classList.add('simple-box');
  });
});


//FAQ

var elsHide = document.querySelectorAll('.hide');
var elsHideButton = document.querySelectorAll('.hide-button');

elsHideButton.forEach(function (button) {
  button.addEventListener('click', function () {
    elsHide.forEach(function (hide) {
      hide.classList.remove('hide--active');
    });

    button.closest('.hide').classList.add('hide--active');
  });
});