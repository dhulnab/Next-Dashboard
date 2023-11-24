"use client";

import { useEffect, useState } from "react";
import { Container } from "../container/container";
import styles from "./productsTable.module.css";
import { useAppStore } from "@/store";
import { IoSearchOutline } from "react-icons/io5";

export const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const { setIsOpen, setId, setTitle, setPrice ,id} = useAppStore();
  

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };
  const Delete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(()=>console.log("Deleted successfully"));
      alert(`${id} Is Deleted`);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.table}>
      <Container>
        <div className={styles.searchAddBox}>
          <button onClick={() => setIsOpen(true)} className={styles.add}>
            Add New
          </button>
          <div className={styles.search}>
            <input type="text" placeholder="Search" />
            <IoSearchOutline className={styles.icon} />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th className={styles.action}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, i) => (
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td>
                  <b className={styles.oneLine}>{el.price} $</b>
                </td>
                <td className={styles.action}>
                  <button
                    className={styles.editBtn}
                    onClick={() => {
                      setId(el.id);
                      setPrice(el.price );
                      setTitle(el.title);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button className={styles.deleteBtn} onClick={Delete}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};
