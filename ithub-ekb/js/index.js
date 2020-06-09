var objToStick = $("#ithub-logo"); //Получаем нужный объект
var topOfObjToStick = $(objToStick).offset().top; //Получаем начальное расположение нашего блока

$(window).scroll(function () {
    var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно
    if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
        $(objToStick).addClass("topWindow");
    } else {
        $(objToStick).removeClass("topWindow");
    };
});