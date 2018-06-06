import React, { Component } from 'react';
import _ from 'lodash';
class MealPlan extends Component {
  state = {
    meal: '',
    meals: []
  };
renderMeals() {
    return _.map(this.state.meals, meal => <li>{meal}</li>);
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
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}
export default MealPlan;