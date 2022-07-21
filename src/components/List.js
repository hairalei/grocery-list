import React from "react";
import styles from "./List.module.css";
import { FaPen, FaTrashAlt } from "react-icons/fa";

function List({ groceryList, handleEditItem, handleDeleteItem }) {
  return (
    <ul>
      {groceryList.map((list) => {
        return (
          <li key={list.id} className={styles.list}>
            <p>{list.item}</p>
            <div className={styles.buttons}>
              <button
                onClick={() => handleEditItem(list.id)}
                className={`${styles.btn} ${styles.btnEdit}`}
              >
                <FaPen />
              </button>
              <button
                onClick={() => handleDeleteItem(list.id)}
                className={`${styles.btn} ${styles.btnDelete}`}
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
