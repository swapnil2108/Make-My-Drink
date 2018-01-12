import React from 'react';
import ajax from 'superagent';

type Props = {
  foo?: string,
  drinks: Array <Object>
}
class Intro extends React.Component<Props> {

  render(){
    return(
      <div className = "row intro">
        <div className="container-fluid">
          <div className ="row">
            <div className = "col-12 text-center">
              <h2>MMD uses the best API with an abundance of data</h2>
              <h4>The CocktailDb</h4>
            </div>
          </div>
          <div className = "row">
            <div className = "col-4 text-center">
              <img className="thumb" src="https://cdn1.tasteline.com/drink3.jpg"></img>
            </div>
            <div className = "col-4 text-center">
              <img className="thumb" src = "https://prods3.imgix.net/images/articles/2017_04/Facebook-Matcha-cocktail-recipe.jpg"></img>
            </div>
            <div className = "col-4 text-center">
              <img className="thumb" src="http://ouachitahighcountry.com/wp-content/uploads/2014/12/abdweb.jpg"></img>
            </div>
          </div>
          <div className = "row">
            <div className = "col-4 text-center">
              <label>ALCOHOLIC</label>
            </div>
            <div className = "col-4 text-center">
              <label>NON-ALCOHOLIC</label>
            </div>
            <div className = "col-4 text-center">
              <label>HOT DRINKS</label>
            </div>
          </div>
          <div className = "row">
            <div className = "col-4 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className = "col-4 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className = "col-4 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Intro;
