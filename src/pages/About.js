import React from 'react';

type Props = {
  foo?: string
}

class About extends React.Component<Props>{


render(){
  return(
    <div className = "row about" id="about">
      <div className = "container-fluid">
        <div className = "row">
          <div className = "col-12 text-center">
              <h5 className = "bottomText">Check out the Database from the cocktailDB</h5>
          </div>
        </div>
        <div className = "row text-center">
          <div className = "col-12">
            <a href ="http://www.thecocktaildb.com/api.php" target="_blank"><button className = "btn cocktailApi">The CocktailDb</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default About
