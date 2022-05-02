const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true){
    this.reverse = !direct;
  }
  encrypt(str, key) {
    if(typeof str != 'string' || typeof key != 'string'){
      throw new Error("Incorrect arguments!")
    }
    str.trim("");
    key.trim("");
    key = key.toUpperCase();
    str = str.toUpperCase();
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
    "W", "X", "Y", "Z"];
    let strArr = str.split("");
    let keyStr = [], res = [], count = 0;
    for(let i = 0; i < strArr.length; i++){
      if(arr.includes(strArr[i])){
        keyStr.push(key[count]);
        count++;
      } else {
        keyStr.push(" ");
      }
      if(count >= key.length){
        count=0;
      }
    }
    for(let i = 0; i < strArr.length; i++){
      if(arr.includes(strArr[i])){
        let index = arr.indexOf(strArr[i]) + arr.indexOf(keyStr[i]);
        if(index >= 26){
          index = index - 26;
        }
        res.push(arr[index]);
      } else {
        res.push(strArr[i]);
      }
    }
    return this.reverse ? res.reverse().join("") : res.join("");
  }
  decrypt(str, key) {
    if(typeof str != 'string' || typeof key != 'string'){
      throw new Error("Incorrect arguments!")
    }
    str.trim("");
    key.trim("");
    key = key.toUpperCase();
    str = str.toUpperCase();
    let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
    "W", "X", "Y", "Z"];
    let arrStr = str.split("");
    let keyStr = [], res = [], count = 0;
    for(let i = 0; i < arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        keyStr.push(key[count]);
        count++;
      } else {
        keyStr.push(" ");
      }
      if(count >= key.length){
        count=0;
      }
    }
    for(let i = 0; i < arrStr.length; i++){
      if(arr.includes(arrStr[i])){
        let index = arr.indexOf(arrStr[i]) - arr.indexOf(keyStr[i]);
        if(index < 0){
          index = index + 26;
        }
        res.push(arr[index]);
      } else {
        res.push(arrStr[i]);
      }
    }
    return this.reverse ? res.reverse().join("") : res.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
