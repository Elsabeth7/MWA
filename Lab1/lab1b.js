
function isWeekend(){
    const todayDate = new Date();
    todayDate.setDate(7);
    const day = todayDate.getDay(); //0-6(0 is Sunday)
   
      return weeks [day] || weeks ['default'];       

 }

weeks= {
    0: 'weekend', 
    6: 'weekend', 
    default: 'weekday' 
}
 
console.log(isWeekend());


// const weekendOrWeekday = (inputDate) => {
//     const day = inputDate.getDay();
//     return weekendOrWeekday.labels[day] || 
//            weekendOrWeekday.labels['default'];
//   };
//   weekendOrWeekday.labels = { 
//     0: 'weekend', 
//     6: 'weekend', 
//     default: 'weekday' 
//   };
//   console.log(weekendOrWeekday(new Date()));