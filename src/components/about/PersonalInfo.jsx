import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Nontawat" },
  { meta: "last name", metaInfo: "Nokpet" },
  { meta: "Age", metaInfo: "24 Years" },
  { meta: "Nationality", metaInfo: "Thailand" },
  { meta: "Freelance", metaInfo: "UnAvailable" },
  {
    meta: "Address",
    metaInfo:
      "38/116 Gusto Townhome Ratchapruek - Rama 5, Bangkrang Sub-district, Muang Nonthaburi District, Nonthaburi, 11000  ",
  },
  { meta: "phone", metaInfo: "084-024-0441" },
  { meta: "Email", metaInfo: "nontawan@scg.com.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
