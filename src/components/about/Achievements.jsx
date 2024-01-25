import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "years of", subTitle2: "experience" },
  { title: "15", subTitle1: "completed", subTitle2: "projects" },
  // { title: "81", subTitle1: "Happy", subTitle2: "customers" },
  // { title: "53", subTitle1: "awards", subTitle2: "won" },
];

const Achievements = () => {
  return (
    <div className="row">
      <div className="col-12 mb-5">
        <h3>Attitude Coding</h3>
        <p>
          I don't think writing code is difficult. If I understand the
          structure, keywords, and logic, I can write any language.
        </p>
      </div>
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <div className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
