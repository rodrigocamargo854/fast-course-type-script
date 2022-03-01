"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
var Books = /** @class */ (function () {
    function Books(bookName, //protected (podemos chamar somente dentro e não fora da classe)
    bookEditor, saved_At, listBooks) {
        this.bookName = bookName;
        bookName = bookName;
        this.bookEditor = bookEditor;
        this.saved_At = saved_At;
        this.listBooks = listBooks;
    }
    Books.prototype.bookReaded = function (books) {
        this.listBooks.push(books);
    };
    return Books;
}());
exports.Books = Books;
var HorroBooks = /** @class */ (function (_super) {
    __extends(HorroBooks, _super);
    function HorroBooks(bookName, //propriedade publica
    bookEditor, saved_At, listBooks, statements) {
        var _this = _super.call(this, bookName, bookEditor, saved_At, listBooks) || this;
        _this.bookName = bookName;
        _this.statements = statements;
        return _this;
    }
    return HorroBooks;
}(Books));
var book987 = new HorroBooks('IT', 'editor', '12/12/12', [], 'newOne');
console.log(book987);
