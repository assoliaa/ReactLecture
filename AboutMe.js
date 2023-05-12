import styles from './AboutMe.module.css';

function AboutMe() {
    return (
      <div className={styles.About}>
        <div>
            <p>About Me</p>
            <p>About meI’m software developer and this is my portfolio.
                I’m software developer and this is my portfolio. 
                I’m software developer and this is my portfolio.
                I’m software developer and this is my portfolio.</p>
            <div className ={styles.love}>
                <div className= {styles.mylove}>
                    <img src = "Pointer.png"/>
                    <p>Looooove Naruto</p>
                </div>
                <div className= {styles.mylove}>
                    <img src = "Pointer.png"/>
                    <p>Looooove Naruto</p>
                </div>
            </div>
            <div className ={styles.love}>
                <div className= {styles.mylove}>
                    <img src = "Pointer.png"/>
                    <p>Looooove Naruto</p>
                </div>
                <div className= {styles.mylove}>
                    <img src = "Pointer.png"/>
                    <p>Looooove Naruto</p>
                </div>
            </div>
        </div>
        <img src ="image 4.png"/>
      </div>
    );
  }
  
export default AboutMe;