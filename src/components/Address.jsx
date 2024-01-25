import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">
          38/116 Gusto Townhome Ratchapruek - Rama 5, Bangkrang Sub-district,
          Muang Nonthaburi District, Nonthaburi, 11000
        </span>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:steve@mail.com">nontawan@scg.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: 0840240441">084-024-0441</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
