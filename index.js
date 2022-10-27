/* Your Code Here */
function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(array) {
  let employeeRecord = array.map((employee) => createEmployeeRecord(employee));
  return employeeRecord;
}
function createTimeInEvent(timestamp) {
  const [date, hour] = timestamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}
function createTimeOutEvent(timestamp) {
  const [date, hour] = timestamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10),
  });
  return this;
}
function hoursWorkedOnDate(timestamp) {
  const dateIn = this.timeInEvents.filter((element) => {
    return element.date === timestamp;
  });
  const dateOut = this.timeOutEvents.filter((element) => {
    return element.date === timestamp;
 });
 
 console.log(dateIn,dateOut,"date OOut")
  return (dateOut[0].hour - dateIn[0].hour) / 100;
}
function wagesEarnedOnDate(timestamp){
  const total = hoursWorkedOnDate.call(this,timestamp)*this.payPerHour
  return total
}
function findEmployeeByFirstName(collection,firstNameString){
  const finder = collection.find((obj)=>obj.firstName===firstNameString)
  return finder
}

/*]
Argument(s)
A date stamp ("YYYY-MM-DD HHMM"), where time is expressed in 24-hour standard
Returns
The record that was just updated
Behavior
Add an Object with keys:
type: Set to "TimeIn"
hour: Derived from the argument
date: Derived from the argument

 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};
let calculatePayroll = function(arrayOfEmployeeRecords){
return arrayOfEmployeeRecords.reduce(function(memo, rec){
return memo + allWagesFor.call(rec)
}, 0)}

