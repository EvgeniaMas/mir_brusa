ymaps.ready(function(){
    var map = new ymaps.Map("custom_map", {
            center: [55.98377106872707,37.87369999999996],
            zoom: 8.5
            // ,
            //  controls: []            
        });
    map.behaviors
        // Отключаем часть включенных по умолчанию поведений:
        //  - drag - перемещение карты при нажатой левой кнопки мыши;
        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
        // .disable(['drag', 'rightMouseButtonMagnifier'])
        .disable('scrollZoom');
        // .disable('Zoom');      
    // Изменяем свойство поведения с помощью опции:
    // изменение масштаба колесом прокрутки будет происходить медленно,
    // на 1/2 уровня масштабирования в секунду.
    // map.options.set('scrollZoomSpeed', 0.5);
    var mir = new ymaps.Placemark(
        [55.98377106872707,37.87369999999996], {
            // hintContent: 'Московская область, городской округ Шатура, деревня Сычи',
        },
        {
            iconImageHref: 'img/map_icon.png', 
            iconImageSize: [25, 34],           
            iconLayout: 'default#image'
        }
    );

  

    map.geoObjects
    .add(mir);
    // .add(aksenovo)
    // .add(zagornovo)
    // .add(zhirovo)
    // .add(chirikovo)
    // .add(cholmi)
    // .add(kochina_gora)
    // .add(bulatnikovo)
    // .add(yasnoe)
    // .add(yasnaya_polyna);

//  zhirovo.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/1.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район,Новохаритоновское сельское поселение, дер. Жирово</p><p class="map_object__description"><b>Общая площадь:</b> 151 м2<br><b>Начало строительства:</b> 28.04.2018<br><b>Окончание строительства:</b> 12.07.2018</p>';        
//      });   
  
// sichi.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/2.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, Шатурский район село Пышлицкое д. Сычи</p><p class="map_object__description"><b>Общая площадь:</b> 210 м2<br><b>Начало строительства:</b> 23.02.2018<br><b>Окончание строительства:</b> 23.03.2018</p>';        
//      }); 

// aksenovo.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/3.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, сельское поселение Вялковское, деревня Аксёново</p><p class="map_object__description"><b>Общая площадь:</b> 176,6 м2<br><b>Начало строительства:</b> 01.04.2018<br><b>Окончание строительства:</b> 12.06.2018</p>';        
//      }); 
//  zagornovo.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/4.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, с. Загорново, ул.Советская</p><p class="map_object__description"><b>Общая площадь:</b> 129 м2<br><b>Начало строительства:</b> 12.07.2018<br><b>Окончание строительства:</b> 12.08.2018</p>';        
//      });
// cholmi.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/5.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, , район Солнечногорский, дер. Холмы</p><p class="map_object__description"><b>Общая площадь:</b> 220 м2<br><b>Начало строительства:</b> 24.04.2018<br><b>Окончание строительства:</b> 12.07.2018</p>';        
//      }); 

// bulatnikovo.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/6.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область Ленинградский район с/о Булатниково</p><p class="map_object__description"><b>Общая площадь:</b> 95,5 м2<br><b>Начало строительства:</b> 07.07.2018<br><b>Окончание строительства:</b> 28.07.2018</p>';        
//      }); 

//  chirikovo.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/7.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, п.Краснопахорское,д.Чириково, ул.Лесная</p><p class="map_object__description"><b>Общая площадь:</b> 147 м2<br><b>Начало строительства:</b> 23.04.2018<br><b>Окончание строительства:</b> 23.06.2018</p>';        
//      });   
  
// kochina_gora.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/8.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, Тимонинский с/о, дер. Кочина Гора</p><p class="map_object__description"><b>Общая площадь:</b> 313,24 м2<br><b>Начало строительства:</b> 15.04.2018<br><b>Окончание строительства:</b> 25.06.2018</p>';        
//      }); 

// yasnoe.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= '<img class="map_picture" src="jobs/9.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">г. Москва, п.Московский тер.СНТ Ясное</p><p class="map_object__description"><b>Общая площадь:</b> 188,5 м2<br><b>Начало строительства:</b> 06.06.2017<br><b>Окончание строительства:</b> 10.08.2017</p>';        
//      }); 
// yasnaya_polyna.events.add('mouseenter', function () {
//        var a= document.getElementById('map_content');
    
//        a.innerHTML= '<img class="map_picture" src="jobs/5.jpg" alt="Работа компании Композит-Сити"><p class="map_object__title">Московская область, Раменский район, Сельское поселение Рыболовское, поселок Ясная Поляна</p><p class="map_object__description"><b>Общая площадь:</b> 162,5 м2<br><b>Начало строительства:</b> 05.10.2017<br><b>Окончание строительства:</b> 01.12.2017</p>';        
//      }); 




// yasnaya_polyna.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 

//  zhirovo.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      });  
  
// sichi.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 

// aksenovo.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 
//  zagornovo.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 
// cholmi.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 

// bulatnikovo.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 

//  chirikovo.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 
  
// kochina_gora.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 

// yasnoe.events.add('mouseleave', function () {
//        var a= document.getElementById('map_content');
//        a.innerHTML= 'Наведите на объект, чтобы узнать больше';        
//      }); 





// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Владимирская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);

// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Тверская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);

// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Калужская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);
// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Ярославская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);
// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Тверская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);
// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Смоленская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);

// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Рязанская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);

// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Ивановская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);
// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Тульская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);


// ymaps.geoQuery(ymaps.regions.load("RU", {
//     lang: "ru"
// })).search('properties.hintContent = "Тульская область"').setOptions('fillColor', '#dcdcdc').setOptions('strokeWidth', 0).addToMap(map);



});






