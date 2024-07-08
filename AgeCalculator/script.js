function CurrentAge(){
    const age=document.getElementById('dob').value;
    let dob = new Date(age);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    const current=document.getElementById('cdob').value;
    let now=new Date(current);
    let yeardifference=now.getFullYear()-year;
    let monthdifference=now.getMonth()-month;
   
    let datedifference = now.getDate() - day;
    const datedifferencenegative=30+datedifference
    console.log(yeardifference)
    console.log(monthdifference)
    console.log(datedifference) 

    if (yeardifference < 0) console.log("invalid date");
    
    else if (monthdifference > 0) {
        console.log(yeardifference);
    } else if (monthdifference   === 0 && datedifference >= 0) {
        console.log(yeardifference);
    } else {
        yeardifference = yeardifference - 1;
        if (monthdifference <= 0)
            if ( datedifference> 0) monthdifference = 12 + monthdifference;
            else monthdifference = 11 - monthdifference;
    }
    if (datedifference < 0) {
        datedifference = 30 + datedifference;
        monthdifference -= 1;
    }
    if (yeardifference < 0)
        document.getElementById("result").innerHTML = "Invalid Date";
    else
        document.getElementById("result").innerHTML =
            "Your current Age is " + yeardifference + " years "
            + monthdifference + " months " + datedifference + " days";
}

