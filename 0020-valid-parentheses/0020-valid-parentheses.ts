function isValid(word: string): boolean {
const items={
  '(':')','{': '}','[':']'
}

const stack=[]
for (let char of word){

  if(items[char]){
    stack.push(char)
  }
  else if(stack.length > 0 && items[stack[stack.length-1]] === char){
   stack.pop()
  }else{
    return false
  }
}
return stack.length === 0
};