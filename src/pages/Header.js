import React from 'react';


type Props = {
  foo?: string
}

class Header extends React.Component<Props> {

  render(){
    return(
      <div className = "top-nav">
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-12">
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
        </div>
      </div>
    );
  }
}

export default Header;
