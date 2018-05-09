import React, { Component } from 'react';
import Month from './Month';

class Calender extends Component {
    year = 2018;    
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];    
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
                        return <Month month={month} days={this.days}></Month>
                    })
                }    
            </div>
        )
    }
}

export default Calender;
