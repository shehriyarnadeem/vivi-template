import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamMemberCard from '../components/Team/TeamMemberCard';
import Footer from '../components/_App/Footer';

const Team = () => {
    return (
        <>
            <Navbar />

            <PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                imgClass="bg-21" 
            />    

            <TeamMemberCard />
            
            <Footer />
        </>
    )
}

export default Team;