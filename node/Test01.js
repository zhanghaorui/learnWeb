var getLocalDate = function() {
    let date = new Date();
    let year = date.getFullYear();
    console.log(year);
    let month = date.getMonth() + 1;

    console.log(month);
    let day = date.getDate();
    console.log(day);
    console.log(year + month + day);
}
getLocalDate();