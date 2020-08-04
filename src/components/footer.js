import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Built with Gatsby & Netlify, Made with <span className="icon -love"><RiHeart2Line/></span> in Raleigh</p>
    </div>
  </footer>
)

export default Footer