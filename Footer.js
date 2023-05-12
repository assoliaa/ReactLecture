import styles from './Footer.module.css';

function Footer() {
    return (
      <div className={styles.footer}>
        <p style ={{color:'#FFFFFF'}}>Made with ❤️ at nFactorial in 2022.</p>
        <p style ={{color: '#FFFFFF', opacity: 0.5}}>Credits: photos from Unsplash.com, icons from Icons8.</p>
      </div>
    );
  }
  
export default Footer;