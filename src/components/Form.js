import React from "react";
import styles from "./Form.module.css";

function Form({ item, handleAddItem, handleChangeInput }) {
  return (
    <form className={styles.form} onSubmit={handleAddItem}>
      <input
        value={item}
        type="text"
        className={styles.search}
        onChange={handleChangeInput}
      />
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}

export default Form;
