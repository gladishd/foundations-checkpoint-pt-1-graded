/* eslint-disable no-unused-vars */
/* I'm going to go with my initial idea, 
which is to iterate through the phrase, 
removing the current character from 
characterBank. */
const soup = (phrase, characterBank) => {
    let boolean = true;
    let phraseArray = phrase.split('');
    let characterBankArray = characterBank.split('');
    for (let i = 0; i < phraseArray.length; i++) {
        let currentChar = phraseArray[i];
        /* if it's not in the character bank, then 
        there simply aren't enough characters available 
        and the phrase cannot be created from it. */
        if (!characterBankArray.includes(currentChar)) {
            boolean = false;
        }
        /* For each character in the phrase, 
        iterate through the character bank and 
        as soon as you encounter the character, 
        remove it and then break. */
        for (let j = 0; j < characterBankArray.length; j++) {
            /* This part is important; if the current character 
            matches the value at j in the character bank array, 
            then remove that value.  Originally I had said 
            characterBankArray[i], but the debugger showed me 
            that since i remains at 0 it had to be j. */
            if (characterBankArray[j] === currentChar) {
                characterBankArray.splice(j, 1);
                break; 
                /* Only remove the first occurrence
                of that character */
            }
        }
    }
    return boolean;
}
/* The way I've written it ensures that 
the character bank has to have an instance of 
each character in phraseArray, no matter what 
it is. */
