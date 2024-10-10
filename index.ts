function clock() {
    let days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months: string[] = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const hrs = document.getElementById("hours") as HTMLElement;
    const min = document.getElementById("minutes") as HTMLElement;
    const sec = document.getElementById("seconds") as HTMLElement;
    const period = document.getElementById("ampm") as HTMLElement;
    const dateElem = document.getElementById("ddmmyy") as HTMLElement;
    const dayElem = document.getElementById("dd") as HTMLElement;

    const time = new Date();

    let h :number|string = time.getHours();
    let m :number|string = time.getMinutes();
    let s :number|string = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();

    let ampm = h >= 12 ? "PM" : "AM";

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
    dateElem.innerHTML = `${months[mm]} ${dd}, ${yy}`;
}

setInterval(clock, 1000);
