import styles from './Experience.module.css';

function Expericne() {
    return (
      <div className={styles.Experience}>
        <p>Experience</p>
        <div className ={styles.TableLine}>
            <p>2021-2022</p>
            <div>
                <div><img src ="Pointy.png"/><p>The Role at the Company</p></div>
                <p>Country, City</p>
                <p>I’m software developer and this is my portfolio.
                    I’m software developer and this is my portfolio. I’m software developer and this is my portfolio.
                   I’m software developer and this is my portfolio.</p>
            </div>
        </div>
        <div className ={styles.TableLine}>
            <p>2021-2022</p>
            <div>
                <div><img src ="Pointy.png"/><p>The Role at the Company</p></div>
                <p>Country, City</p>
                <p></p>
            </div>
        </div>
        <div className ={styles.TableLine}>
            <p>2021-2022</p>
            <div>
                <div><img src ="Pointy.png"/><p>The Role at the Company</p></div>
                <p>Country, City</p>
                <p></p>
            </div>
        </div>
      </div>
    );
  }
  
export default Expericne;
  