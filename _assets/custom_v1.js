// Back to setInterval due to higher cpu with requestAnimationFrame

setInterval(() => {  

    var time = new Date();
    var year = time.getFullYear().toString().substring(2,4);
    var month = time.getMonth() + 1; // Jan = 0, Dec = 11
    var day = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    // var seconds = time.getSeconds();
    // makes month two digits if less than 10
    var monthCorrected = month < 10 ? '0' + month : '' + month;
    var dayCorrected = day < 10 ? '0' + day : '' + day;
    
    var hoursX5 = Math.floor(hours / 5); // division gives quotient & discards remainder to give 5 hour groups
    var hoursX1 = Math.floor(hours % 5); // modulo gives remainder & discards quotient to give single hours
    var minsX5 = Math.floor(minutes / 5); // same for 5 minutes blocks
    var minsX1 = Math.floor(minutes % 5); // same for 1 minute blocks

    // get a node list for each group
    var hx5 = document.querySelectorAll('.hx5 > div');
    var hx1 = document.querySelectorAll('.hx1 > div');
    var mx5 = document.querySelectorAll('.mx5 > div');
    var mx1 = document.querySelectorAll('.mx1 > div');
    
    // Helper function to update classes
    function updateClasses(nodeList, count) {
        nodeList.forEach((node, index) => {
            if (index < count) {
                node.classList.add('on');
            } else {
                node.classList.remove('on');
            }
        });
    }

    // Update the classes for each group
    updateClasses(hx5, hoursX5);
    updateClasses(hx1, hoursX1);
    updateClasses(mx5, minsX5);
    updateClasses(mx1, minsX1);

    // display date in header
    document.querySelector('.black').textContent = year;
    document.querySelector('.red').textContent = monthCorrected;
    document.querySelector('.yellow').textContent = dayCorrected;
    
}, 1000);
