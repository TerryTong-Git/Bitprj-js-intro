// start coding your function here!
const date = new Date('December 17, 1995 03:24:00')
function running_late (date) {
    if (date.getHours()> 10) {
        return "It is late!"}
    else {
        return "It is still early!"
    }
}

exports.running_late = running_late;
module.exports = running_late