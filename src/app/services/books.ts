import { Book } from "../../common/Book";
import {
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
} from "./firebase";

const collectionName = "books";

// CREATE
export const createBook = async (obj: Book): Promise<string> => {
    try {
        if (!obj.title && !obj.price) {
            throw new Error("El objeto NewPatient está vacío");
        }

        const colRef = collection(db, collectionName);

        const bookData = { ...obj };

        const books = await getBooks();
        console.log("Data", books);

        const patientExists = books.some(
            (book) =>
                book.title === bookData.title && book.price === bookData.price
        );

        if (patientExists) {
            throw new Error("El book ya existe en la base de datos");
        }

        const data = await addDoc(colRef, bookData);
        console.log(bookData);
        return data.id;
    } catch (error) {
        console.error("Error al crear el paciente:", error);
        throw error;
    }
};

// READ
export const getBooks = async (): Promise<Book[]> => {
    try {
        const colRef = collection(db, collectionName);
        const querySnapshot = await getDocs(colRef);
        return querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id } as Book;
        });
    } catch (error) {
        console.error("Error al obtener los books:", error);
        throw error;
    }
};
