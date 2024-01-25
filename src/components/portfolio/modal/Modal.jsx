import React, { useEffect, useState } from "react";
import img1 from "../../../assets/img/portfolio/project-1.jpg";
import img2 from "../../../assets/img/portfolio/project-2.jpg";
import portfolioVideo from "../../../assets/img/portfolio/video.mp4";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { BASEURL } from "../../../repository/repository";

const Modal = ({ modalId, setGetModal }) => {
  const [project, setProject] = useState();
  const [image, setImage] = useState([]);
  useEffect(() => {
    if (modalId) {
      getProjectById(modalId);
    }
  }, [modalId]);
  function getProjectById(id) {
    axios.get(BASEURL + `/api/Project/GetById?id=${id}`).then((res) => {
      console.log(res);
      setProject(res.data);
      getImageById(id);
    });
  }
  function getImageById(id) {
    axios.get(BASEURL + `/api/Image/GetByPid?id=${id}`).then((res) => {
      console.log(res);
      setImage(res.data);
    });
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };
  return (
    <div className="modal_portfolio">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div className="modal__content">
        <div data-aos="fade">
          {/* {JSON.stringify(project)}
          {JSON.stringify(image)} */}
          <h2 className="heading mb-2">{project.name}</h2>
          <div className="modal__details">
            <div className="row open-sans-font">
              {/* <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-file-text-o pr-2"></i>
                    Project:{" "}
                    <span className="ft-wt-600 uppercase">{project.name}</span>
                  </div> */}
              <div className="col-12 col-sm-12 mb-2">
                <i className="fa fa-user-o pr-2"></i>
                Client :{" "}
                <span className="ft-wt-600 uppercase">{project.client}</span>
              </div>
              <div className="col-12 col-sm-12 mb-2">
                <i className="fa fa-code pr-2"></i>
                Language :{" "}
                <span className="ft-wt-600 uppercase">{project.language}</span>
              </div>
            </div>
          </div>
          {image.length > 0 ? (
            <figure className="modal__img">
              <Slider {...settings} style={{ zIndex: 9999999 }}>
                {image.map((item) => (
                  <div>
                    <img
                      src={BASEURL + item.path}
                      alt="portfolio project demo"
                      style={{
                        width: "895px",
                        height: "340px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </figure>
          ) : (
            <div style={{ justifyContent: "center", textAlign: "center" }}>
              <b>ไม่มีภาพประกอบโปรเจ็กต์</b>
            </div>
          )}
          <button className="close-modal" onClick={() => setGetModal(false)}>
            <img src={CloseImg} alt="portfolio project demo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
