import './footer.css'
const footer = () => {
  return (
    <div className="footer">
        <section className="footersec">
        <div className="footdiv1">
            <h1>GET IN TOUCH</h1>
            <p>darekarrohini303@gmail.com</p>
            <p>9146475301</p>
        </div>
        <div className="footdiv2">
        <h2><button id='headerbtn'><a href="">Movie Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisuecommerce.netlify.app/">Ecom Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://app.netlify.com/sites/warm-babka-067218/overview">Videocalling Website</a></button></h2>
        <h2><button id='headerbtn'><a href="">Pixaby Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisucontactform.netlify.app/">Contact Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://app.netlify.com/sites/birthaday-faf182/overview">B'day Website</a></button></h2>
        <h2><button id='headerbtn'><a href="">Weather Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisupiano.netlify.app/">Piano Website</a></button></h2>
        
        </div>
        <div className="footdiv3">
                     <article className='footart'>
                     <div className='navicon'><i className="fa-brands fa-facebook"></i></div>
                        <div className='navicon'><a href='https://www.linkedin.com/in/rohini-darekar-b658b221b/'><i className="fa-brands fa-linkedin"></i></a></div>
                        <div className='navicon'><i className="fa-brands fa-twitter"></i></div>
                     </article>
                        <br></br>
                        <p>@copywrite rohinidarekar</p>
        </div>
        </section>
    </div>
  )
}

export default footer