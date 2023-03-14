let pets = ['cat', 'dog', 'rat'];

// pluralize each element - functional method
pets.forEach((ele, i) => {
    pets[i] = ele + 's';
});

/*

//imperative method
for (i = 0; i < pets.length; i++){
    pets[i] = pets[i] + 's';
}

*/


console.log(pets);