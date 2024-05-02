import { Container } from "./BookRow.styles";

import { Book } from "../common/Book";

const BookRow = ({ title, price, author }: Book) => {
    return (
        <Container>
            <div className="book">
                <div className="front">
                    <div className="cover">
                        <p className="author">{author}</p>
                        <p className="title">{title}</p>
                        <p className="price">{price}€</p>
                    </div>
                </div>
                <div className="left-side">
                    <h2>
                        <span>{title}</span>
                        <span>{author}</span>
                    </h2>
                </div>
            </div>
        </Container>
    );
};

export default BookRow;
