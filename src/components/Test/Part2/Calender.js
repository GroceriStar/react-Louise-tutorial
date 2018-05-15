import React, { Component } from 'react';
import Month from './Month';
import DayOfWeek from '../../../data/DayOfWeek';
import Months from '../../../data/Months';

class Calender extends Component {
    year = new Date().getFullYear();
    months = Months;
    days = DayOfWeek;
    calender = [];

    getCalenderData() {        
        this.months.forEach((month, index) => {
            var lastDate = new Date(this.year, index + 1, 0);
            var daysInMonth = [];    
            
            for (var i = 1; i <= lastDate.getDate(); i++){
                var dayStr = this.days[new Date(this.year, index, i).getDay()];                             
                daysInMonth.push({ dayNum: i, dayString: dayStr });
            }

            this.calender.push({ year: this.year, month: month, days: daysInMonth });
        })
        return this.calender;
}

    render() {        
        return (
            <div>                
                {                    
                    this.getCalenderData().map((month, i) => {
                        return <Month month={month} days={this.days} year={this.year}></Month>
                    })
                }    
            </div>
        )
    }
}

export default Calender;
