import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="../images/IMG_20190303_125115091.jpg"
              alt=""
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>
            <p>{resumeData.worker}</p>
            <p>{resumeData.hobbies}</p>
          </div>
<div className="languages">

<ul>
  <li>Languages</li>
  {
    resumeData.languages && resumeData.languages.map((item) => {
      return(
        <li>
          <img src={item.lang_img} alt={item.langname} className="lang_img"/>
        </li>
      )
    })
  }

</ul>

</div>
        </div>
      </section>
    );
  }
}
