setInterval(() => {  

    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    var hoursX5 = Math.floor(hours / 5); // 
    var hoursX1 = Math.floor(hours % 5); // 
    var minsX5 = Math.floor(minutes / 5); // 
    var minsX1 = Math.floor(minutes % 5); // 

    var hx5 = document.querySelectorAll('.hx5 > div');
    var hx1 = document.querySelectorAll('.hx1 > div');
    var mx5 = document.querySelectorAll('.mx5 > div');
    var mx1 = document.querySelectorAll('.mx1 > div');

    var counter = seconds -1;
    ++counter;
    document.querySelector(".sec").style.transform = "rotate(" + counter * 6 + "deg)"; 

    var i = 0;

    for( i = 0; i < hoursX5; i++ ) { hx5[i].classList.add('on'); }
        if( hoursX5 == 0 ) {
            Array.from(hx5).forEach(hx5 => hx5.classList.remove('on'))
        }

    for( i = 0; i < hoursX1; i++ ) { hx1[i].classList.add('on'); }
        if( hoursX1 == 0 ) {
            Array.from(hx1).forEach(hx1 => hx1.classList.remove('on'))
        }

    for( i = 0; i < minsX5; i++ ) { mx5[i].classList.add('on'); }
        if( minsX5 == 0 ) {
            Array.from(mx5).forEach(mx5 => mx5.classList.remove('on'))
        }

    for( i = 0; i < minsX1; i++ ) { mx1[i].classList.add('on'); }
        if( minsX1 == 0 ) {
            Array.from(mx1).forEach(mx1 => mx1.classList.remove('on'))
        }

    if(hours <= 8 || hours >= 20) {
        document.querySelector("body").style.backgroundBlendMode = "hard-light";
    } 
}, 1000);
