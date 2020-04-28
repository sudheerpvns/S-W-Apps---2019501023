// @author Sudheer

//This function counts the no.of B's in a given String

function countBs(str) {
    var count = 0
    for(let i = 0; i< str.length; i++) {
        if (str.charAt(i) === 'B') {
            count += 1
        }
    }
    return count
}

console.log( countBs('BetterB'))

// Counts the no.of times the given appears in the given string

 function countChar(str,cha) {
    var count = 0
    for(let i = 0; i< str.length; i++) {
        if ((str.charAt(i) === cha) || (str.charAt(i) === cha.toUpperCase()) || (str.charAt(i) == cha.toLowerCase())) {
            count += 1
        }
    }
    return count
 }

 console.log(countChar('BEtterer','e'))