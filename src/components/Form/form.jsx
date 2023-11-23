"use client";

import { useAppStore } from "@/store";
import { Modal } from "../Modal/modal";
import styles from "./form.module.css";

export const From = () => {
  const { isOpen, setIsOpen, id, title, setTitle, setId } = useAppStore();

  const update = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const add = () => {
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  const handleSave = () => {
    if (id) update();
    else add();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h4>Edit Modal</h4>
      <button onClick={()=> {
        setTitle("")
        setId(null)
        setIsOpen(false)
      }}>X</button>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <button onClick={handleSave}>Save</button>
    </Modal>
  );
};
