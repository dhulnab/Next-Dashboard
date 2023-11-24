"use client";

import { useAppStore } from "@/store";
import { Modal } from "../Modal/modal";
import styles from "./form.module.css";

export const From = () => {
  const { isOpen, setIsOpen, id, title, setTitle, setId, price, setPrice } =
    useAppStore();

  const update = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("Update complete"));
    alert(`Product With ID: ${id} Is Updated`);
  };

  const add = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then(() => console.log("Add successfully"));
    alert(`${title} Is Added`);
  };

  const handleSave = () => {
    if (id) update();
    else add();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      className={styles.form}
    >
      <h4>Edit Modal</h4>
      <input
        value={title}
        placeholder="product Title"
        onChange={(e) => setTitle(e.target.value)}
        className={styles.titleInput}
      />
      <input
        value={price}
        placeholder="product Price"
        onChange={(e) => setPrice(e.target.value)}
        className={styles.priceInput}
      />
      <br />
      <div className={styles.finish}>
        <button onClick={handleSave}>Save</button>
        <button
          onClick={() => {
            setTitle("");
            setPrice("");
            setId("");
            setIsOpen(false);
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};
