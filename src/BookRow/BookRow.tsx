import { Container } from "./BookRow.styles";

import { Book } from "../common/Book";

const BookRow = ({ id, title, price }: Book) => {
    return (
        <Container>
            <div className="book">
                <div className="front">
                    <div className="cover">
                        <p className="id">{id}</p>
                        <p className="title">{title}</p>
                        <p className="price">{price}€</p>
                    </div>
                </div>
                <div className="left-side">
                    <h2>
                        <span>{title}</span>
                        <span>{id}</span>
                    </h2>
                </div>
            </div>
        </Container>
    );
};

export default BookRow;
