import React from 'react'
import  Styles from './footer.module.css'
import Link from 'next/link'
interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div>
              <div className={Styles.div}>
            <h1 className={Styles.h1} >Delete Account</h1>
            <p>If you delete your account you'll be permanently removing it from our systems-you can't undo it. </p>
            <p className={Styles.p}>Yes,Delete my account </p>
        </div>
        <div className={Styles.div1}>
            
        <p>
        <span style={{ color: 'blue' }}>Get in touch with our support team  </span>
        <span style={{ color: 'black' }}>if you have any question  or want to leave some feedback.</span>
    </p>
            <p>We'll be happy to hear from you.</p>
        </div>
        </div>
    )
}

export default Footer;
