import React from "react"
import Video from "./Video"


function aboutUs () {

return (
<div>
    <div className="grid-container-showcase">
      <div className="grid-item item1 img">
          <img src='/images/TeMoa5.jpg' alt='truck-front'/>
        </div>
      <div className="grid-item item3 img50">
          <img src='/images/Jed1.jpg' alt='our other dog mate Jethro or Jed'/>
        </div>
      <div className="grid-item item2 img50">
          <img src='/images/TeMoa10.jpg' alt='truck side and mountain view'/>
        </div>
      <div className="grid-item item4">
          <Video/>
        </div>
      <div className="grid-item item5 img70">
          <img  src='/images/TeMoa8.jpg' alt='truck back side mountain snow'/>
        </div>
    </div>
      <h5>
        Based at The Queen Charlotte Tavern only 25 mintues from Picton, our aim is to transport people and promote local experiences to showcase our kiwi culture! Mauri Ora
      </h5>
  </div>

)}

export default aboutUs