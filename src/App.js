import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/kaylaLogo.png';
import { FaGithub, FaLinkedin, FaRegWindowClose, FaArrowUp } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import profilePic from './images/kaylaProfile.png';
//import { Email } from'https://smtpjs.com/v3/smtp.js';

function App() {
  function openModal(){
    document.getElementById('contact').style.display='block'
}

function closeModal(){
    document.getElementById('contact').style.display='none'
}

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "kaylacwolfe@icloud.com",
//         Password : "1F0CAAB91241E60547F09F52827D205B5115",
//         To : 'kaylacwolfe@icloud.com',
//         From : 'kaylacwolfe@icloud.com',
//         Subject : "An Email From Your Site",
//         Body : "FROM: " + document.getElementById("first").value + " " + document.getElementById("last").value +
//                 "<br> EMAIL: " + document.getElementById("email").value + 
//                 "<br> MESSAGE: " + document.getElementById("message").value
//     }).then(
//       message => alert('Sent Successfully!')
//     );
// }

  return (
    <div style={{backgroundColor: "#C9E4E7"}}>
      <div className="bar">
        <a href="#" className="bar-item bar-button">Home</a>
        <a href="#" className="bar-item bar-button" id="btn" onClick={openModal}>Contact</a>
        <a href="#" className="bar-item bar-button">Work</a>
        <a href="https://www.linkedin.com/in/kayla-wolfe-1a43ab252/" className="bar-item bar-button right" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/kaylacwolfe" className="bar-item bar-button right" target="_blank"><FaGithub /></a>
      </div>
      <div className="content" style={{maxWidth: "1600px"}}>
        <header className="grid center padding-48">
          <img src={logo} className="img-fluid" alt="kaylaLogo" />
          <h1 className="fancy">Software Engineer</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="container margin-bottom padding-large" style={{backgroundColor: "#B4A0E5"}}>
                <div className="center">
                  <h3><strong>My Resume</strong></h3>
                </div>
                <div className="justify">
                  <p>Email: kaylacwolfe@icloud.com</p>
                  <p>Phone: 303-514-3654</p>
                  <h4>Skills</h4>
                  <ul>
                    <li>Comfortable with Linux, OS X, and Microsoft</li>
                    <li>Java, HTML, CSS, Python, C, C++, Javascript, PHP, Assembly</li>
                    <li>ReactJS, Bootstrap, jQuery</li>
                    <li>SQL (postreSQL)</li>
                    <li>Git</li>
                    <li>REST APIs</li>
                  </ul>
                  <div className="row margin-bottom" style={{display: "none"}}></div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="white margin-bottom">
                <img src={profilePic} style={{width: "100%"}} />
                <div className="container-fluid padding" style={{backgroundColor: "#CAFFD0"}}>
                  <h3>About Me</h3>
                  <p>
                    Hi! My name is Kayla Wolfe and I am currently a senior at Colorado State University
                    getting my bachelor's in Computer Science with a concentration in Software Engineering.
                    I am originally from Evergreen, Colorado which is a small mountain town just an 
                    hour west of Denver. My time at CSU has been nothing but memorable, in the classes I 
                    took and the things I learned. I love the mountains, hiking, horseback riding and really
                    anything to do with the outdoors. 
                  </p>
                </div>
              </div>
                <div>
                  <div className="container-fluid">
                    <p><button type="button" onClick={openModal} className="button block">Contact Me</button></p>
                  </div>
              </div>
            </div>
          </div>
          <div id="contact" className="modal animate-opacity">
            <div className="modal-content" style={{padding: "32px"}}>
              <div className="container white">
                <button className="right x" style={{backgroundColor: "transparent!important"}}><GrClose onClick={closeModal} /></button>
                <h1 className="wide" style={{textAlign: "left"}}>Contact Me</h1>
                <h4>Or you can email me at: <a href = "mailto: kaylacwolfe@icloud.com" className="email">kaylacwolfe@icloud.com</a></h4>
                <form onsubmit="sendEmail(); closeModal(); return false;">
                  <div className="form">
                    <label for="firstname" required>First Name</label>
                    <input className="input border" type="text" id="first" placeholder="Jane" />
                  </div>
                  <div className="form">
                    <label for="lastname">Last Name</label>
                    <input className="input border" type="text" id="last" placeholder="Doe" required />
                  </div>
                  <br />
                  <label for="email">E-mail</label>
                  <input className="input border" type="email" id="email" placeholder="janedoe@example.com" required />
                  <label for="message">Message</label>
                  <textarea className="input border" id="message" placeholder="Write something..." required></textarea>
                  <br />
                  <button type="submit" className="button block margin-bottom">Send</button>
                </form>
                <br />
              </div>
            </div>
          </div>
          <footer className="container-fluid" style={{marginLeft: "0!important"}}>
            <a href="#" className="button padding-large margin-bottom"><FaArrowUp className="margin-right" />To the top</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
