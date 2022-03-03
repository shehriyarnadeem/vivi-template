import React from 'react'
import Head from "next/head"
import { ToastContainer, Slide } from 'react-toastify'
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Mad Ox - Film Production Company</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta 
                    name="description" 
                    content="Mad Ox - Film and Video Production"
                 />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Mad ox - Video and Film Production House"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Mad Ox - Film Production Company"
                ></meta>
                <link 
                    rel="canonical" 
                    href="https://madoxproductions.comm"
                ></link>
                {/* <meta 
                    property="og:image" 
                    content="https://res.cloudinary.com/dev-empty/image/upload/v1595838139/vivi/about-img-two.jpg" 
                /> */}
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            
            <ToastContainer transition={Slide} />
        </>
    );
}

export default Layout;