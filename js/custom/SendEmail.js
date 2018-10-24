function SendEmail() {
  $.ajax({
    type:"POST",
    url:"./php/send.php",
    data:{emailData:'test'},
      success(data) {}
  });
}
