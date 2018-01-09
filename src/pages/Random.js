
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

      // for(var i = 0;i <= this.state.drinks[0].length;i++){
      //   console.log("hello");
      //   console.log(this.state.drinks[0]);
      // }
    }

    saveState(data){
      this.setState({drinks: data});
    }
    //

  render(){
    return(
      <div className="slider">
        {this.state.drinks.map((drink,index)=>{
          return(<div key = {index}>
            <p>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb}></img>}
          </div>);
        return(<div key = {index}>
                <ul className="slides">
                  <li>
                    <img alt="" src={drink.strDrinkThumb}></img>
                    <div className="caption center-align">
                      <h3>This is our big Tagline!</h3>
                      <h5 className="">{drink.strDrinkThumb}</h5>
                    </div>
                  </li>
                </ul>
              </div>);
        })}
      </div>
    );
}
}
export default Random;
