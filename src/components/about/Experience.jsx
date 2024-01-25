import React from "react";

const experienceContent = [
  {
    year: "2020 - Present",
    position: "Machine Learning",
    compnayName: "Nareasuan University",
    details: `Insect-pest species analysis system
with Deep learning techniques`,
  },
  {
    year: "2021 - 2024",
    position: "Web Developer",
    compnayName: "QMIX & CPAC",
    details: `Develop from requirements in company.`,
  },
  {
    year: "2022",
    position: "Machine Learning",
    compnayName: "CPAC",
    details: `Thai plate Recognition && Automate STR Prediction`,
  },
  {
    year: "2023 - 2024",
    position: "Data Managements",
    compnayName: "CPAC",
    details: `Pull data to data center`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
