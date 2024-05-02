import { Form, Test } from "./Home.styles";

import { useEffect, useState } from "react";
import { createBook, getBooks } from "../../app/services/books";
import { type Book } from "../../common/Book";
import BookRow from "../../BookRow";
import toast from "react-hot-toast";

const Home = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [newBook, setNewBook] = useState<Book>({
        title: "",
        price: null,
        author: "",
    });


    const renderBooks = () => getBooks().then((data) => setBooks(data));


    useEffect(() => {
        renderBooks();
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await toast.promise(createBook(newBook), {
                loading: "Saving...",
                success: (
                    <b>
                        New book : {newBook?.title} - {newBook?.price}
                    </b>
                ),
                error: <b>Could not save.</b>,
            });

            // actualizamos la lista de libros
            getBooks().then((data) => setBooks(data));

            // Limpiamos los campos del formulario
            setNewBook({ title: "", price: null, author: "" });
        } catch (error) {
            if (error instanceof Error) toast.error(error.message);
            else throw error;
        }
    };

    return (
        <>
            <h3>Home</h3>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) =>
                        setNewBook({ ...newBook, title: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Author"
                    onChange={(e) =>
                        setNewBook({ ...newBook, author: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Price"
                    onChange={(e) =>
                        setNewBook({
                            ...newBook,
                            price: parseInt(e.target.value, 10),
                        })
                    }
                />
                <button type="submit">SEND</button>
            </Form>
            <Test>
                {books.length > 0 ? (
                    books?.map((book) => <BookRow key={book.id} book={book} renderBooks={renderBooks} />)
                ) : (
                    <p>Nothing in db</p>
                )}
            </Test>
        </>
    );
};

export default Home;
