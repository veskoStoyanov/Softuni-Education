class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.shelfGenre = shelfGenre;
        this.room = room;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
        return this;
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if (value === 'livingRoom' || value === 'bedRoom' || value === 'closet') {
            this._room = value;
        } else {
            throw `Cannot have book shelf in ${value}`;
        }

    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName,
            bookAuthor
        }

        if (genre) {
            book.genre = genre;
        }

        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift()
        }
        this.shelf.push(book);

        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter((x) => x.bookName !== bookName);
        return this;
    }

    showBooks(genre) {
        
        let result = `Results for search "${genre}":\n`
        result += this.shelf
            .filter((x) => x.genre === genre)
            .map((x) => `\uD83D\uDCD6 ${x.bookAuthor} - "${x.bookName}"`)
            .join('\n');

        return result;
    }

    toString() {
        if (this.shelf.length === 0) {
            return 'It\'s an empty shelf';
        } else {
            let res = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`
            res += this.shelf
                .map((b) => `\uD83D\uDCD6 "${b.bookName}" - ${b.bookAuthor}`)
                .join('\n');

            return res;
        }
    }
}