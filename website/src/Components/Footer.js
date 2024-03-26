import React from 'react'
import { LiaTelegramPlane } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className='footer1tag'>
        <div className="container">
          <div className="footer1row">
            <div className="col-6 fcol1">
              <div className='iconplustxt'>
                <span><LiaTelegramPlane size={30} /></span>
                <span className='newslettertxt'>Sign Up For Newsletter</span>
              </div>
            </div>

            <div className="col-6 fcol1">
              <div className="fcol2txt">
                <input className='searchinp' type="text" name="search" placeholder="Your Email" />
                <span className='subscribe'>Subscribe</span>

                {/* <BiSearch className='searchicon' size={25} /> */}
              </div>
            </div>
          </div>
        </div>

      </footer>

      <footer className='footer2tag'>
        <div className="container">
          <div className="footer2row">
            <div className='fcol11'>
              <h4 className='headtags'>Contact Us</h4>
              <div className="footerlinks">
                <address>
                  Demo Store <br />
                  No 1259, Los Angeles. 1234<br />
                  United States<br />
                </address>

                <Link>+91 9876789564</Link>
                <Link>website@website.com</Link>
              </div>

              <div className="socialicons">
                  <a><AiFillLinkedin size={20} /></a>
                  <a><AiOutlineInstagram size={20} /></a>
                  <a><AiOutlineGithub size={20}/></a>
                  <a><AiOutlineYoutube size={20} /></a>
              </div>
            </div>

            <div className='fcol12'>
              <h4 className='headtags'>Information</h4>
              <div className="footerlinks">
                <Link>Privacy Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Shopping Policy</Link>
                <Link>Terms of Service</Link>
                <Link>Blogs</Link>
              </div>
            </div>

            <div className='fcol13'>
              <h4 className='headtags'>Account</h4>
              <div className="footerlinks">
                <Link>Search</Link>
                <Link>About Us</Link>
                <Link>FAQ</Link>
                <Link>Contact</Link>
                <Link>Size Chart</Link>
              </div>
            </div>

            <div className='fcol14'>
              <h4 className='headtags'>Quick Links</h4>
              <div className="footerlinks">
                <Link>Accessories</Link>
                <Link>Laptops</Link>
                <Link>Headphones</Link>
                <Link>Smart Watches</Link>
                <Link>Tablets</Link>
              </div>
            </div>

            <div className='fcol15'>
              <h4 className='headtags'>Our App</h4>
              <div className="footerlinks">
                <Link>Demo Store</Link>
                <Link>No 1259, Los Angeles. 1234</Link>
                <Link>United States</Link>
                <Link>+91 9876789564</Link>
                <Link>website@website.com</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='footer3tag'>
        <div className="container">
          <div className="footer3row">
            <div className="col-6 fcol111">
              <p className="">&copy; {new Date().getFullYear()}; Powered by Developers</p>
            </div>
          </div>
        </div>

      </footer>



    </>
  )
}

export default Footer;
