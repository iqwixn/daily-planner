window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});



$(function () {
    $('.saveBtn').on("click", function(){
        var time = $(this).parent().attr('id');
        var text = $(this).siblings(".description").val()
        
        localStorage.setItem(time, text);

    })

    
    $('#currentDay').text(dayjs().format('MMM D, YYYY'));

  });
  

     