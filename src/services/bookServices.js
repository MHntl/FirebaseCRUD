import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//Yüklenecek yerin referansını al => db içindeki books
const bookCollectionRef = collection(db, "books");

class BookDataService {
  getAllBooks = () => {
    //yukarıda referansını aldığımız books'un içindekileri getir
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    //edit yapılacak itemi TEK olarak ele alır
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };

  addBooks = (newBook) => {
    //Store a ekleme yapmak için referansı ve yeni item ver
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    //update/delete yapılacak itemi belirle
    const bookDoc = doc(db, "books", id);
    //eski item ile yenisini değiştir
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    //update/delete yapılacak itemi belirle
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };
}

export default new BookDataService();
