const studentNames = ['Hamza', 'Ahmed', 'Basheer', 'Tippu'];
const teacherNames =['Ali', 'Bakar', 'Babbie']
const subjectNames = ['physics', 'chem', 'math']
let size = studentNames.length;
let allNames = studentNames.toString();
let getName = studentNames.at(-1);
let joinNames = studentNames.join(' ');
let NamePopped = studentNames.pop(); //takes out last Array element
let NameAdded = studentNames.push('Bubloo');
let ShiftNames = studentNames.shift();
let addNewName = studentNames.unshift('Hira');
studentNames[0] = 'butt'; //replaces the name in the first position
studentNames[studentNames.length] = 'Hira'; //adds hira to last position

const newArray = studentNames.concat(teacherNames); //combines arrays
const arr1 = studentNames.concat(teacherNames,subjectNames);
const arr2 = studentNames.concat('peter');
studentNames.copyWithin(2,0);
const arr3 = [[1,2],[3,4],[5,6]];
const arr4 = arr3.flat();
const arr5 = arr4.flatMap(x=>[x, x*10]);
const arr6 = arr5.splice(2,0,"awais", "haq");
const arr7 = arr6.splice(2,0); //0 shows how many elements must be removed after position 2


console.log(size);
console.log(allNames);
console.log(getName);
console.log(joinNames);
console.log(NamePopped);
console.log(NameAdded);
console.log(ShiftNames);
console.log(addNewName);
console.log(studentNames);
console.log(newArray);
console.log(arr1);
console.log(arr2);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);
