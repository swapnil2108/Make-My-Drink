import React from 'react';


type Props = {
  foo?: string
}

class Header extends React.Component<Props> {

  render(){
    return(
          <div className = "row firstDiv">
            <div className = "col-12 top-nav">
              <div className = "text-left">
                <h6 className="topNavText">Make-My-Drink</h6>
              </div>
              <div className = "topNavText text-right">
                <h6 className="topNavText">About</h6>
              </div>
              <div className = "topNavText text-right">
                <h6 className="topNavText">whats in my bar</h6>
              </div>
            </div>
          </div>
    );
  }
}

export default Header;
