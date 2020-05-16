/* The specifications are that the following methods 
are only accessible via the instances' prototype chain; 
I'm creating an internal prototype so that the 
instances can inherit from it. */
const bookPrototype = {
    getPrice() {
        return this.price;
    },
    getInfo() {
        /* The built-in .concat method 
        makes the concatenation of [title] by [author] 
        much more concise. */
        return this.title.concat(' by ', this.author);
    },
    addRating(ratingToAdd) {
        this.rating.push(ratingToAdd);
    },
    getRating() {
        /* This function counts all stars with total, 
        then divides by the total number of ratings. */
        let total = 0;
        for (let i = 0; i < this.rating.length; i++) {
            total += this.rating[i].length;
        }
        return total/this.rating.length;
    }
};

const createBook = (id, title, author, price) => {
    let book = Object.create(bookPrototype);
    /* I'm going to return the book object, 
    which means that although normally I would 
    use this, I cannot use this within createBook 
    because of the fact that it leads to peculiar 
    problems with overwriting, since this refers 
    to the window object in that case, because classic 
    functions care about where they are called. */
    book.id = id;
    book.title = title;
    book.author = author;
    book.price = price;
    book.rating = [];
    /* Because book createBook returns an instance, 
    each instance automatically inherits properties 
    from bookPrototype through the prototype chain, 
    in addition to the five main properties. */
    return book;
};
