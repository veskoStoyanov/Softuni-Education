class MailBox {
    constructor() {
        this.mailBox = [];
    }

    addMessage(subject, text) {
        this.mailBox.push({ subject, text });
        return this;
    }

    get messageCount() {

        return this.mailBox.length;
    }

    deleteAllMessages() {
        this.mailBox = [];
    }

    findBySubject(text) {
        let result = this.mailBox.filter((t) => t.subject.includes(text));
        return result;
    }

    toString() {
        if (this.mailBox.length === 0) {
            return '* (empty mailbox)';
        }
        return this.mailBox.map((r) => `* [${r.subject}] ${r.text}`).join('\n');
    }
}