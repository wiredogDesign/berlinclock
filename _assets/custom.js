// get a node list for each group
var hx5 = document.querySelectorAll('.hx5 > div');
var hx1 = document.querySelectorAll('.hx1 > div');
var mx5 = document.querySelectorAll('.mx5 > div');
var mx1 = document.querySelectorAll('.mx1 > div');
// var secCounter = document.querySelector('.counter');
var getTheTime = () => {  

    var time = new Date();
    var year = time.getFullYear().toString().substring(2,4);
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    // var seconds = time.getSeconds();
    // makes month two digits if less than 10
    var monthCorrected = month < 10 ? '0' + month : '' + month;
    var dayCorrected = day < 10 ? '0' + day : '' + day;
    
    var hoursX5 = Math.floor(hours / 5); // gives quotient & discards remainder
    var hoursX1 = Math.floor(hours % 5); // gives remainder & discards quotient
    var minsX5 = Math.floor(minutes / 5); // same for 5 minutes blocks
    var minsX1 = Math.floor(minutes % 5); // same for 1 minute blocks

    // now the working bits
    var i = 0;

    // loop through the nodes and apply <on> class
    // eg quotient at 10:00 is 2
    // so only first two blocks would be on
    // then remove the <on> class when the count reaches 0
    for(i = 0; i < hoursX5; i++) { hx5[i].classList.add('on') }
    hoursX5 == 0 ? Array.from(hx5).forEach(hx5 => hx5.classList.remove('on')) : ""
    /////////////////////////////////////////////////////////////////////////////

    for(i = 0; i < hoursX1; i++ ) { hx1[i].classList.add('on') }
    hoursX1 == 0 ? Array.from(hx1).forEach(hx1 => hx1.classList.remove('on')) : ""
    /////////////////////////////////////////////////////////////////////////////

    for(i = 0; i < minsX5; i++ ) { mx5[i].classList.add('on') }
    minsX5 == 0 ?  Array.from(mx5).forEach(mx5 => mx5.classList.remove('on')) : ""
    /////////////////////////////////////////////////////////////////////////////

    for(i = 0; i < minsX1; i++ ) { mx1[i].classList.add('on') }
    minsX1 == 0 ? Array.from(mx1).forEach(mx1 => mx1.classList.remove('on')) : ""
    ////////////////////////////////////////////////////////////////////////////

    // display date in header
    document.querySelector('.black').textContent = year;
    document.querySelector('.red').textContent = monthCorrected;
    document.querySelector('.yellow').textContent = dayCorrected;

    requestAnimationFrame(getTheTime);
} 
requestAnimationFrame(getTheTime)