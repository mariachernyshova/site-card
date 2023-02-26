// когда происходит загрузка страницы
$(window).on('load', function (){
    // Vide.js - video background
    // находим элемент с id header, укаываем путь относительно документа HTML
    $('#header').vide('./video/cover', {
        bgColor: '#242f35'
    });
})