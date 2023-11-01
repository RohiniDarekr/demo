//import './Header.css'
import Image1 from './Image/Rohini.jpeg'
const Header = () => {
 
  return (
    <div className="Header">
        <section className="Headersec">
        <img src={Image1} alt=""  height={'100px'} width={'100%'}/>
          <h1>SUDESH GOWDA MD</h1>
          <h2>WEB DEVLOPER</h2>
          <h2 style={{color:'white'}}><button id='headerbtn'><a style={{color:'white'}} href="tel:+918123265859">CONTACT ME</a></button></h2>
        </section>
        
    </div>
  )
}

export default Header
