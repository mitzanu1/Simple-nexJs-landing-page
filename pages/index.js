import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour, faLocationDot, faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/main.module.css'
export default function Home() {

  return (
    <div >
      <Head>
        <title>Iager ITP</title>
        <meta name="description" content="Iager ITP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id='acasa' className={styles.main} >
      <a href='#acasa'>  <div className={styles.upArrow}>
         <FontAwesomeIcon icon={faCircleUp}/>
        </div></a>
        <header className={styles.headerMain}>
        <div className={styles.header}>
          <div className={styles.headContact}>
            <div className={styles.headOpenHours}>
              <div className={styles.icoClock}><FontAwesomeIcon icon={faClockFour} /></div>
               <div style={{display:'block', marginLeft:'10px'}}>
                <div>Luni - Miercuri - Vineri: </div>
                <div style={{textAlign:'center'}}>11.00 - 19.00 </div>
               </div>
              <div style={{display:'block', marginLeft:'10px'}}>
               <div>Marti - Joi : </div>
               <div>8.00 - 16.00</div>
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
            <Image src={'/logo.png'} width='300px' height='50px'/>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><a href='#tarife'>Tarife</a></li>
              <li><a href='#acteNecesare'>Acte Necesare</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
        </header>
        <div className={styles.hero}>

        </div>
      </main>

       <div id='tarife' className={styles.tarife}>
         <h1>Tarife ITP</h1>
         <table className={styles.table}>
           <tbody>
           <tr>
            <th>Categorie autovehicul</th>
            <th>Tarif ITP</th>
           </tr>
           <tr>
             <td>Autoturism taxi, scoala sau pentru inchiriere</td>
             <td>80 RON</td>
           </tr>
           <tr>
             <td>Autoturisme motorina sau benzina</td>
             <td>100 RON</td>
           </tr>
           <tr>
             <td>Microbuz, autorulota, utilitare, mixte, specializate, speciale ca masa totala maxim autorizata pana la 3.5 T</td>
             <td>120 RON</td>
           </tr>
           <tr>
             <td>Autoturisme 4x4</td>
             <td>140 RON</td>
           </tr>
           <tr>
             <td>Remorci si rulota fara sistem de franare</td>
             <td>80 RON</td>
           </tr>
           <tr>
             <td>Remorca, semiremorca si rulota cu sistem de franare avand masa maxima autorizata pana  la 3.5t </td>
             <td>90 RON</td>
           </tr>
           </tbody>
         </table>
         <p>In cazul in care autovehiculul este respins la prima verificare se percep taxe de reverificare pentru motive de siguranta 20 RON si poluare 10 RON.</p>
         </div> 
        <div id='acteNecesare' style={{backgroundColor:'#f8f8f8'}}>
         <div className={styles.acteNecesare}>
          <h1>Acte necesare</h1>
          <section>
            <h4>Documentele necesare efectuarii Inspectiei Tehnice Periodice sunt:</h4>
            <ul>
              <li>Certificat de inmatriculare al autovehiculului (talon) original, sau dupa caz, autorizatia provizorie de circulatie</li>
              <li>Buletinul de identitate al conducatorului auto original</li>
              <li>Cartea de identitate a autovehicului (CIV) original</li>
              <li>Polita R.C.A. (Asigurare de Raspundere Civila Auto) valabila la data inspectiei original.</li>
            </ul>
          </section>
         </div>
        </div>
        <div id='contact' style={{backgroundColor:'white'}}>
          <div className={styles.contact}>
            <h1>Contact</h1>
            <h4>Ne puteti contacta la:</h4>
            <ul>
              <a href='tel:0760373197'><li>Telefon: 0760373197</li></a>
              <li>Email: iageritp.ro@gmail.com</li>
              <li>Adresa: Comuna Vama Buzaului sat Acris, nr.7A, Brasov 507246</li>
            </ul>
            <div className={styles.gmap}>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.257215141943!2d25.99881701582389!3d45.6456561293377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b37d28bbeda79f%3A0xd0c7b3257ee6ea3e!2sIAGER%20ITP.RO!5e0!3m2!1sro!2sro!4v1657158766145!5m2!1sro!2sro"
                    allowFullScreen="" 
                    width={'100%'}
                    height={'100%'}
                    style={{border:'none'}}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
             </iframe>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <h3>Powered by Coden Techie</h3>
          <div className={styles.socialM}>
           <a href='https://www.facebook.com/IAGER-ITPro-100375959409184'  target="_blanck"> <div className={styles.socialIco}><FontAwesomeIcon icon={faFacebook} /></div></a>
            <div className={styles.socialIco}><FontAwesomeIcon icon={faInstagram} /></div>     
            <div className={styles.socialIco}><FontAwesomeIcon icon={faWhatsapp} /></div>     
          </div>
        </footer>
    </div>
  )
}
