setInterval(function () {  

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    var fiveHours = Math.floor(hours / 5); // 
    var oneHour = Math.floor(hours % 5); // 
    var fiveMins = Math.floor(minutes / 5); // 
    var oneMin = Math.floor(minutes % 5); // 

    var hoursTop = document.querySelectorAll('.hour-top > div');
    var hoursBottom = document.querySelectorAll('.hour-bottom > div');
    var minsTop = document.querySelectorAll('.minute-top > div');
    var minsBottom = document.querySelectorAll('.minute-bottom > div');

    var counter = seconds -1;
    ++counter;
    document.querySelector(".sec").style.transform = "rotate(" + counter * 6 + "deg)"; 

    var i = 0;

    for( i = 0; i < fiveHours; i++ ) { hoursTop[i].classList.add('on'); }
        if( fiveHours == 0 ) {
            Array.from(hoursTop).forEach(hoursTop => hoursTop.classList.remove('on'))
        }

    for( i = 0; i < oneHour; i++ ) { hoursBottom[i].classList.add('on'); }
        if( oneHour == 0 ) {
            Array.from(hoursBottom).forEach(hoursBottom => hoursBottom.classList.remove('on'))
        }

    for( i = 0; i < fiveMins; i++ ) { minsTop[i].classList.add('on'); }
        if( fiveMins == 0 ) {
            Array.from(minsTop).forEach(minsTop => minsTop.classList.remove('on'))
        }

    for( i = 0; i < oneMin; i++ ) { minsBottom[i].classList.add('on'); }
        if( oneMin == 0 ) {
            Array.from(minsBottom).forEach(minsBottom => minsBottom.classList.remove('on'))
        }

    if(hours <= 8 || hours >= 20) {
        document.querySelector("body").style.backgroundBlendMode = "hard-light";
    } 
}, 1000);
