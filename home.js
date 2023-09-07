function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaylacwolfe@icloud.com",
        Password : "1F0CAAB91241E60547F09F52827D205B5115",
        To : 'kaylacwolfe@icloud.com',
        From : document.getElementById("email").value,
        Subject : "An Email From Your Site",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}