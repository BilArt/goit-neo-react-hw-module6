import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <div className={styles.searchBox}>
      <label className={styles.searchBox_label}>Find contacts by name or surname:</label>
      <input
      className={styles.searchBox_input}
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.string.isRequired,
};

export default SearchBox;
