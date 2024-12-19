// Create a multi-dimensional array containing the following values:
const names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
const ages = [24, 65, 21, 5, 9];

// Restructure the declared multi-dimensional array above and store in a new multi-dimensional array where each of the sub-array must contain [name, age].
const restructuredArray = [];
for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}

// Log to the console the restructured multidimensional array [name, age] per line.
console.log("Restructured Array:");
restructuredArray.forEach(item => console.log(item));
