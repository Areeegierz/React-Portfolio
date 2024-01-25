import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "80", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "70", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "65", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "80", skillName: "ASP.NET CORE" },
  { skillClass: "p95", skillPercent: "70", skillName: "REACTJS" },
  { skillClass: "p50", skillPercent: "65", skillName: "NEXTJS" },
  { skillClass: "p65", skillPercent: "65", skillName: "SQL SERVER" },
  { skillClass: "p45", skillPercent: "65", skillName: "MYSQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
