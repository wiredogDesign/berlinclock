var berlinClock = function (dom) {
    this.dom = $(dom);
    this.update();
};

berlinClock.prototype.update = function (d) {
    var d = d || new Date();
    this.current_seconds(d.getSeconds());
    this.current_minutes(d.getMinutes());
    this.current_hours(d.getHours());
};

// berlinClock.prototype.current_seconds = function (seconds) {
//     this.dom.find(".second-row > div").toggleClass("on", seconds % 2 === 1);
// };

berlinClock.prototype.current_minutes = function (minutes) {
    var minutes2 = minutes % 5;
    var minutes1 = (minutes - minutes2) / 5;
    this.dom.find(".minute-top.row > div").each(function (i) {
        $(this).toggleClass("on", --minutes1 >= 0);
    });
    this.dom.find(".minute-bottom.row > div").each(function (i) {
        $(this).toggleClass("on", --minutes2 >= 0);
    });
};

berlinClock.prototype.current_hours = function (hours) {
    var hours2 = hours % 5;
    var hours1 = (hours - hours2) / 5;
    this.dom.find(".hour-top.row > div").each(function (i) {
        $(this).toggleClass("on", --hours1 >= 0);
    });
    this.dom.find(".hour-bottom.row > div").each(function (i) {
        $(this).toggleClass("on", --hours2 >= 0);
    });
};

$(document).ready(function () {
    var berlin_clock = new berlinClock('#berlinClock');
    function tick() {
        berlin_clock.update();
        setInterval(function () {
            berlin_clock.update();
        }, 1000);
    }
    tick();
});