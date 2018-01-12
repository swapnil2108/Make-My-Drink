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
        <div className = "row randomDrinks">
          <div className = "container-fluid">
            <div className = "row text-center">
              <div className = "col-12">
                <h6 className = "text-center">Our today's special !! Just for your refreshment</h6>
                <br></br>
              </div>
            </div>
            <div className = "row">
              <div className = "col-12 text-center">
              <div  className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
              {this.state.drinks.map((drink,index)=>{
                if(index === 0){
                  return(
                    <div key={index} className="carousel-item active">
                      <div className = "container-fluid text-center">
                        <div className = "row text-center">
                        <div  className = "col-6 text-center">
                          <img className= "carouselImg d-block w-100" src = {drink.strDrinkThumb} alt={index}></img>
                        </div>
                        <div className = "col-6">
                          <h2 className = "drinkName">{drink.strDrink}</h2>
                          <h6>{drink.strAlcoholic}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
                else{
                  return(
                  <div key={index}  className="carousel-item">
                    <div className = "container-fluid">
                      <div className = "row">
                        <div className = "col-6">
                          <img className= "carouselImg d-block w-100" src = {drink.strDrinkThumb} alt={index}></img>
                        </div>
                        <div className = "col-6">
                          <h2 className = "drinkName">{drink.strDrink}</h2>
                          <h6>{drink.strAlcoholic}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
              })}
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      )
}
}
export default Random;
