import React, { Component } from 'react';

class DayChecker extends Component {

  getDayName(number) {    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];    
    return days[number];
  }

  render() {        
    let today = new Date().getDay();
    if(today === 6 || today === 0)
      return (
        <div>
          <div>Today is {this.getDayName(today)} - You can watch TV all day today</div>          
        </div>);
    else
      return (
        <div>
          <div>Today is {this.getDayName(today)} - You should go to work today</div>          
        </div>);
  }
}

export default DayChecker;
