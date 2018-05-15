import React, { Component } from 'react';
import getCalendarArray from '../../../data/CalendarArray';
import { getWeekdays, getWeekend } from '../../../data/Weeks';
import Month from './Month';

class Calendar extends Component {
  
  render() {              
    var calendar = getCalendarArray(new Date().getFullYear());
    var weekDays = getWeekdays(calendar);
    var weekEnd = getWeekend(calendar);    
        return (
          <div>
            <div> 
                {                    
                  calendar.map((month, i) => {
                  return <Month month={month} days={this.days} year={this.year} weekDays={weekDays[i]} weekEnd={weekEnd[i]}></Month>
                  })
              }   
            </div>
                   
              
        </div>);     
    }
  }
  
  export default Calendar;
