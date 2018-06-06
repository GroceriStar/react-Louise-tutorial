import React, { Component } from 'react';

class Month extends Component {
  
    render() {        
      return <div>
          <br />    
          <h1>{this.props.month.month} {this.props.month.year}</h1>                    
          <h4>Calender Days</h4>
          {
              this.props.month.days.map(day => {                 
                  return <span>{day + "  "}</span>
              })
          }
          <h4>Weekdays</h4>
          {
              this.props.weekDays.days.map(day => {                 
                  return <span>{day + "  "}</span>
              })
          }
          <h4>Weekend</h4>
          {
              this.props.weekEnd.days.map(day => {                 
                  return <span>{day + "  "}</span>
              })
            }
      </div>;    
  }
}

export default Month;
