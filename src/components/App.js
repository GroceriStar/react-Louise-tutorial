import React, { Component } from 'react';
import DayChecker from './DayChecker';
import MonthChecker from './Test/Part3/MonthChecker';
import Header from './Header';
import Calender from './Test/Part2/Calender';
import CalenderV2 from './Test/Part3/Calendar-v2';
import MealPlan from './MealPlan';


class App extends Component {
  
  render() {
    return [
      <MealPlan/>,
      <Header />,      
      <DayChecker />,         
      <MonthChecker />,      
      <CalenderV2 />,
      <Calender />,   
      
    ];
  }
}

export default App;     