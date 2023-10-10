function openModal(){
    document.getElementById('contact').style.display='block'
}

function closeModal(){
    document.getElementById('contact').style.display='none'
}

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaylacwolfe@icloud.com",
        Password : "1F0CAAB91241E60547F09F52827D205B5115",
        To : 'kaylacwolfe@icloud.com',
        From : 'kaylacwolfe@icloud.com',
        Subject : "An Email From Your Site",
        Body : "FROM: " + document.getElementById("first").value + " " + document.getElementById("last").value +
                "<br> EMAIL: " + document.getElementById("email").value + 
                "<br> MESSAGE: " + document.getElementById("message").value
    }).then(
      message => alert('Sent Successfully!')
    );
}
