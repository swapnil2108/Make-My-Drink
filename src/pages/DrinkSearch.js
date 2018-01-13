import React from 'react';
import ajax from 'superagent';
import Header from './Header';
type Props = {
  foo?: string,
  drinks : Array
}
class DrinkSearch extends React.Component<Props> {
  constructor(props: Object){
    super(props);
    this.state = {drinks: [],drinkDes:null};
  }
  componentWillMount():mixed{
      let randomURL = `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=coffee`
      let drinkDes = `http://www.thecocktaildb.com/api/json/v1/1/search.php?i=coffee`
        ajax.get(randomURL)
          .end((error,response) => {
            this.setState({drinks: response.body.drinks});
            console.log(this.state.drinks);
          });
          ajax.get(drinkDes)
            .end((error,response) => {
              this.setState({drinkDes: response.body.ingredients[0].strDescription});
            });
    }

  render(){
    return(
      <div className = "row text-center">
        <div className = "container-fluid">
          <div className = "row">
            <div className = "col-12">
              <Header/>
            </div>
          </div>
          <div className = "row text-center">
            <div className = "container-fluid text-center">
              <div className = "row text-center">
                {this.state.drinks.map((drinks,index)=>{
                  return (
                    <div className="card col-2 text-center" key = {index}>
                      <img className="card-img-top" src={drinks.strDrinkThumb} alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title">{drinks.strDrink}</h5>
                          <p className="card-text">{drinks.idDrink}</p>
                          <a href="#" className="btn btn-primary">Check Recipe !!</a>
                        </div>
                      </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default DrinkSearch
