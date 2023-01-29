function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users=> users.gender === gender).map(users=> users.age).reduce((acc, item, index, arr)=> {
        acc += item;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
        return acc; 
    }, 0) 
    return result;
}