import React from 'react';
import ajax from 'superagent';

type Props = {
  foo?: string,
  drinks: Array <Object>
}
class Random extends React.Component<Props> {
  constructor(props: Object){
    super(props);
    this.state = {drinks: []};

  }

  componentWillMount():mixed{
      let randomURL = `http://www.thecocktaildb.com/api/json/v1/1/random.php`
      let drinkArr = [];
      let a = 1;
      while(a<=3){
        ajax.get(randomURL)
          .end((error,response) => {
            drinkArr.push(response.body.drinks[0]);
            this.saveState(drinkArr)
          });
        a++;
      }
    }

    saveState(data){
      this.setState({drinks: data});
      console.log(this.state.drinks);
    }



  render(){
    return(
      <div className="container-fluid randomDrinks">
        <div className="row">
          <div className="col-4">
            <div className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                {this.state.drinks.map((drink,index)=>{
                  if(index === 0){
                    return(<div key={index} id = {index} className="carousel-item active">
                      <img className= "d-block w-100" src = {drink.strDrinkThumb} alt={index}></img>
                    </div>)
                  }else{
                    return(<div key={index} id = {index} className="carousel-item">
                      <img className= "d-block w-100" src = {drink.strDrinkThumb} alt={index}></img>
                    </div>)
                  }
                })}
              </div>
            </div>
          </div>
          <div className = "col-8 text-center">
            <div className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {this.state.drinks.map((drink,index)=>{
                  if(index === 0){
                    return(<div key={index} id = {index} className="carousel-item active">
                      <h1>{drink.strDrink}</h1>
                      <h4>{drink.strAlcoholic}</h4>
                    </div>)
                  }else{
                    return(<div key={index} id = {index} className="carousel-item">
                      <h1>{drink.strDrink}</h1>
                      <h4>{drink.strAlcoholic}</h4>
                    </div>)
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}
export default Random;
