import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import AccountBriefDetails from '../OrgAccountBrief'

const AccountDetailsPopUp = ({showAccount,back}) => {

    const handleBack = () =>{
        back();
      }
  return (
    <Modal show={showAccount} onHide={handleBack} size="lg" scrollable>
        <Modal.Header closeButton>
          <Modal.Title>AccountDetails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <div>
      <div justify="flex">
        <br />
        <div
          style={{
            width: "95%",
            margin: "auto",
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
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h5 className="menu-header-title">
                      <span style={{ color: "black", fontSize: "50px" }}>
                        {" "}
                        Donor
                      </span>
                    </h5>
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
                          <b> Name:</b>
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
                          <b>Phone Number</b>
                        </div>
                        <div className="widget-content-right">
                          <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">
                            +20 1157090116
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left center-elem mr-2">
                          <b>Type</b>
                        </div>
                        <div className="widget-content-right">
                          <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">
                            Pro-bono teacher
                          </span>
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
      </div>
    </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleBack}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AccountDetailsPopUp;