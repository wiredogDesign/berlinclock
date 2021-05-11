"use strict";
setInterval(function () {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();

  var hoursX5 = Math.floor(hours / 5); // gives quotient & discards remainder
  var hoursX1 = Math.floor(hours % 5); // gives remainder & discards quotient
  var minsX5 = Math.floor(minutes / 5);
  var minsX1 = Math.floor(minutes % 5); // get a node list for each group

  // get a node list for each group
  var hx5 = document.querySelectorAll('.hx5 > div');
  var hx1 = document.querySelectorAll('.hx1 > div');
  var mx5 = document.querySelectorAll('.mx5 > div');
  var mx1 = document.querySelectorAll('.mx1 > div'); 
  
  // now the working bits
  var i = 0; 
  
  // loop through the nodes and apply <on> class, eg quotient at 10:00 is 2 so only first two blocks would be on
  // next remove the <on> class when the count reaches 0
  for (i = 0; i < hoursX5; i++) {
    hx5[i].classList.add('on');
  } 
  if (hoursX5 == 0) {
    Array.from(hx5).forEach(function (hx5) {
      return hx5.classList.remove('on');
    });
  }
  /////////////////////////////////////////// 

  for (i = 0; i < hoursX1; i++) {
    hx1[i].classList.add('on');
  }
  if (hoursX1 == 0) {
    Array.from(hx1).forEach(function (hx1) {
      return hx1.classList.remove('on');
    });
  }
  /////////////////////////////////////////// 

  for (i = 0; i < minsX5; i++) {
    mx5[i].classList.add('on');
  }
  if (minsX5 == 0) {
    Array.from(mx5).forEach(function (mx5) {
      return mx5.classList.remove('on');
    });
  }
  /////////////////////////////////////////// 

  for (i = 0; i < minsX1; i++) {
    mx1[i].classList.add('on');
  }
  if (minsX1 == 0) {
    Array.from(mx1).forEach(function (mx1) {
      return mx1.classList.remove('on');
    });
  }
  
}, 1000);