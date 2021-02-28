class Book {
  constructor(id, name, thumbnail, categories, bookRental) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
    this.categories = categories;
    this.bookRental = bookRental;
  }

  canRent() {
    return this.bookRental === undefined || this.bookRental == null
  }

}

export default Book;
