// RANDOM PASSWORD GENERATOR

function genearatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symboChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? upercaseChars : "";
    allowedChars += includeNumbers ? numberChars: "";
    allowedChars += includeSymbols ? symboChars: "";

    if(passwordLength <= 0){
        return `(password lenght must be at least 1)`;
    }

    if (allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];

    }
    
    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = genearatePassword(passwordLength,
                    includeLowercase,
                    includeUppercase,
                    includeNumbers,
                    includeSymbols)

console.log(`Generated password : ${password}`)