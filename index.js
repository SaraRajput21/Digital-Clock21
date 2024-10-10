function clock() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var hrs = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");
    var period = document.getElementById("ampm");
    var dateElem = document.getElementById("ddmmyy");
    var dayElem = document.getElementById("dd");
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = time.getDay();
    var dd = time.getDate();
    var mm = time.getMonth();
    var yy = time.getFullYear();
    var ampm = h >= 12 ? "PM" : "AM";
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h.toString();
    min.innerHTML = m.toString();
    sec.innerHTML = s.toString();
    period.innerHTML = ampm;
    dayElem.innerHTML = days[d];
    dateElem.innerHTML = "".concat(months[mm], " ").concat(dd, ", ").concat(yy);
}
setInterval(clock, 1000);
