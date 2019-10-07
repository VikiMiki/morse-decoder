const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let str=expr;
    let b=str.match(/.{1,10}/g);
    let arrStr=[];
    let resultStr='';
    let resultArr=[];
    
    
    b.map(function(x, i) {
        arrStr[i]=x.replace(/^0*/i, '');
        arrStr[i]=arrStr[i].replace(/(10)/g, '.'); 
        arrStr[i]=arrStr[i].replace(/(11)/g, '-');
        arrStr[i]=arrStr[i].replace(/(\*)+/g, ' ');
        if (arrStr[i]==' '){
            resultArr.push(' ')
        } else {
            for (key in MORSE_TABLE){
                if (arrStr[i] == key){
                resultArr.push(MORSE_TABLE[key])
                }
        }}
        
    });

    resultStr=resultArr.join('');
    return resultStr;


   
    }

module.exports = {
    decode
}