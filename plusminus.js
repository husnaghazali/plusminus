function plusMinus(arr) {
    // Write your code here
    arr = [-4, 3, -9, 0, 4, 1];
    let posValue = 0;
    let negValue = 0;
    let zeroValue = 0;
    let decPosValue = 0;
    let decNegvalue = 0;
    let decZero = 0;
    let arrOutput = [];
   
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>0){
            posValue +=1;
            decPosValue = posValue / arr.length;
        }else if(arr[i]<0){
            negValue +=1;
            decNegvalue = negValue / arr.length;
        }else{
            zeroValue += 1;
            decZero = zeroValue / arr.length;
        }
    }
    arrOutput.unshift(decPosValue.toFixed(6),decNegvalue.toFixed(6),decZero.toFixed(6));
    console.log(arrOutput.join("\r\n"));
} 
plusMinus();
// let strOutput="";
    // strOutput = arrOutput.toString();
    
    
    //console.log(decPosValue.toFixed(6),decNegvalue.toFixed(6), decZero.toFixed(6));
// first find  + num, total positif num?, divide by arr.length
// 2nd, find -ve num, total -ve num?divide by arr.length
// last find 0 value, total 0 value? divide by arr.length
//final return all with 6 decimals