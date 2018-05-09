import React, { Component } from 'react';

class Month extends Component {
  
  render() {        
      console.log(this.props.month.days);      
      return <div>
          <br />    
          <h1>{this.props.month.month}</h1>
          {this.props.days+""}    
          <br/>
          {
              this.props.month.days.map(day => {
                  if (day.dayString === "Saturday")
                  {
                      return <span>{day.dayNum + "  "}<br/></span>
                  }                    
                  return <span>{day.dayNum + "  "}</span>
              })
            }
      </div>;    
  }
}

export default Month;
