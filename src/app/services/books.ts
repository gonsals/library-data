import { Book } from "../../common/Book";
import { db, collection, addDoc, getDocs, doc, updateDoc, getDoc, deleteDoc } from "./firebase";

const collectionName = "books";

// CREATE
export const createBook = async (obj: Book): Promise<string> => {
    try {
        if (!obj.title && !obj.price) {
            throw new Error("El objeto newBook está vacío");
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


// UPDATE
export const updateBook = async (
    id: string,
    updatedData: Book
): Promise<Book | null> => {
    try {
        const docRef = doc(db, collectionName, id);
        const patientDataWithUpdatedTimestamp = {
            ...updatedData
        };
        await updateDoc(docRef, patientDataWithUpdatedTimestamp);
        // Después de actualizar, obtenemos el paciente actualizado
        const updatedDocSnapshot = await getDoc(docRef);
        if (updatedDocSnapshot.exists()) {
            return {
                ...updatedDocSnapshot.data(),
                id: updatedDocSnapshot.id,
            } as Book;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error al actualizar el paciente:", error);
        throw error;
    }
};


// DELETE
export const deleteBook = async (id: string) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
};