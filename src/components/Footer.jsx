import React from 'react'

import Navbar from './Navbar'

import footerLogo from "../assets/footer-logo.svg"

function Footer() {

    const productItems = [
        {
            name: "Product",
            path: ""
        },
        {
            name: "Login",
            path: ""
        },
        {
            name: "Brand Voice",
            path: ""
        },
        {
            name: "Marketing Calender",
            path: ""
        }
    ]

    const resourcesItems = [
        {
            name: "Resources",
            path: ""
        },
        {
            name: "Pricing",
            path: ""
        },
        {
            name: "Blog",
            path: ""
        },
        {
            name: "Blaze Heros",
            path: ""
        }
    ]

    const socialItems = [
        {
            name: "Social",
            path: ""
        },
        {
            name: "Instagram",
            path: ""
        },
        {
            name: "Facebook",
            path: ""
        },
        {
            name: "Twitter",
            path: ""
        },
    ]

    const legalItems = [
        {
            name: "Legal",
            path: ""
        },
        {
            name: "Terms of service",
            path: ""
        },
        {
            name: "All terms",
            path: ""
        },
        {
            name: "Privacy Policy",
            path: ""
        },
    ]

  return (
    <footer className='footer'>
        <div className="footer__nav-container">
            <Navbar items={productItems} />
            <Navbar items={resourcesItems} />
            <Navbar items={socialItems} />
            <Navbar items={legalItems} />
        </div>
        <img src={footerLogo} alt="Blaze" />
    </footer>
  )
}

export default Footer
