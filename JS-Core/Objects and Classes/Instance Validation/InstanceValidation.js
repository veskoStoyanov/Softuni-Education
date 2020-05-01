class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }
    set clientId(value) {
        if (Number.isInteger(+value) && value.length === 6) {
            this._clientId = value;

        } else {
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if (value && value.match(/[\w]+@[a-zA-Z.]+/)) {
            this._email = value;
        } else {
            throw new TypeError('Invalid e-mail');
        }

    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`First name must be between 3 and 20 characters long`)
        }
        if (!value.match(/^[A-Za-z]+$/)) {
            throw new TypeError(`First name must contain only Latin characters`)
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (value.length < 3 || value.length > 20) {
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }
        if (!value.match(/^[A-Za-z]+$/)) {
            throw new TypeError(`Last name must contain only Latin characters`)
        }
        this._lastName = value;
    }
}