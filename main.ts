// Створіть окремий файл, в якому ви створюєте об'єкти для кожного класу та викликаєте метод getSummary
import  Book  from "./Book.js";
import ElectronicBook from "./ElectronicBook.js";

const bookObj = new Book("Harry Potter", "J.K. Rowling", 1997);
console.log(bookObj.getSummary());

const eBookObj = new ElectronicBook("Harry Potter 2", "J.K. Rowling", 2007, "PDF");
console.log(eBookObj.getSummary());

