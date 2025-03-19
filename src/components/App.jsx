// src/components/App.jsx

import { BooksList } from "./BooksList";
import Product from "./Product";

export default function App() {
  const favBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
  ];
  return (
    <>
      <div>
        <h1>Best selling</h1>
        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
        <Product name="Tacos With Lime" price={10.99} />
      </div>
      <div>
        <BooksList books={favBooks} />
      </div>
    </>
  );
}
