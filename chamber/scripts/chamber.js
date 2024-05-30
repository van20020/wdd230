function getMessage() {
    //get current date
    let currentDate = new Date();
    let storedDate;
    let message;

    //get date from local storage
    let date = localStorage.getItem('date');

    // compare dates
    if (date) {
        storedDate = new Date(parseInt(date));
    }

    //return appropriate message
    if (date) {
        let differenceInTime = currentDate.getTime() - storedDate.getTime();
        if (differenceInTime < 86400000) {
            message = "Back so soon! Awesome!";
        } else {
            let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
            message = `You last visited ${differenceInDays} day(s) ago.`
        }
    } else {
        message = "Welcome! Let us know if you have any questions!"
    }

    localStorage.setItem('date', currentDate.getTime());

    return message;
}

let displayMessage = getMessage();
document.querySelector('#message').textContent = displayMessage;