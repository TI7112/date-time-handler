const days = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"]
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

function now() {
    const date = new Date();
    return date;
}

function detail(bufferDate) {
    const date = new Date(bufferDate);
    const data = {
        day: date.getDay(),
        dayName: days[date.getDay()],
        date: date.getDate(),
        month: date.getMonth(),
        monthName: months[date.getMonth()],
        noOfDays: new Date(date.getFullYear(), date.getMonth()+1, 0).getDate(),
        year: date.getFullYear(),
    }
    return data
}

module.exports = {
    now,
    detail
}