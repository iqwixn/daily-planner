window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});


$(function () {
    $('.saveBtn').on("click", function () {
        var time = $(this).parent().attr('id');
        var text = $(this).siblings(".description").val()

        localStorage.setItem(time, text);

    })

    function colorChange() {
        var currentTime = dayjs().hour()

        $(".time-block").each(function () {
            var divTime = parseInt($(this).attr("id").split("-")[1])
            if (divTime < currentTime) {
                $(this).addClass("past");
            } else if (divTime === currentTime) {
                $(this).removeClass("past")
                $(this).addClass("present");
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future");
            }

        });
    }

    colorChange();

    $("#hour-9 .description").text(localStorage.getItem("hour-9"))
    $("#hour-10 .description").text(localStorage.getItem("hour-10"))
    $("#hour-11 .description").text(localStorage.getItem("hour-11"))
    $("#hour-12 .description").text(localStorage.getItem("hour-12"))
    $("#hour-13 .description").text(localStorage.getItem("hour-13"))
    $("#hour-14 .description").text(localStorage.getItem("hour-14"))
    $("#hour-15 .description").text(localStorage.getItem("hour-15"))
    $("#hour-16 .description").text(localStorage.getItem("hour-16"))
    $("#hour-17 .description").text(localStorage.getItem("hour-17"))


    $('#currentDay').text(dayjs().format('MMM D, YYYY'));

});


