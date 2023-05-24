import React from 'react'
import styles from '../styles/main.module.css'
import { faClockFour, faLocationDot, faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
    <a href='#acasa'>  <div className={styles.upArrow}>
       <FontAwesomeIcon icon={faCircleUp}/>
      </div></a>
      <header className={styles.headerMain}>
      <div className={styles.header}>
        <div className={styles.headContact}>
          <div className={styles.headOpenHours}>
            <div className={styles.icoClock}><FontAwesomeIcon icon={faClockFour} /></div>
             <div style={{display:'block', marginLeft:'10px'}}>
              <div>Luni -  Vineri: </div>
              <div style={{textAlign:'center'}}>8.00 - 20.00 </div>
             </div>
            <div style={{display:'block', marginLeft:'10px'}}>
             <div>Pauza de masa : </div>
             <div>13.00 - 14.00</div>
            </div>
            <div style={{display:'block', marginLeft:'15px'}}>
             <div>Sambata : </div>
             <div>8.00 - 13.00</div>
            </div>
          </div>
          <div className={styles.headAddress}>
            <div className={styles.icoMap}><FontAwesomeIcon icon={faLocationDot} /></div>
            <span> Comuna Vama Buzaului, sat Acris, nr. 7A, Brasov</span>
          </div>
        </div>
        
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href='/#acasa'><Image src={'/logo.png'} width='300px' height='50px'/></Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href='/#tarife'>Tarife</a></li>
            <li><a href='/#acteNecesare'>Acte Necesare</a></li>
            <li><a href='/#contact'>Contact</a></li>
            <li><Link href='/e-learning'>E-Learning</Link></li>
          </ul>
        </nav>
      </div>
      </header>     
    </div>
  )
}

export default Nav