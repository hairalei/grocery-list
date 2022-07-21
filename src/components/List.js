import React from "react";
import styles from "./List.module.css";

function List({ groceryList }) {
  return (
    <ul>
      {groceryList.map((list) => {
        return (
          <li key={list.id} className={styles.list}>
            {list.item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
