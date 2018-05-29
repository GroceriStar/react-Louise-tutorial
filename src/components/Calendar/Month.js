import React, { Component } from 'react';

class Month extends Component {
  
  render() {              
      return <div>
          <br />    
          <h1>{this.props.month.month} {this.props.month.year}</h1>
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
