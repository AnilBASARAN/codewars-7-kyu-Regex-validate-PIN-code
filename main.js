function validatePIN (pin) {
  let digits = ['0','1','2','3','4','5','6','7','8','9']
  
  pin = pin.split('')
  
  console.log(pin)
  
 
  
  if (pin.every(x => digits.includes(x)) && (pin.length == 4 ||pin.length == 6) ){
    return true
 
  }else {
    return false
  }
  //return true or false
}
