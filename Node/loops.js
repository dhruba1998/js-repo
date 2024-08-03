
const myArray = [3,4,6,9,8,1]

const myObject = {          

    "name" : "Dhruba",
    "age" : 23
}

const myMap = new Map()

myMap.set("js","javascript")
myMap.set("py","python")
myMap.set("cpp","c++")
myMap.set("js","JAVASCRIPT") // If duplicate key is present then the value will be update with the lastest value


for (const key in myObject ) {   // Iterate over keys 
    // console.log(key);
}


for (const key of myMap) {    //Iterate over values
    // console.log(key);
}

//Iterate through map
for(const [key,value] of myMap){
    // console.log(key,":",value);
    
}


const newArr = [13,53,66,79,21,36]

function print(val){
    console.log(val);
}

newArr.forEach(print)   //function reference is used to call the print function