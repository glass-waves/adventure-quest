export function findById(array, id){
    for (const item of array) {
        if (item.id === id) {
            return item;
        }
    }
}


export function capitalizeFirstLetter(nameInput) {
    const capitalizedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    return capitalizedName;
}