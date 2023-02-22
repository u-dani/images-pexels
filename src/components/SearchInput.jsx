
import { useState } from 'react';
import styles from './css/SearchInput.module.css'

export const SearchInput = ({ handleChange, submit, value }) => {

    return (
        <form className={styles.search_input} onSubmit={submit}>
            <input type="text" onChange={handleChange}/>
            <span className="material-symbols-outlined span" onClick={submit} value={value}>search</span>
        </form>
    )
}