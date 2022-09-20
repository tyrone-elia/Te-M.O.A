import React from 'react'

function Header() {
  return (
    <div>
      <div className="grid-container-header">
        <div className="grid-item item1">
            <h1> Te Mauri Ora Adventures </h1>
            <img src='/images/TeMoa8.jpg' alt='truck front side snow'/>
          </div>
        <div className="grid-item item2 img50">
          <img  src='/images/whanau.jpg' alt=''/>
        </div>
        <div className="grid-item item4 img50">
          <img src='/images/kudama.jpg' alt='our dog Kudama or Kuda'/>
        </div>
        <div className="grid-item item3 img50">
          <img src='/images/TheQueen.jpg' alt='our Queen Charlotte'/>
        </div>
        <div className="grid-item item5">
          <h4>
            Te M.O.A was created through passion to promote and showcase our beautiful country culture &amp; people.
          </h4>
        </div>
      </div>
    </div>
  )}

export default Header

  