function passVal() {
    let windowType = $("#windowType").val();
    let material = $("input:radio[name=material]:checked").val();
    let roomType = $("#roomType").val();
    let widOfWindow = $("#widOfWindow").val();
    let lengthOfWindow = $("#lengthOfWindow").val();
    let name = $("#name").val();
    let emailAdr = $("#emailAdr").val();
    
    localStorage.setItem("windowType", windowType);
    localStorage.setItem("material", material);
    localStorage.setItem("roomType", roomType);
    localStorage.setItem("widOfWindow", widOfWindow);
    localStorage.setItem("lengthOfWindow", lengthOfWindow);
    localStorage.setItem("name", name);
    localStorage.setItem("emailAdr", emailAdr);

    return true;
}




