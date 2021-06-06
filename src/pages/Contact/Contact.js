import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="profile-card">
      <img
        src="https://avatars.githubusercontent.com/u/71107818?v=4"
        alt="Profile"
      />
      <h1>Oğuzcan Uzunöner</h1>
      <p className="title">
        <ul>
          <li>
            🎓 I'm currently studying at Karadeniz Technical University
            Management Information Systems.
          </li>
          <li>🔭 I'm currently working to become a Full Stack Developer. </li>
          <li>
            💬 Ask me about HTML, CSS, JavaScript, PHP, PHP Mailer, MySQL, SQL
            Server, Python, Flask, Tkinter, WordPress, LimeSurvey, Moodle,
            OpenCart, Bootstrap, React.{" "}
          </li>
          <li>
            ⚡ Fun fact: I love to sing and play guitar, drums and harmonica. I
            love to watch tv-series.
          </li>
        </ul>
        <a href={"http://github.com/oguzcanuzunoner"}>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github"
          className="social-img"
        />
      </a>
      <a href={"http://linkedin.com/in/oguzcanuzunoner"}>
        <img
          src="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"
          alt="linkedin"
          className="social-img"
        />
      </a>
      <a href={"http://instagram.com/oguzcanuzunoner"}>
        <img
          src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667"
          alt="instagram"
          className="social-img"
        />
      </a>
      </p>
      
    </div>
  );
}

export default Contact;
