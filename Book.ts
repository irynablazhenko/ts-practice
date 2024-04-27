// 1.Клас Книга (Book):
// Має приватні поля для назви книги (title), автора (author) та року видання (year).
// Має публічний конструктор, який приймає назву, автора та рік видання книги і ініціалізує відповідні поля.
// Має публічний метод getSummary, який повертає рядок із загальною інформацією про книгу (наприклад, "Harry Potter by J.K. Rowling, published in 1997").

export default class Book {
    private title: string;
    private author: string;
    private year: number;
    
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year=year;
    }
    public getSummary(): string {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    }
}
