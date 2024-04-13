const dailyRoutine = ["wake up","Eat","Sleep"];

//For-of 
for(let routine of dailyRoutine){
   // logics
   console.log(routine);
}

//For-in 
for(let routine in dailyRoutine){
   console.log(routine,dailyRoutine[routine]);
}

//For-each
dailyRoutine.forEach(function(routine){
   console.log(routine);
});
dailyRoutine.forEach(function(routine,RoutineIndex){
   console.log(RoutineIndex,routine);
});
