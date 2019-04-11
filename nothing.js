function reverseString(str){
    // return str
    // .split('')
    // .reverse()
    // .join('')

    ///////////

    // let revString = '';
    // for(let i = str.length -1; i >=0; i--){
    //     revString += str[i];
    // }
    // return revString;


    ////

    // let revString = '';
    // for(let i = 0; i <= str.length -1; i++){
    //     revString = str[i] + revString;
    // }
    // return revString;
    
    ///////

    // let revString = '';
    // for(let anything of str){
    //     revString = anything + revString;
    // }
    // return revString;

    ////////

    // let revString = '';
    // str.split('').forEach(char => revString = char + revString)
    // return revString;

    /////

    // return str.split('').reduce((revString, char) => char + revString)
}


function isPalindrome(str){
    // const revString = str.split('').reverse().join('');

    // return str.split('').reverse().join('') === str;
}

function reverseInt(int){
    // const revString = int.toString().split('').reverse().join('');

    // return parseInt(revString) * Math.sign(int)
}

function capitalizeLetter(str){
    // const strArr = str.split(' ');

    // for(let i=0; i< strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
    // }
    // return strArr.join(' ')

    //////////

    // return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1))
    // .join(' ')

    //////////

    return str.replace(/\b[a-z]/gi, char => char.toUpperCase())
}

function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar= ""

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

function fizzBuzz(){
    for(let i = 1; i <=100; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz')
        }if(i % 3 === 0){
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        } 
        else {
        console.log(i)
    }
}
}








fizzBuzz()
// const test = fizzBuzz()
// console.log(test)