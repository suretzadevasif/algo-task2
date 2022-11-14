class Message {
    constructor (author, text) {
        this.author = author;
        this.text = text;
        this.sendTime = this.gettime();
    }

    toString() {
        return `${this.sendTime} ${this.author}: ${this.text}`;
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

}

class Messenger {
    messages = [];

    show_history() {
        this.messages.map(v => console.log(v.toString()));
    }

    send(author, text) {
        let message = new Message(author, text);
        this.messages.push(message);
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history();