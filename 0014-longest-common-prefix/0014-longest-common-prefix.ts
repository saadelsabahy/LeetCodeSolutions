    
    function longestCommonPrefix(strs: string[]): string {
        const sortedArrayOfWords=strs.sort()
        const firstWord=sortedArrayOfWords[0];
        const lastWord=sortedArrayOfWords[strs.length-1];
let returnStr=''
for(let i=0;i<firstWord.length;i++){
if(firstWord[i]===lastWord[i]){
 returnStr += firstWord[i]

}else{       
            break
        }
}
return returnStr

    };