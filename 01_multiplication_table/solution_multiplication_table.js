/* eslint-disable no-unused-vars */

/* I'm going to create a multiplication table 
which will teach us how to multiply.  
My understanding is that outside of the first row
and first column, each value corresponds to the 
product of its corresponding coordinates:  

For instance, in the following table 
(four rows and eight columns), 

[1, 2, 3, 4, '5', 6, 7, 8],
[2, 4, 6, 8, 10, 12, 14, 16],
['3', 6, 9, 12, '15', 18, 21, 24],
[4, 8, 12, 16, 20, 24, 28, 32],

the number 15 is the product of 5 (from the 
    top row) with 3 (from the first column). */

const multiplicationTable = (nRows, nColumns) => {
    let result = [];
    for (let i = 0; i < nRows; i++) { // add empty rows
        result.push([]);
    } /* (Now, if nRows == 0 and nColumns == 0
    the value of result is currently [].  For the 
    sake of consistency I'm going to leave it at 
    that if there truly are no rows and no columns.) */
    
    // now let's populate each row:
    for (let c = 1; c <= nColumns; c++) {
        for (let r = 1; r <= nRows; r++) {
            result[r - 1].push(c * r);
        }
    }
    /* This nested for-loop is taking our current 
    array ex. 
    [
    [],
    [],
    [],
    []
    ], 
    and it is generating each sub-array.  
    The value for c, which corresponds to the column 
    number, is going to always be 1, 2, 3, ..., nColumns.  
    I'm multiplying this same vector by r, the row number, 
    in order that the coordinate (c, r) is equal to the 
    product of c and r.  I'm referring to the r-1th 
    index of result because of the way indexing works in 
    JavaScript; the first row is at index 0. */

    return result;
}