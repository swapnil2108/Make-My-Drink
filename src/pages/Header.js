import React from 'react';


type Props = {
  foo?: string
}

class Header extends React.Component<Props> {

  render(){
    return(
          <div className = "row sticky">
            <div className = "col-12 top-nav text-center">
              <div className = "container-fluid">
                <div className = "row">
                  <div className = "col-2 text-left">
                    <h6 className="topNavText">Make-My-Drink</h6>
                  </div>
                  <div className = "col-8 text-right"></div>
                  <div className = "col-1 text-center">
                    <a className="topNavTextAbout" href = "#about">About</a>
                  </div>
                  <div className = "col-1 text-center">
                    <h6 className="WIMB">WI<br></br>MB</h6>
                  </div>
                </div>
                </div>
              </div>
            </div>
    );
  }
}

export default Header;
