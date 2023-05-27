const sym={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
const specials={IV:4,IX:9,XL:40,XC:90,CD:400,CM:900}
function romanToInt(s: string): number {
    
   const arrOfInput=s.split('')
   let sum=0;
   let i=0 
   while(i<arrOfInput.length){
       if((i < arrOfInput.length) && (specials[arrOfInput[i] + arrOfInput[i+1]] )){
           sum+=specials[(arrOfInput[i]+arrOfInput[i+1])]
           i+=2
       }else{
           sum+= sym[arrOfInput[i]]
           i++
       }
   }
return sum
};