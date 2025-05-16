$('#bar').on('click', function () {
   $('#bar').addClass('hide');
   $('#bar').removeClass('show');

   $('#x-mark').removeClass('hide');
   $('#x-mark').addClass('show');

   $('.navbar').addClass('show');

});

$('#x-mark').on('click', function () {
   $('#x-mark').addClass('hide');
   $('#x-mark').removeClass('show');

   $('#bar').removeClass('hide');
   $('#bar').addClass('show');

   $('.navbar').removeClass('show');

});



   