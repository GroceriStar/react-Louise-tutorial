import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {           
            meals: []
          };
    }
 
    renderMeals() {
        return _.map(this.state.meals, meal =>
            <div>
                <li>{meal.name}</li>    
                <li>{meal.description}</li>
                <li>{meal.steps}</li>
                <img src={meal.imageUrl} width="200px" alt="Meal"></img>
                <br />
            </div>);
    }
  
    onAddMeal = () => {        
        var meal = {};

        meal.name = document.getElementById("name").value;        
        meal.description = document.getElementById("description").value;        
        meal.steps = document.getElementById("steps").value;        
        meal.imageUrl = document.getElementById("imageUrl").value;        
        
        this.setState({ meals: [...this.state.meals, meal] })
}

render() {
    return(
      <div>
            <h2>Today you should eat this</h2>
            <label>Name</label><br/>
            <input id="name" type="text" /><br/>    
            <label>Description</label><br/>
            <textarea id="description" type="text" /><br />
            <label>Steps</label><br/>
            <textarea id="steps" type="text" /><br />
            <label>Image URL</label><br/>
            <input id="imageUrl" type="text" /><br/>
        <br/>    
        <button onClick={this.onAddMeal}>Add meal</button> <br/>
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}
export default MealPlan;