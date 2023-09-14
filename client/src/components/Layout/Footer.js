import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { InstagramOutlined , LinkedinOutlined , GithubOutlined} from '@ant-design/icons'
const Footer = () => {
  return (
    <>
        <footer>
  <div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
  </div>
  <ul class="social_icon">
    <li><Link to="https://www.instagram.com/chaudhary.aryan.panwar/"><InstagramOutlined /></Link></li>
    <li><Link to="https://www.linkedin.com/in/aryan-panwar-318a2324b/"><LinkedinOutlined  className="logo-twitter"/></Link></li>
    <li><Link to="https://github.com/chaudharyaryanpanwar"><GithubOutlined className="logo-linkedin"/></Link></li>
    
  </ul>
  
 
  <h2>Built by Aryan Panwar</h2>
</footer>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )
}

export default Footer