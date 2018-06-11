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
                <li>{meal.ingredients}</li>
                <li>{meal.directions}</li>
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
        meal.ingredients = data.get('ingredients');
        meal.directions = data.get('directions');
        meal.imageUrl = data.get('imageUrl');
        
        this.setState({ meals: [...this.state.meals, meal] })
    }

    componentWillMount() {        
        var meal = [
            {
                name : "Pancakes",
                description : "Delicious fruit pancakes",
                directions : ["1. Mix dry ingredients ", "2. Add milk and eggs ", "3. Pour into pan "],
                ingredients : ["Flour ", "Eggs ", "Milk "],
                imageUrl : "https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?ixlib=rb-0.3.5&s=ca7cadf4438b09eafc98ef45a2d0546c&auto=format&fit=crop&w=1050&q=80"
            },
            {
                name : "Flapjacks",
                description : "Delicious flapjacks recipe",
                directions : ["1. Mix dry ingredients ", "2. Add milk and eggs ", "3. Pour into pan "],
                ingredients : ["Flour ", "Eggs ", "Milk ", "Sugar ", "Baking powder"],
                imageUrl : "https://images.unsplash.com/photo-1518449065149-843e338dc070?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd1350f43ffe56f19fa6278d64dc893&auto=format&fit=crop&w=634&q=80"
            },
            {
                name : "Scrambled Eggs",
                description : "Basic recipe",
                directions : ["1. Beat eggs ", "2. Heat butter ", "3. Pour into pan "],
                ingredients : ["Butter ", "Eggs ", "Milk "],
                imageUrl : "https://images.unsplash.com/photo-1524250981170-bd522ef63fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f18b175dbfd17d1511d924ad03aab2f&auto=format&fit=crop&w=634&q=80"
            }
        ]
        
        this.setState({ meals: meal });
        
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
                    <label>Ingredients</label><br/>
                    <textarea name="ingredients" type="text" /><br />
                    <label>Directions</label><br/>
                    <textarea name="directions" type="text" /><br />
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