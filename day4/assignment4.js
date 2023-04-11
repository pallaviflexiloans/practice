/* Write a program which tells the number of days in a month, now consider leap year.*/

function noOfDays(month, year) {
    if (year % 4 == 0 && month == 'february') {

        console.log('no of days in' + month + 'is 29');
    }
    else {
        switch (month) {
            case "january":
                console.log('no of days in' + month + 'is 31');
                break;
            case "february":
                console.log('no of days in' + month + 'is 28');
                break;
            case "March":
                console.log('no of days in' + month + 'is 31');
                break;
            case "March":
                console.log('no of days in' + month + 'is 31');
                break;
            case "April":
                console.log('no of days in' + month + 'is 30');
                break;
            case "May":
                console.log('no of days in' + month + 'is 31');
                break;
            case "June":
                console.log('no of days in' + month + 'is 30');
                break;
            case "July":
                console.log('no of days in' + month + 'is 31');
                break;
            case "August":
                console.log('no of days in' + month + 'is 30');
                break;
            case "September":
                console.log('no of days in' + month + 'is 31');
                break;
            case "October":
                console.log('no of days in' + month + 'is 30');
                break;
            case "November":
                console.log('no of days in' + month + 'is 31');
                break;
            case "December":
                console.log('no of days in' + month + 'is 31');
                break;
            default:
                console.log('Invalid Month');
        }
    }
}

noOfDays('january', 2023);
noOfDays('february', 2023);