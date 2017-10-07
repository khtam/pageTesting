function filterQuestions() {

   var programmerProfile = {};

   $('.level option:selected').each(function () {
      // alert($(this).parent().attr('id')+" is "+$(this).text());
      var topic = $(this).parent().attr('id');
      programmerProfile[topic] = $(this).text();
   })

   // questions
   var questionString = '[' +
      '{"topic":"topic1","level":"1","question":"what is the difference between java and javascript"}' +
      ']';

   //parse
   var questions = JSON.parse(questionString);
}