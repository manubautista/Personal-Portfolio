import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.startData} - {item.endData}</em></p>

                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Certifications</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.certifications && resumeData.certifications.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <a href={item.link} target="_blank"  id='cert'><h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.startData} - {item.endData}</em></p></a>

                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                        <img src={item.skill_img} alt={item.skillname} className="skill_img"/>
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