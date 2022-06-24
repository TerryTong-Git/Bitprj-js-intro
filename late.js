// start coding your function here!
function running_late (date) {
    const sliced = date.slice(-7, -8)

    if (sliced> 22) {
        return "It is late!"}
    else {
        return "It is still early!"
    }
}

exports.running_late = running_late;
