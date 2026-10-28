const myMap = new Map([
  [1000,"M"], [900,"CM"], [500,"D"], [400,"CD"], 
  [100,"C"], [50,"L"], [40,"XL"], [10,"X"], 
  [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]
])

function toRomanLazy(num) {
  let final = ""
  while (num > 0) {
    if (num >= 1000){
      final += "M"
      num -= 1000
    } else if (num >= 500){
      final += "D"
      num -= 500
    } else if (num >= 100){
      final += "C"
      num -= 100
    } else if (num >= 50){
      final += "L"
      num -= 50
    } else if (num >= 10){
      final += "X"
      num -= 10
    } else if (num >= 5){
      final += "V"
      num -= 5
    } else if (num >= 1){
      final += "I"
      num -= 1
    }
  }
  return final;
}

function toRoman(num) {
  let final = ""
  for (let [arabic, roman] of myMap){
    let count = Math.floor(num / arabic)
    num -= count*arabic
    final += roman.repeat(count)
  } return final
}

module.exports = { toRoman, toRomanLazy };
