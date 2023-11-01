import './Navbar.css'
import Image1 from './DynamicPage/Image/03-25-44-707_1440x550.jpg'
function Navbar(){
    return(
        <div className="Navbar">
         <nav className="navbar">
            <img src={Image1} alt="" />
            <article className="navart">
                <div className="navdiv">PX</div>
                <div className="navdiv">LOGIN</div>
                <div className="navdiv">JOIN</div>
                <div className="navdiv"><i class="fa-solid fa-phone">Phone</i></div>
                
            </article>
            <h1>Stunning royalty-free images & royalty-free stock</h1>
                <h4>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</h4>
         </nav>
        </div>
    )

}
export default Navbar