import styles from './Header.module.css';

function Header() {
    return (
      <div className ={styles.header}>
        <p>Asoliiiaaau</p>
        <div className={styles.sideInfo}>
            <p>About</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Contacts</p>
        </div>
      </div>
    );
  }
  
export default Header;
  