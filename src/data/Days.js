import Months from './Months';

const get = (year, month) => {
    
    try {
        if (typeof month === "string") {
            month = Months.indexOf(month)+1;            
        }
        var lastDate = new Date(year, month, 0);
        var daysInMonth = [];    
            
        for (var i = 1; i <= lastDate.getDate(); i++) {
            daysInMonth.push(i);
        }    
        return daysInMonth;
    }
    catch(err){
        console.log(err);
    }
    
}

export default get;