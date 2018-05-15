import days from './Days';
import months from './Months';

const get = (year) => {
    let calendar = [];
    try {       
        months.forEach(month => {
            calendar.push({
                year: year,
                month: month,
                days: days(year, month)
            });
        });        
        return calendar;
    }
    catch(err){
        console.log(err);
    }
    
}

export default get;