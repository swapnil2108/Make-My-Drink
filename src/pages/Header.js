import React from 'react';


type Props = {
  foo?: string
}

class Header extends React.Component<Props> {

  render(){
    return(
          <div className = "row firstDiv">
            <div className = "col-12  top-nav">
              <div className = "homeLogo text-left">
                Make-My-Drink
              </div>
              <div className = "about text-right">
                About
              </div>
              <div className = "about text-right">
                whats in my bar
              </div>
            </div>
          </div>
    );
  }
}

export default Header;
