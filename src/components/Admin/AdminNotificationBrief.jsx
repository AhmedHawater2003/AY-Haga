const AdminNotificationBrief = () => {
    return (
        <div style={{color:"#0ca678"}}>
          <h1 style={{textAlign: "center"}}>
            Latest Notifications: <i className="bi bi-bell" style={{ color: "blue" }}></i>
          </h1>
          <div style={{boxShadow:"0 0 0 0.1rem rgba(40, 167, 69, 0.25)", padding:"10px",borderRadius:"20px"}}>
              <div style={{margin:"2px"}}>
                <div style={{fontWeight:"bold",fontSize:"20px"}}>New Organization Request</div>Resala Organization has requested to use the platform 
              </div>

              <small style={{borderBottom:"#1b5e39"}}>
                2 hours ago<i className="bi bi-envelope-fill  ms-2"></i>
              </small>

           
              <div style={{margin:"2px",borderTop:"1px solid #0ca678"}}>
                <div style={{fontWeight:"bold",fontSize:"20px"}}>New Pro-Bono Doctor Request</div>
                    Dr. John Doe has requested to join the platform as a volunteer 
              </div>
              <small>
                3 days ago <i className="bi bi-envelope-open-fill"></i>
              </small>
              <div style={{margin:"2px",borderTop:"1px solid #0ca678"}}>
                <div style={{fontWeight:"bold",fontSize:"20px"}}>New Pro-Bono Teacher Request</div>
                    Mrs. Jane Smith has requested to join the platform as a volunteer
              </div>
              <small>
                21 days ago <i className="bi bi-envelope-open-fill"></i>
              </small>
          </div>
        </div>
    );
  };
  
  export default AdminNotificationBrief;
  