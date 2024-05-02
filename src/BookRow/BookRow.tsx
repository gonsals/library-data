import { useState } from "react";
import { Container } from "./BookRow.styles";
import { Book } from "../common/Book";
import { updateBook, deleteBook } from "../app/services/books";
import priceImg from "../assets/price-jeje.png";
import deleteBookImg from "../assets/delete.png";



interface Props {
    book: Book;
    renderBooks: () => void;
}


const areObjectsEqual = (obj1: any, obj2: any) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    for (const key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};

const BookRow = ({ book, renderBooks }: Props) => {

    const [updatedBook, setUpdatedBook] = useState<Book>(book);

    const handlePriceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newPrice = parseInt(e.target.value);
        if (!isNaN(newPrice)) {
            setUpdatedBook({ ...updatedBook, price: newPrice });
        } else {
            setUpdatedBook({ ...updatedBook, price: 0 });
        }
    };

    const handleUpdate = () => {
        if (book.id) {
            updateBook(book.id, { title: updatedBook.title, author: updatedBook.author, price: updatedBook.price });
            renderBooks();
        }
    };

    const handleDelete = () => {
        if (book.id) {
            deleteBook(book.id)
            renderBooks();
        }
    };

    return (
        <Container>
            <div className="book">
                <div className="front">
                    <div className="cover">
                        <textarea className="title" value={updatedBook.title} onChange={(e) => setUpdatedBook({ ...updatedBook, title: e.target.value })} />
                        <textarea className="author" value={updatedBook.author} onChange={(e) => setUpdatedBook({ ...updatedBook, author: e.target.value })} />
                        <textarea className="price" onChange={(e) => handlePriceChange(e)} value={updatedBook.price ? updatedBook.price + " €" : ""} />
                        <img className="imagePrice" src={priceImg} alt="123" />

                        {!areObjectsEqual(book, updatedBook) && (
                            <button className="updateButton" onClick={handleUpdate}>Update</button>
                        )}
                    </div>
                </div>
                <div className="left-side">
                    <img className="deleteBook" src={deleteBookImg} onClick={handleDelete} />
                    <h2>
                        <span>{updatedBook.title}</span>
                        <span>{updatedBook.author}</span>
                    </h2>
                </div>
            </div>
        </Container>
    );
};

export default BookRow;
