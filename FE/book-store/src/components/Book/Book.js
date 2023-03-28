import { Button } from "@mui/material";
import React from "react";
import "../../style/book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Price {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  );
};

export default Book;
