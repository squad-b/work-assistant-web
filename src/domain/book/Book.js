class Book {
  constructor(id, isbn, title, author, publisher, thumbnail, stockQuantity,
              description, publishingDate, registrationDate) {
    this.id = id;
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.thumbnail = thumbnail;
    this.stockQuantity = stockQuantity;
    this.description = description;
    this.publishingDate = publishingDate;
    this.registrationDate = registrationDate;
  }
}

export default Book;
