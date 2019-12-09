// Code By Webdevtrick ( https://webdevtrick.com )
var carousel = $('#carousel'),
    threshold = 20,
    slideWidth = 155,
    dragStart,
    dragEnd;

$('#next').click(function () {
    shiftSlide(-1)
})
$('#prev').click(function () {
    shiftSlide(1)
})

carousel.on('mousedown', function () {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function () {
        dragEnd = event.pageX;
        $(this).css('transform', 'translateX(' + dragPos() + 'px)')
    })
    $(document).on('mouseup', function () {
        if (dragPos() > threshold) {
            return shiftSlide(1)
        }
        if (dragPos() < -threshold) {
            return shiftSlide(-1)
        }
        shiftSlide(0);
    })
});

function dragPos() {
    return dragEnd - dragStart;
}

function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
        .addClass('transition')
        .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function () {
        if (direction === 1) {
            $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
            $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition')
        carousel.css('transform', 'translateX(0px)');
    }, 700)
}

// Code by http://talkerscode.com/webtricks/digital-clock-with-complete-time-and-date-using-css-and-javascript.php
window.onload = setInterval(clock, 1000);

function clock() {
    var d = new Date();

    var date = d.getDate();

    var month = d.getMonth();
    var montharr = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = montharr[month];

    var day = d.getDay();
    var dayarr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day = dayarr[day];

    var hour = d.getHours();
    var min = d.getMinutes();

    document.getElementById("date").innerHTML = day + " " + date + " " + month + " ";
    document.getElementById("time").innerHTML = hour + ":" + min + " ";
}
