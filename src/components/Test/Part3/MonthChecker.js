import React, { Component } from 'react';
import Months from '../../../data/Months';

class MonthChecker extends Component {
  
    render() {              
        return (
          <div>
            <div>The current month is {Months[new Date().getMonth()]}</div>          
          </div>);     
    }
  }
  
  export default MonthChecker;
