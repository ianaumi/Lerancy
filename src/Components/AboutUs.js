import './AboutStyles.css';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { PiLinkSimpleFill } from "react-icons/pi";


function AboutUs () {
    return(
        <div className='article'>
                <h1>About Digital Literacy</h1>
                <time>Last update:23 Nov 2023</time>
                <p>LERANCY is committed to advancing digital literacy for all, aiming to empower individuals with the ability to think critically and make informed choices online. The organization is dedicated to strengthening the skills of policymakers, educators, media professionals, youth organizations, and marginalized communities in this domain. LERANCY actively supports Member States in the development of national policies and strategies for digital literacy.<br/><br/>
                    Digital literacy, as endorsed by LERANCY, encompasses a connected set of skills that enable individuals to navigate the evolving landscapes of information, digital technology, and communication. These competencies empower people to critically assess and engage with various forms of digital content, information sources, relevant institutions, and the discerning use of digital tools. These skills are deemed essential for citizens of all ages and backgrounds.<br/><br/>
                    In response to the challenges posed by digital disinformation and misinformation, LERANCY emphasizes the need for a blend of critical information, digital, and media competencies, commonly referred to as digital literacy. LERANCY, in collaboration with its partners, has introduced a new resource titled "Digital Literate Citizens: Think critically, Click Wisely" (Second Edition of the LERANCY Model Digital Literacy Curriculum for Educators and Learners).
                </p>
                <h5>SHARE</h5>
            <div className='share'>
                <FaFacebook className='icon'/>
                <FaInstagramSquare className='icon'/>
                <FaSquareXTwitter className='icon'/>
                <PiLinkSimpleFill className='icon'/>
            </div>
        </div>
    )
}

export default AboutUs;