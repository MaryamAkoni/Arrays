let namelist = ["jordan", "emily", "georgia", "susan", "sophia"];

console.log(namelist[0]);
console.log(namelist.at(2));
console.log(namelist[4]);
console.log(namelist.length);

let lastNamelist = namelist.pop();
console.log(lastNamelist);
console.log(namelist);

namelist.push("mary");
console.log(namelist);

let specialnames = namelist.slice(2,4);
console.log(specialnames);

let goodnames = namelist.slice(0,1);
console.log(goodnames);

let iterator = namelist.entries();
for (let entry of iterator) {
    console.log(entry);
}

for(let i = 0; i < namelist.length; i++) {
    console.log(namelist[i]);
}

for (const band of namelist){
    console.log(band);
}

for (const index in namelist) {
    if (namelist.hasOwnProperty(index)){
        console.log(namelist[index]);
    }
}

let [firstName, secondName, thirdName] = namelist;

console.log(firstName);
console.log(secondName);
console.log(thirdName);

