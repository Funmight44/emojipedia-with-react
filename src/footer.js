import './index.css';

const writerDate = new Date().getFullYear();

const Footer = () => {
    return ( 
        <div className='footer'>
            <h3>Copywrite @ {writerDate}</h3>
            <p>by Akano Funmilayo</p>
        </div>
     );
}
 
export default Footer;