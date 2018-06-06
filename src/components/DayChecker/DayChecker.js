import React, { Component } from 'react';
import DayOfWeek from '../../data/DayOfWeek';

class DayChecker extends Component {

  getDayName(number) {
    let days = DayOfWeek;
    return days[number];
  }

  render() {
    let today = new Date().getDay();
    return (
      <div>
        Today is {this.getDayName(today)} - 
        {
          (today === 6 || today === 0) ?
            <span> You can watch TV all day today</span> :
            <span> You should go to work today</span>            
        }
      </div>
    )  
  }
}

export default DayChecker;
