// array type of variable that holds multiple values
let students=["Nancy😍","Naomi😘","Trevor😎","Moh😎"]
students.push("Moha")
students.pop()
students.unshift("Jessica")
students.shift()
console.log(students)
//shift removes the first value out of the array
//unshift adds an element to the beggining of the array
//add an element to the end of the array by putting students .push b4 the console.log as done above
//when u want remove a value from the arry use pop.
//index starts from 0
//modifying elements
//looping through an array
students[0]="Abdi"
let fruits=["apple","dragon fruit","mango","bananas"]
for(let x=0;x<fruits.length;x++){
    console.log(fruits[x])
}

console.log(fruits)
console.log(fruits[0])
fruits[1]="kiwi"
