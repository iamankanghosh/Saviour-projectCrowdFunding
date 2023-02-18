import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const footer = () => {
  return (
    <>
        <footer>
            <div className="footer__container container">
                <h1 className="footer__title"> ❤️ from Saviours</h1>
            
                <span className="footer__copy"> Email : ankang790@gmail.com
                <br/>
                <br/>
                <div className="footer__social">
                    <a href='https://ankan.in/' className='footer__social-link' target="_blank" rel="noreferrer">
                        <PersonPinIcon/>
                    </a>
                    <a href='https://github.com/iamankanghosh' className='footer__social-link' target="_blank" rel="noreferrer">
                        <GitHubIcon/>
                    </a>
                    <a href='https://leetcode.com/iamankanghosh/' className='footer__social-link' target="_blank" rel="noreferrer">
                        <CodeIcon/>
                    </a>
                    <a href='https://www.linkedin.com/in/iamankanghosh/' className='footer__social-link' target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </a>
                    <a href='https://www.instagram.com/iamankanghosh/' className='footer__social-link' target="_blank" rel="noreferrer">
                        <InstagramIcon/>
                    </a>
                </div>
                <br />
                developed by<a href='https://ankan.in/'>Ankan</a> 
                <br/>
                <br/>
                Copyright &#169; Ankan Ghosh. All right reserved</span>
            </div>
        </footer>
    </>
  )
}

export default footer