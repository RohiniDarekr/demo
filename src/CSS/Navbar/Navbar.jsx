import './Navbar.css'
function Navbar(){
    return(
        <div className="Navbar">
         <nav className="navbar">
            <article className="navart">
                <div className="navdiv">Home</div>
                <div className="navdiv">About</div>
                <div className="navdiv">Gallery</div>
                <div className="navdiv">Contact</div>
                <div className="navdiv">Service</div>
                <div className="navdiv"><i class="fa-solid fa-phone">Phone</i></div>
            </article>
         </nav>
        </div>
    )

}
export default Navbar