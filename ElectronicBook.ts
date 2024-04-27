// 2.Клас Електронна книга (ElectronicBook):
// Наслідується від класу Book.
// Має додаткове приватне поле для зберігання формату електронної книги (format), такого як PDF, EPUB тощо.
// Реалізуйте необхідні методи та конструктор для класу ElectronicBook, щоб ініціалізувати та отримувати інформацію про формат електронної книги.
// Реалізуйте свій методgetSummary для ElectronicBook, який враховує формат книги.
import  Book  from "./Book.js";

export default class ElectronicBook extends Book{

    private format: string;
    
    constructor(title: string, author: string, year: number,format: string) {
        super(title, author, year);
        this.format = format;
    }
    public getSummary(): string {
        return `${super.getSummary()}, book format "${this.format}"`;
    }
}