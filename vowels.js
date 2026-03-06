//write programe to find number of vowels in given string 
// first atke string 
// compare string 
//base don result count the vowels 

const a = "sbcdy" 
const vowel = "aeiou"
let count = 0

for(let i=0; i<a.length; i++)

{
    if (vowel.includes(a[i]))
    {
        count = count+1
        //count += 1
    }
    
}
console.log(count)




