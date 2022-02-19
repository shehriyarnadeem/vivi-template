import React from 'react'
import Head from "next/head"
import { ToastContainer, Slide } from 'react-toastify'
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Vivi - React Next.js Video Production & Movie Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta 
                    name="description" 
                    content="Vivi - React Next.js Video Production & Movie Template"
                 />
                <meta 
                    name="og:title" 
                    property="og:title" 
                    content="Vivi - React Next.js Video Production & Movie Template"
                ></meta>
                <meta 
                    name="twitter:card" 
                    content="Vivi - React Next.js Video Production & Movie Template"
                ></meta>
                <link 
                    rel="canonical" 
                    href="https://vivi-react.envytheme.com/"
                ></link>
                <meta 
                    property="og:image" 
                    content="https://res.cloudinary.com/dev-empty/image/upload/v1595838139/vivi/about-img-two.jpg" 
                />
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            
            <ToastContainer transition={Slide} />
        </>
    );
}

export default Layout;