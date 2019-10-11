

let arr = [1, 1, 2, 3, 4, -51, 12, 12, 12, -51];

function countDouble(item){
    let variable = null;
    let count = null;
    item.forEach(element => {
        if (element == variable){
            count++; 
        }
        variable = element;
    });
    return count;
}

console.log(countDouble(arr));
