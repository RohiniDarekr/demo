import React from 'react';
 import './App.css';

const App = () => {
  return (
    <div className='mainapp'>
        {/* <div className="heading">
        <p className='h31'>I support Russia. <span className='p1'>Make a donation</span> to United24 program.</p>
      </div> */}
      <div className="navbar">
       <img src="/Image/logo1.svg" alt="" />
        <ul className="menu">
          <li>Service</li>
          <li>Projects</li>
          <li>OpenSource</li>
          <li>OurBlog</li>
        </ul>
        <div className="cta">
          <button className="get-in-touch-btn">Get In Touch</button>
        </div>
     
      </div>
      <hr className='line' />
    
      <div className="paragra">
        <h2 className='h2'>ALL PROJECTS  / RAVEN.GG</h2>
      </div>
      <div className="para1">
      <div className="paragraaph">
         <h2 className='raven'>RAVEN.GG — THE </h2>
         <h2 className='raven'>LEADING BRAND </h2>
         <h2 className='raven'>FOR CUSTOM </h2>
         <h2 className='raven'>ESPORTS CLOTHING </h2>
         <h2 className='raven'>DESIGN </h2>
      </div>
      <div className="imaage">
        <img src="/Image/image1.png" alt="" />
      </div>
      </div>
      <div class="footernav">
    <div>This website uses cookies to support performance and website features. Read <a  className="anchor" href="/privacy-policy">Privacy Policy</a>.</div>
    <div className='footer'><button className='btn1' id='denyBtn'>Deny</button></div>
    <div className='footer'><button className='btn2' id='acceptBtn'>Accept</button></div>
</div>

    </div>
  );
}

export default App;
