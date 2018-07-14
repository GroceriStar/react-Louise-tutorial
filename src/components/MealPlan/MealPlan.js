import React, { Component } from 'react';
import _ from 'lodash';

class MealPlan extends Component {
  state = {
    meal: '',
    meals: [],
    showAddMealMessage : false
  };

renderMeals() {
    return _.map(this.state.meals, meal => <li>{meal}</li>);
  }

  componentWillMount() {
    this.setState({
      meals: [
        "Eggs with bacon",
        "Spaghetti carbonara",
        "Oatmeal"      
    ]})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.meals.length < this.state.meals.length) {
      this.setState({showAddMealMessage: true});
      setTimeout(() => this.setState({showAddMealMessage: false}), 1000);
    }
  }

  render() {
    const onChange = (event) => {
      this.setState({meal: event.target.value})
    }

    return(
      <div>
        <h2>Today you should eat this</h2>
        <input 
          onChange={onChange} 
          value={this.state.meal} 
          type="text" 
        />
        <button 
          onClick={() => this.setState({meals: [...this.state.meals, this.state.meal]})}>
          Add meal</button>
        {this.state.showAddMealMessage ? <p>New meal added</p> : null}
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}
export default MealPlan;