import Months from './Months';

export const getWeekdays = (calendar) => {
    return normalizeCalendarArray(calendar, true);
};

export const getWeekend = (calendar) => {    
    return normalizeCalendarArray(calendar, false);
};

const normalizeCalendarArray = (calendar, isWeekday) => {   
    let calArr = [];    
    if (calendar.length > 0) {        
        calArr = calendar;
    }
    else {
        calArr.push(calendar);
    }
    return getNewCalendar(calArr, isWeekday);
}

const getNewCalendar = (calendarArray, isWeekday) => {
    
    let newDaysArray = [];
    let newCalendarArray = [];
    
    calendarArray.forEach(month => {
        let numMonth = Months.indexOf(month.month);    
        month.days.forEach(day => {
            var numDay = new Date(month.year, numMonth, day).getDay();     
            if (isWeekday) {
                if (numDay !== 6 && numDay !== 0) {                
                    newDaysArray.push(day);
                    
                }
            }    
            else {
                if (numDay === 6 || numDay === 0) {                
                    newDaysArray.push(day);                    
                }
            }            
        })  
       
        newCalendarArray.push({
            year: month.year,
            month: month.month,
            days: newDaysArray
        });       
        newDaysArray = [];
    });   
    return newCalendarArray;
}
