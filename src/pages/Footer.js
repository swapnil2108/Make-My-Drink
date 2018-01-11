import React from 'react';

type Props = {
  foo?: string
}

class Footer extends React.Component<Props>{


render(){
  return(
    <div className = "container-fluid bottom-nav">
      <div className = "row">
        <div className = "col-12">
          <div className = "text-left">
            <h5>Copyrights</h5>
          </div>
          <div className = "text-right">
            <h5>Thank You to <a href = "http://www.thecocktaildb.com/api.php">The CocktailDB</a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Footer;
