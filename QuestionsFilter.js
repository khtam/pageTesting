function filterQuestions() {
   $('.level option:selected').each(function () {
      alert($(this).parent.attr('id')+" is "+$(this).text());
   })
}