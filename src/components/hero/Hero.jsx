import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroTitleName: "Nontawat Nokpet",
  heroDesignation: "Web Developer",
  heroDescriptions: `I'm a website developer. My work right now is to get the requirements, design the database, design the interface, Web API and Deployment`,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(https://scontent.fbkk22-7.fna.fbcdn.net/v/t1.6435-9/54522654_767175730335840_3417182444346933248_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFUqWOlTpiX-KylSLzkbWZGl8UfRxVrisKXxR9HFWuKwgQRID2smv0bxlzJKPIcmpeRwLgWaxCStYGhz0MJOmix&_nc_ohc=b7lLHR2Nq6oAX-o94Mi&_nc_ht=scontent.fbkk22-7.fna&cb_e2o_trans=t&oh=00_AfA6_ws46mpDIy4ZuMaB2UxxI2wbAkjVLk5UYKBADOz3Jw&oe=65D817E8)`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={
                "https://scontent.fbkk22-7.fna.fbcdn.net/v/t1.6435-9/54522654_767175730335840_3417182444346933248_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeFUqWOlTpiX-KylSLzkbWZGl8UfRxVrisKXxR9HFWuKwgQRID2smv0bxlzJKPIcmpeRwLgWaxCStYGhz0MJOmix&_nc_ohc=b7lLHR2Nq6oAX-o94Mi&_nc_ht=scontent.fbkk22-7.fna&cb_e2o_trans=t&oh=00_AfA6_ws46mpDIy4ZuMaB2UxxI2wbAkjVLk5UYKBADOz3Jw&oe=65D817E8"
              }
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              style={{ objectFit: "cover" }}
            />
            <b
              style={{ color: "yellow", fontSize: "42px" }}
              className="text-uppercase"
            >
              I'm {heroContent.heroTitleName}.
              <span style={{ color: "white" }}>
                <br />
                {heroContent.heroDesignation}
              </span>
            </b>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
