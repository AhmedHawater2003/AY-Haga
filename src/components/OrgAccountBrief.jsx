import React from "react";
import { Button } from "react-bootstrap";
import CategoryModal from "./org/CategoryModal";
import { Card } from "react-bootstrap";
import {Row , Col} from "react-bootstrap";


const OrgAccountBrief = () => {
  return (
    <div>
      {/* <Row> */}
        {/* <Col>
          <br/>
        </Col> */}
        {/* <Col>
        <div 
        style={{
          float : 'right',
          // marginTop : '-10px'
          // position : 'relative',
          // top : '-10px'
        }} */}
        {/* // className="col-md-12 col-lg-6 col-xl-6"
        > */}
          {/* <CategoryModal /> */}
          {/* <br/> */}
        {/* </div>
        </Col> */}
      {/* </Row> */}
      <Row justify="flex">
        <br/>
        <div 
        style={{
          // width : '95%', 
          margin : 'auto'
        }}
        // className="col-md-12 col-lg-6 col-xl-6"
        >
          <div className="profilecard-shadow-primary profilecard-border mb-3 profilecard">
            <div className="dropdown-menu-header">
              <div className="dropdown-menu-header-inner bg-primary">
                <div className="menu-header-image"></div>
                <div className="menu-header-content btn-pane-right p-4">
                  <div
                    className="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine"
                    style={{ color: "black", borderBlockColor: "black" }}
                  >
                    <div
                      className="avatar-icon rounded-circle"
                      style={{
                        padding: "10px",
                        fill: "black",
                        color: "black",
                        borderColor: "black",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        className="bi bi-bank"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
                      </svg>
                    </div>
                  </div>
                  <div style = {{float : 'right'}}>
                    <CategoryModal/>
                  </div>
                  <div>
                    <h5 className="menu-header-title">
                      <span style={{ color: "black", fontSize: "50px" }}>
                        {" "}
                        Resala
                      </span>
                    </h5>
                    <h6
                      className="menu-header-subtitle"
                      style={{ marginLeft: "5px" }}
                    >
                      {" "}
                      Organization
                    </h6>
                  </div>
                  <div className="menu-header-btn-pane"></div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left center-elem mr-2">
                          <b>Organization Type:</b>
                        </div>
                        <div className="widget-content-right">
                          <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">
                            Non-Profit
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left center-elem mr-2">
                          <b>Representative Name:</b>
                        </div>
                        <div className="widget-content-right">
                          <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">
                            Mohamed ElSayed
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left center-elem mr-2">
                          <b>Email:</b>
                        </div>
                        <div className="widget-content-right">
                          <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">
                          mohamed.el-sayed@resala.org
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left center-elem mr-2">
                          <b>Website:</b>
                        </div>
                        <div className="widget-content-right">
                          <span><a className="card-description" href='https://resala.org' target='_blank'>Resala</a></span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-12 col-lg-6 col-xl-6">
          <CategoryModal />
        </div> */}
      </Row>
    </div>
    // <Card>
    //   <Card.Header>
    //   <div
    //     className="avatar-icon rounded-circle"
    //     style={{
    //       padding: "10px",
    //       fill: "black",
    //       color: "black",
    //       borderColor: "black",
    //     }}
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="black"
    //       class="bi bi-bank"
    //       viewBox="0 0 16 16"
    //     >
    //       <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
    //     </svg>
    //   </div>
    
    //   </Card.Header>
    // </Card>

  );
};

export default OrgAccountBrief;
