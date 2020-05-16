/* eslint-disable no-unused-vars */

/* Basically what the Object.keys() function 
does, is that it generates an array consisting 
of all of the keys, excluding the values to which 
they correspond within the object */
const findObjKeys = (obj) => {
    let result = [];
    let keys = Object.keys(obj); 
    // extract the key from each key:value pair 
    for (let i = 0; i < keys.length; i++) {
        result.push(keys[i]);
    }
    /* The object's keys have to be comma delimited 
    so that's why I'm using the .join() method for
    arrays. */
    result = result.join(', ');
    return result;
}

const findObjPropsHasOwn = (obj) => {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            /* if the property/key belongs to the 
            object obj and isn't inherited then 
            we are allowed to push it to the result, 
            per the specifications. */
            result.push(key);
        }
    }
    result = result.join(', ');
    return result;
}

