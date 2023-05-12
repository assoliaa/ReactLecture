import styles from './Hello.module.css';

function Hello() {
    return (
      <div className ={styles.hello}>
        <p>Hi, I’m InsertName, I build things for the web. </p>
        <p>I’m software developer and this is my portfolio.</p>
        <button className={styles.btn}>Check out my CV</button>
      </div>
    );
  }
  
export default Hello;
  