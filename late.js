// start coding your function here!

function running_late (date) {
    const date1 = new Date(date) 
    

    if (date1.getHours()>= 22 && date1.getMinutes()> 1) {
        return "It is late!"}
    else {
        return "It is still early!"
    }
}

exports.running_late = running_late;
