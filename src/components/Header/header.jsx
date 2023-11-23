"use client";
import { Container } from "../container/container";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h2>Dashboard</h2>
          <div className={styles.admin}>
            <span>Dulfiqar</span>
            <div className={styles.avatar}>
              <img src="https://cdn.discordapp.com/attachments/1177357576556531785/1177357705850142812/IMG_20231124_001903_116.jpg?ex=657236cf&is=655fc1cf&hm=a9f70b027da0942eab09ae2bf1240ad2c60e31bf6cc463d75ea8a51ad88a4e04&" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
