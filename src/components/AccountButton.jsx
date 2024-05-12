import { useState } from 'react'
import { Popover } from 'react-bootstrap'

const AccountButton = () => {
    const [showPopup , setShowPopup] = useState(false);

  return (
    // <div>
    //   <button type="button" class="btn btn-success">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    //                 <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
    //             </svg>
    //             Resala
    //           </button>
    // </div>
    <div class="app-header-right">
                <div class="header-dots">
                   
                </div>
                
              
                

     <div class="widget-content-right ml-3 header-user-info ">
                                <h4> </h4>
                            </div>
     <div class="header-btn-lg pr-0">
                    <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                            <div class="widget-content-left">
                                <div class="btn-group">
                                    <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                         Hello, <span>GUC\ali.shokry</span>
                                    </a><a id="ContentPlaceHolderperson_LinkButtonactor" href="javascript:__doPostBack('ctl00$ctl00$ContentPlaceHolderperson$LinkButtonactor','')"></a>
                                       
                                    
                                    
                                 
                                </div>
                            </div>
                            <div class="widget-content-left  ml-3 header-user-info">
                                <div class="widget-heading">
                                   {/* <img width="42" class="rounded-circle" src="/template/theme/assets/images/images.png" alt=""/>
                                    */}
                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                 </svg>
                                </div>
                                <div class="widget-subheading">
                                   
                                </div>
                            </div>
                            <div class="widget-content-right header-user-info ml-3">
                              
                            </div>
                        </div>
                    </div>
                </div>


   

                <div class="header-btn-lg">
                    
                </div>        </div>
  )
}

export default AccountButton
