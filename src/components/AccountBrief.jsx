import React from 'react'


const AccountBrief = () => {
  return (
    <div>
      {/* <div className="card border-success mb-3" style="max-width: 18rem;">
        <div className="card-header">Account </div>
            <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
         */}
         <div className='row' justify = 'flex'>
         <div className="col-md-12 col-lg-6 col-xl-6">
            <div className="profilecard-shadow-primary profilecard-border mb-3 profilecard">
                <div className="dropdown-menu-header">
                    <div className="dropdown-menu-header-inner bg-primary"  >
                        <div className="menu-header-image"></div>
                        <div className="menu-header-content btn-pane-right p-4"  > 
                            <div className="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine" style={{color : 'black' , borderBlockColor : 'black'}} >
                                <div className="avatar-icon rounded-circle" style={{padding : '10px' , fill : 'black' , color : 'black' , borderColor : 'black'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" class="bi bi-bank" viewBox="0 0 16 16">
                                    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"/>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h5 className="menu-header-title">
                                    <span style={{color : 'black' , fontSize : '50px'}} >  Resala</span></h5>
                                <h6 className="menu-header-subtitle" style={{marginLeft : '5px'}}>  Organization</h6>
                            </div>
                            <div className="menu-header-btn-pane">
                            </div>
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
                                            <b>Representative Name:</b>
                                        </div>
                                        <div className="widget-content-right">
                                            <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_RepresentativeFullName">Ali Mahmoud Shokry Abdelrehim</span>
                                        </div>
                                    </div>
                                </div><hr/>
                            </li>
                            <li className="list-group-item">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left center-elem mr-2">
                                            <b>Age:</b>
                                        </div>
                                        <div className="widget-content-right">
                                            <span >90</span>
                                        </div>

                                    </div>
                                </div>
                            </li>

                           
                        </ul>
                        {/* <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}>
                            <div className="ps__thumb-x" tabindex={'0'} style={{left: '0px', width: '0px'}}></div>
                        </div>
                        <div className="ps__rail-y" style={{top: '0px', height: '200px' , right: '0px'}}>
                            <div className="ps__thumb-y" tabIndex={'0'} style={{top: '0px' , height: '121px'}}></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
            <div className="main-shortcutcard mb-3 shortcutcard">
                <div className="shortcutcard-body">
                    <h5 className="shortcutcard-title">ShortCuts</h5>
                    
                    
                    
                    <div className="grid-menu grid-menu-2col">
                        <div className="no-gutters row">

                            


                                

                                    <div className="d-block col-sm-6 col-xl-6 col-lg-6">
                                        <div className="p-1">
                                            <a className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark" href="">
                                                <i className="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"></i>
                                                GUC Thesis Journal
                                                <div className="widget-subheading opacity-7">
                                                    Bachelor Thesis Journal
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                

                        </div>
                    </div>
                    <div className="divider"></div>

                </div>
            </div>
        </div>
        </div>
         {/* <div className="col-md-12 col-lg-6 col-xl-6">
      <div className="card-shadow-primary card-border mb-3 card">
        <div className="dropdown-menu-header">
          <div
            className="dropdown-menu-header-inner bg-primary"
            style={{ backgroundColor: '#00665c' }}
          >
            <div
              className="menu-header-image"
              style={{
                backgroundImage: 'url(/CSS/architectui-html-pro-1.4.0/assets/images/GUC.jpg)',
              }}
            />
            <div className="menu-header-content btn-pane-right p-4">
              <div className="avatar-icon-wrapper mr-3 avatar-icon-xl btn-hover-shine">
                <div className="avatar-icon rounded-circle">
                  <img
                    src="/CSS/architectui-html-pro-1.4.0/assets/images/images.png"
                    alt="Avatar 5"
                  />
                </div>
              </div>
              <div>
                <h5 className="menu-header-title">
                  <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_LabelUserName">
                    ali.shokry
                  </span>
                </h5>
                <h6 className="menu-header-subtitle">Student</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left center-elem mr-2">
                    <b>Full Name:</b>
                  </div>
                  <div className="widget-content-right">
                    <span id="ContentPlaceHolderright_ContentPlaceHoldercontent_LabelFullName">
                      Ali Mahmoud Shokry Abdelrehim
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    </div> 

  )
}

export default AccountBrief;
