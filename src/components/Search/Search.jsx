import React from 'react';
import styles from './Search.module.css';
import SearchIcon from './Searchicon';

const Search = () => {

    return (
        <div className={styles.search}>
            <SearchIcon />
        </div>
    );
};

export default Search;