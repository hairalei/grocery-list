import React from "react";
import styles from "./Form.module.css";

function Form({ item, handleAddItem, handleChangeInput, isEditing }) {
  return (
    <form className={styles.form} onSubmit={handleAddItem}>
      <input
        value={item}
        type="text"
        placeholder="e.g. eggs"
        className={styles.search}
        onChange={handleChangeInput}
      />
      <button type="submit" className={styles.btn}>
        {isEditing ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default Form;
