import Image1 from './Images/Avtar.jpg'
import Audio1 from './Audio/drop-it-124014.mp3'
import Vieo1 from './Video/Cat.mp4'
function Html(){
    return(
        <div className="Html">
            <h1>Welcome to html</h1>
            <img src={Image1} alt='' height={'500px'} width={'49%'}></img>
            <img src="https://images.freeimages.cohttps://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80m/images/large-previews/6b6/beach-cat-1637328.jpg?fmt=webp&w=350" alt='image not display' height={'500px'} width={'49%'}></img>
            <h1>Anchor tag</h1>
            <a href='https://www.flipkart.com/' target={'_blank'} rel='noreferrer'>FLIPCART</a>
            <h1>Iframe Tag</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WxvxvV4-pzk?si=TiBcoYo_0_QGAo9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HcawLQbuHWs?si=cr7OHMLPV09rViZa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <br></br>
             <h1>Media Tag</h1>

            <video src={Vieo1} autoPlay loop muted width={'100%'} height={'500px'}></video>
             <audio src={Audio1} controls loop muted>  </audio>
            <table border={1} cellPadding={'20px'} cellSpacing={'20px'}> 
            <thead>           
                <tr>
                    <th>Slno</th>
                    <th>Name</th>
                    <th>Sal</th>
                </tr>
                </thead>
               <tbody>
                <tr>
                    <td>01</td>
                    <td>A</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>B</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>C</td>
                    <td>1000</td>
                </tr>
                </tbody>   
                <tfoot>
                    <tr>       
                      <td colSpan={3}>@emaind.com</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default Html