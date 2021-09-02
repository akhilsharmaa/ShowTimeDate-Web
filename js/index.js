


setInterval(() => {
    showTimeAndDate();
}, 1000);

showTimeAndDate = () => {
    a  = new Date();
    console.log(a.getHours());

    // Setting time in a string 
    timeInString = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();

    // Getting html element and setting the TIME 
    time = document.querySelector("#time")
    time.innerHTML = (timeInString);
    // Getting html element and setting the DATE 
    date = document.querySelector("#date")
    date.innerHTML = (a.toLocaleDateString());

}