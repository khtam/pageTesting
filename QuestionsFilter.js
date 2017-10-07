function filterQuestions() {

   var programmerProfile = {};

   $('.level option:selected').each(function () {
      // alert($(this).parent().attr('id')+" is "+$(this).text());
      var topic = $(this).parent().attr('id');
      programmerProfile[topic] = $(this).text();
   })


}