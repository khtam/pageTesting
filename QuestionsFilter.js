function filterQuestions() {
   $('.level').forEach(function () {
      alert($(this).id+" is "+$(this).text());
   })
}