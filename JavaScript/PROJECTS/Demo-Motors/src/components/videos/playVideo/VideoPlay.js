import React from 'react';
import { Link } from 'react-router-dom';

import './play-video.css';

const VideoPlay = () =>  {   
            return (
                <div id="play-video">
                    <div className="container">
                       
                            <h3 className="mb-1 text-center">Honda</h3>
                            <div className=" div embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item vid" src="https://www.youtube.com/embed/HG2Xii3dHEk" title="myVideo"> </iframe>
                            </div>
                
                        <div className="buttons">
                            <Link to="#" className="btn btn-outline-danger a-btn">
                                Comments
                            </Link> 
                        </div>
                    </div >
                    <div className="container">
                       
                       <h3 className="mb-1 text-center">Honda</h3>
                       <div className=" div embed-responsive embed-responsive-16by9">
                           <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/NjbCgqnodg8" title="myVideo"> </iframe>
                       </div>
           
                   <div className="buttons">
                       <Link to="#" className="btn btn-outline-danger a-btn">
                           Comments
                       </Link> 
                   </div>
               </div >
               <div className="container">
                       
                       <h3 className="mb-1 text-center">Honda</h3>
                       <div className=" div embed-responsive embed-responsive-16by9">
                           <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yXWOPrRnxfo" title="myVideo"> </iframe>
                       </div>
           
                   <div className="buttons">
                       <Link to="#" className="btn btn-outline-danger a-btn">
                           Comments
                       </Link> 
                   </div>
               </div >
                </div>
            )    
    }



export default VideoPlay;


