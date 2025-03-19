import { Alert } from "./Alert";
import { AlertCLSX } from "./AlertCLSX";
import { BooksList } from "./BooksList";
import { Card } from "./Card";
import Product from "./Product";

export default function App() {
  const appStyles = {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
    justifyContent: "center",
  };

  const favBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" },
  ];

  const cardChildren = <div>Some children</div>;

  console.log(favBooks);

  return (
    <div style={appStyles}>
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
        {favBooks.length > 0 ? (
          <BooksList books={favBooks} />
        ) : (
          <p>You have no favorite books</p>
        )}
      </div>
      <div>
        <Card>{cardChildren}</Card>
      </div>
      <div>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success">
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning">
          Please update your profile contact information
        </Alert>
      </div>
      <div>
        <AlertCLSX variant="info">This is an alert</AlertCLSX>
      </div>
    </div>
  );
}
