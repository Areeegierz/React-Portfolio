import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";
import axios from "axios";
import { BASEURL } from "../../repository/repository";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const [data, setData] = useState([]);
  const [python, setPython] = useState([]);
  const [asp, setAsp] = useState([]);
  const [react, setReact] = useState([]);
  useEffect(() => {
    getProject();
    getProjectByPython();
    getProjectByASP();
    getProjectByReact();
  }, []);
  function getProject() {
    axios.get(BASEURL + `/api/Project/Get`).then((res) => {
      console.log(res);
      setData(res.data);
    });
  }
  function getProjectByPython() {
    axios.get(BASEURL + `/api/Project/getByPython`).then((res) => {
      console.log(res);
      setPython(res.data);
    });
  }
  function getProjectByASP() {
    axios.get(BASEURL + `/api/Project/GetByASP`).then((res) => {
      console.log(res);
      setAsp(res.data);
    });
  }
  function getProjectByReact() {
    axios.get(BASEURL + `/api/Project/GetByReact`).then((res) => {
      console.log(res);
      setReact(res.data);
    });
  }
  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>ALL</Tab>
            <Tab>PYTHON</Tab>
            <Tab>ASP.NET Core 7 MVC + SQL SERVER </Tab>
            <Tab>ASP.NET Core 7 Web API + SQL SERVER + REACT</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {data.map((item) => {
                  const { id, name, type, logo, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src={BASEURL + logo}
                          alt="portfolio project demo"
                        />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      <b style={{ fontSize: "22px" }}>{name}</b>
                    </div>

                    // const { id, type, image, delayAnimation } = item;

                    // <div
                    //   key={id}
                    //   data-aos="fade-right"
                    //   data-aos-delay={delayAnimation}
                    // >
                    //   <div
                    //     className="tab-content"
                    //     onClick={() => handleModal(id)}
                    //   >
                    //     <img src={image} alt="portfolio project demo" />
                    //     <h3>
                    //       <span className="conent-title">{type}</span>
                    //     </h3>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {python.map((item) => {
                  const { id, name, type, logo, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src={BASEURL + logo}
                          alt="portfolio project demo"
                        />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      <b style={{ fontSize: "22px" }}>{name}</b>
                    </div>

                    // const { id, type, image, delayAnimation } = item;

                    // <div
                    //   key={id}
                    //   data-aos="fade-right"
                    //   data-aos-delay={delayAnimation}
                    // >
                    //   <div
                    //     className="tab-content"
                    //     onClick={() => handleModal(id)}
                    //   >
                    //     <img src={image} alt="portfolio project demo" />
                    //     <h3>
                    //       <span className="conent-title">{type}</span>
                    //     </h3>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {asp.map((item) => {
                  const { id, name, type, logo, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src={BASEURL + logo}
                          alt="portfolio project demo"
                        />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      <b style={{ fontSize: "22px" }}>{name}</b>
                    </div>

                    // const { id, type, image, delayAnimation } = item;

                    // <div
                    //   key={id}
                    //   data-aos="fade-right"
                    //   data-aos-delay={delayAnimation}
                    // >
                    //   <div
                    //     className="tab-content"
                    //     onClick={() => handleModal(id)}
                    //   >
                    //     <img src={image} alt="portfolio project demo" />
                    //     <h3>
                    //       <span className="conent-title">{type}</span>
                    //     </h3>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {react.map((item) => {
                  const { id, name, type, logo, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                        style={{ backgroundColor: "white" }}
                      >
                        <img
                          src={BASEURL + logo}
                          alt="portfolio project demo"
                        />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                      <b style={{ fontSize: "22px" }}>{name}</b>
                    </div>

                    // const { id, type, image, delayAnimation } = item;

                    // <div
                    //   key={id}
                    //   data-aos="fade-right"
                    //   data-aos-delay={delayAnimation}
                    // >
                    //   <div
                    //     className="tab-content"
                    //     onClick={() => handleModal(id)}
                    //   >
                    //     <img src={image} alt="portfolio project demo" />
                    //     <h3>
                    //       <span className="conent-title">{type}</span>
                    //     </h3>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
