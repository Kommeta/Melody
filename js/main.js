$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); //каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); //кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменьшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

   // фунуция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
     floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
     currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
     $(".counter").text(currentFloor); //записываем значние этажа в счётчик справа
  });

  floorPath.on("click", toggleModal); /*при клике на этаж, появляется окно */

  modalCloseButton.on("click", toggleModal); /*клик на кнопку закрыть окно */
  viewFlatsButton.on("click", toggleModal);
 
   //отслеживаем клик по кнопке вверх
   counterUp.on("click", function () {
     if (currentFloor < 18) { //проверяем значение этажа, оно не должно быть больше 18
       currentFloor++; //прибавляем один этаж
       usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGroupping: false });// форматируем переменную с этажом, чтобы было 02 а не 2
       $(".counter").text(usCurrentFloor); //записываем значние этажа в счётчик справа
 
       floorPath.removeClass("current-floor") //удаляем активный класс у этажей
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") //подсвечиваем текущий этаж
    }     
  });

  //отслеживаем клик по кнопке вверх
  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
       $(".counter").text(usCurrentFloor); // форматируем переменную с этажом, чтобы было 02 а не 2
       floorPath.removeClass("current-floor") //убирает класс отображения выделения этажа
       $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor") //добавляет класс для подсвечивания текущего этажа
    }
  });
  function toggleModal() { //функция открыть-закрыть окно
    modal.toggleClass("is-open");
  }
});