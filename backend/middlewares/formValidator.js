const {validateEmail} = require("./emailValidator")
const formValidator = (req,res,next)=>{
let {name,email,destination,budget,travellers} = req.body;
console.log(req.body)
// let namearray = name.split("");
let destinationArray = new Set(["India","Africa","Europe"]);
const lowercaseSet = new Set('abcdefghijklmnopqrstuvwxyz');
const uppercaseSet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const allCharactersSet = new Set([...lowercaseSet, ...uppercaseSet]);

let flag = false;
for(let i=0;i<name.length;i++){
    if(allCharactersSet.has(name[i])){
flag = true
    }
}
if(validateEmail(email)&&name&&flag&&destinationArray.has(destination)&&budget>=10&&budget<=1000000&&travellers>=1&&travellers<=1000){
next()
}else{
    res.status(401).json({message:"wrong information.Please check the form data once again"})
}
}
module.exports = {formValidator}