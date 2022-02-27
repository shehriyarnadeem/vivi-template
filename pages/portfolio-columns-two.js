import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PortfolioCard from '../components/PortfolioColumnsTwo/PortfolioCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsTwo = (props) => {

   const {videos:{items}} = props;
    
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Portfolio" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Mad Ox Portfolio" 
                imgClass="bg-16" 
            />    

            <PortfolioCard videos={items} />
            
            <Footer />
        </>
    )
}

export default PortfolioColumnsTwo;

async function fetchMyAPI() {
    let response = await fetch('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCFdsGxVtQP-zX0JV_R4iFMg&maxResults=100&key=AIzaSyDp_UL8FlQNiZnh1U5s5SC5vH09fkIgN5Y');
    const data =  response.json();
    return data;
  }

export const getStaticProps = async () => {

     const videos = await fetchMyAPI();

     return {  
        revalidate: 7200,
        props: { videos } };
}