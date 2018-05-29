import React, { Component } from 'react';
import DayChecker from './components/DayChecker/DayChecker';
import MonthChecker from './components/Calendar/MonthChecker';
import Header from './components/Header/Header';
import CalenderV2 from './components/Calendar/Calendar-v2';
import MealPlan from './components/MealPlan/MealPlan';


class App extends Component {
  
  render() {
    return [
      <MealPlan/>,
      <Header />,      
      <DayChecker />,         
      <MonthChecker />,      
      <CalenderV2 />,
    ];
  }
}

export default App;     