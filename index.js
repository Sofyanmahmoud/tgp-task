//exr1
const num=[1,2,3,4,5]
const sum=(num1)=>{
    let total=0
    for (let i=0;i<num.length;i++){
        total+=num1[i]
}
    return total
}
console.log(sum(num))

//ex2
const names=['omran','abdo','emad','abdullah']
const Cnames=(names1)=>{
    let Cname =names1.filter(name=>name.length>4)
    return Cname
}
console.log(Cnames(names))

//ex3
function countWords(str){
  const result={}
  let word=""
  for(let i=0;i<str.length;i++){
    const char=str[i]
    if (char !==" "){
    word += char
    }else if (word!==""){
    result[word]=(result[word]||0)+1
    word=""
    }
  }
  if(word!==""){
  result[word]=(result[word]||0)+1
  }
  return result
}
console.log(countWords("tgp welcome 123"))