
let regex = /(?=.*[a-z])/
let string = "Ultra_123_lord";
let result = string.match(regex)
console.log(result)
if(regex.test(string)) {
    console.log("Bingo")
}
else {
    console.log("Boo")
}