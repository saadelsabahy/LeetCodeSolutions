function strStr(input: string, output: string): number {
  const outputLength = output.length;
  let firstIndex=-1;
  for(let i=0;i<input.length;i++){
    console.log(input.substring(i,i+outputLength))
    if(input.substring(i, i+outputLength)===output){
      firstIndex=i
      break;
    }
  }
  return firstIndex
};