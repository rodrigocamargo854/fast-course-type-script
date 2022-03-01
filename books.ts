type BooksTypes = {
  name: string;
  editor: string;
};

export class Books {
  readonly bookEditor: string; // propriedade somente leitura
  saved_At: string;
  listBooks: BooksTypes[];
  constructor(
    protected bookName: string,//protected (podemos chamar somente dentro e não fora da classe)
    bookEditor: string,
    saved_At: string,
    listBooks: BooksTypes[]
  ) {
    bookName = bookName;
    this.bookEditor = bookEditor;
    this.saved_At = saved_At;
    this.listBooks = listBooks;
  }

  bookReaded(books: BooksTypes): void {
    this.listBooks.push(books);
  }
}

class HorroBooks extends Books {
  private statements: string; // propriedade privada
  constructor(
    public bookName: string,//propriedade publica
    bookEditor: string,
    saved_At: string,
    listBooks: BooksTypes[],
    statements: string
  ) {
    super(bookName, bookEditor, saved_At, listBooks);
    this.statements = statements;
  }
}

const book987 = new HorroBooks('IT','editor','12/12/12',[],'newOne');

console.log(book987)

