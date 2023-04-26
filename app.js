function byeNegatives (Number){
    return Number > 0;
}

var filterNegatives = [-34, 10, -89, 20, 3, 4, 8, -4].filter(byeNegatives);
console.log(filterNegatives)
