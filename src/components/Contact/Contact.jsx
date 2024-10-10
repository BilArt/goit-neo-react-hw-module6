import PropTypes from "prop-types";
import styles from "./Contact.module.css";

function Contact({ contact, onDelete }) {
  return (
    <li className={styles.contactBlock}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button className={styles.contactBlock_button} onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
