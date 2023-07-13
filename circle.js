function circleArea(r){
    let area = r*r*3.14;
    return area;
}

function circleCircumference(r){
    return 2*3.14*r;
}

module.exports = {
    circleArea,
    circleCircumference
}