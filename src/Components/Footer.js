import './FooterStyles.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
        <div className='footer'>
            <div className='top'>
                <div className='eme'>
                    <h1>Lerancy</h1>
                    <p>Explore the web with confidence.</p>
                </div>
                <div>
                    <a href="/">
                    <FaInstagramSquare className='i'/>
                    </a>
                    <a href="/">
                    <FaFacebookSquare className='i'/>
                    </a>
                    <a href="/">
                    <FaSquareXTwitter className='i'/>
                    </a>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>

                <div>
                    <h4>Terms of use</h4>
                    <a href='/'>Lerancy Name & Logo</a>
                    <a href='/'>FAQ</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>

                <div>
                    <h4>Policies</h4>
                    <a href='/'>Protection of human rights (Procedure 104)</a>
                    <a href='/'>Privacy Notice</a>
                    <a href='/'>Access to Information</a>
                    <a href='/'>Environmental and Social Policies</a>
                </div>

                <div>
                    <h4>Project</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All Versions</a>
                </div>
            </div>
        </div>
    )
}


export default Footer;