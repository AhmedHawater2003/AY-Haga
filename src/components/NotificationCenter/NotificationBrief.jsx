import { useState } from "react";
import AnnouncementPopUp from "./AnnouncementPopUp";
import RequestPopUp from "./RequestPopUp";
const NotificationBrief = () => {
  const [showRequest, setShowRequest] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(false);

  const handleShowRequest = () => {
    setShowRequest(true);
    setShowAnnounce(false);
  };
  const handleShowAnnounce = () => {
    setShowRequest(false);
    setShowAnnounce(true);
  
  };
  const back = () => {
    setShowRequest(false);
    setShowAnnounce(false);
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row", gap: "4rem", justifyContent:"center",alignItems:"center" }}>
      {/* <div>
        <h1 className="mb-3">
          Announcements <i className="bi bi-bell" style={{ color: "blue" }}></i>
        </h1>
        <div>
          <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Maintenance</div>A scheduled maintenance
              on our online system on <strong>June 15th, 2023</strong>
            </div>
            <small>
              2 hours ago<i className="bi bi-envelope-fill  ms-2"></i>
            </small>
          </a>
          <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">komedy gold</div>
              meen shenawy da?
            </div>
            <small>
              3 days ago <i className="bi bi-envelope-open-fill"></i>
            </small>
          </a>
          <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">New goverment dump action</div>
              new bridge in the hood boiizz
            </div>
            <small>
              21 days ago <i className="bi bi-envelope-open-fill"></i>
            </small>
          </a>
        </div> */}
      {/* </div> */}
      <div>
        <div>
          <h1 className="mb-3">
          Announcements <i className="bi bi-flag"></i>
          </h1>
          <div className="list-group ">
            <a onClick={handleShowAnnounce} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">they don't belive in us </div>
                God did + nt give us the spirit of fear
              </div>
              <small>
                3 minutes ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
            <a onClick={handleShowAnnounce} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">bonitaaaaa</div>A scheduled delivery on{" "}
                <strong>June 15th, 2023</strong> on my way to steal your girl
              </div>
              <small>
                2 hours ago<i className="bi bi-envelope-fill ms-2"></i>
              </small>
            </a>

            <a onClick={handleShowAnnounce} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Got some bags of blood</div>
                new corpse with fresh blood bags, come and get it before
                vampires
              </div>
              <small>
                3 days ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="mb-3">
            Donation Requests <i className="bi bi-flag"></i>
          </h1>
          <div className="list-group ">
            <a onClick={handleShowRequest} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">they don't belive in us </div>
                God did + nt give us the spirit of fear
              </div>
              <small>
                3 minutes ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
            <a onClick={handleShowRequest} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">bonitaaaaa</div>A scheduled delivery on{" "}
                <strong>June 15th, 2023</strong> on my way to steal your girl
              </div>
              <small>
                2 hours ago<i className="bi bi-envelope-fill ms-2"></i>
              </small>
            </a>

            <a onClick={handleShowRequest} className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Got some bags of blood</div>
                new corpse with fresh blood bags, come and get it before
                vampires
              </div>
              <small>
                3 days ago <i className="bi bi-envelope-open-fill"></i>
              </small>
            </a>
          </div>
        </div>
      </div>
    </div>
    <RequestPopUp show={showRequest} back={back}/>
      <AnnouncementPopUp show={showAnnounce} back={back}/>
    </>
  );
};

export default NotificationBrief;
