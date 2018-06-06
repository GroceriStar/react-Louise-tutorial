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

    addMeal = (event) => {
        //so that the whole page doesnt reload 
        event.preventDefault();     
        
        const data = new FormData(event.target);

        var meal = {};
        meal.name = data.get('name');
        meal.description = data.get('description');
        meal.steps = data.get('steps');
        meal.imageUrl = data.get('imageUrl');
        
        this.setState({ meals: [...this.state.meals, meal] })
    }

    render() {        
        return (        
        <div>
                <h2>Today you should eat this</h2>
                <form onSubmit={this.addMeal}>
                    <label>Name</label><br/>
                    <input name="name" type="text" /><br/>    
                    <label>Description</label><br/>
                    <textarea name="description" type="text" /><br />
                    <label>Steps</label><br/>
                    <textarea name="steps" type="text" /><br />
                    <label>Image URL</label><br/>
                    <input name="imageUrl" type="text" /><br />                                
                    <br />
                    <input type="submit" value="Add meal" />
                </form>        
            <ul>
            {this.renderMeals()}
            </ul>
        </div>
        );
    }
}
export default MealPlan;