//import { Test } from './Home.styles';

import { useEffect, useState } from "react";
import { getBooks } from "../../app/services/books";
import { Book } from "../../common/Book";

const Home = () => {
    const [books, setBooks] = useState<Book[]>();

    useEffect(() => {
        getBooks().then((data) => setBooks(data));
    }, []);

    return (
        <>
            <h3>Home</h3>
            <form>
                <input type="text" />
                <input type="text" />
                <button type="submit">SEND</button>
            </form>
        </>

        {books?.map(book => p)}
    );
};

export default Home;
