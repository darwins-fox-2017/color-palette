"use strict"

let getPallete = require("../lib/getPallete")
let expected_value = ["#69D2E7", "#E0E4CC", "#F38630" ]


let pallete = getPallete()

function compare(){
  if(getPallete().length == expected_value.length){
    let anyErrors = []
    for(let i = 0; i < getPallete().length; i++){
      if(getPallete()[i] == expected_value[i]){
        anyErrors.push(true)
      }
    }
    if(anyErrors.length !== getPallete().length){
      return false
    }else {
      return true
    }
  }else{
    return false
  }
}

console.log(compare());
