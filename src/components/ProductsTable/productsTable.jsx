"use client";

import { useEffect, useState } from "react";
import { Container } from "../container/container";
import styles from "./productsTable.module.css";
import { useAppStore } from "@/store";

export const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const { setIsOpen, setId, setTitle } = useAppStore();

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.table}>
      <Container>
        <button onClick={() => setIsOpen(true)}>Add New</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, i) => (
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>
                  <b>{el.price} $</b>
                </td>
                <td>
                  <button
                    className={styles.editBtn}
                    onClick={() => {
                      setId(el.id);
                      setTitle(el.title);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
