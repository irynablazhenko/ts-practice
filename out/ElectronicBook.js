// 2.Клас Електронна книга (ElectronicBook):
// Наслідується від класу Book.
// Має додаткове приватне поле для зберігання формату електронної книги (format), такого як PDF, EPUB тощо.
// Реалізуйте необхідні методи та конструктор для класу ElectronicBook, щоб ініціалізувати та отримувати інформацію про формат електронної книги.
// Реалізуйте свій методgetSummary для ElectronicBook, який враховує формат книги.
import Book from "./Book.js";
export default class ElectronicBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }
    getSummary() {
        return `${super.getSummary()}, book format "${this.format}"`;
    }
}
