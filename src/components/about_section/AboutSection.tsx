import React, { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import "./AboutSection.css";
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const AboutSection = () => {
    const [isScrolledTo, setIsScrolledTo] = useState(false);
    const [hover, setHover] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = document.getElementById('about-section');
            if (sectionElement) {
                const scrollY = window.scrollY;
                const sectionOffset = sectionElement.offsetTop;
                setIsScrolledTo(scrollY >= sectionOffset);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const root = {
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: 'linear-gradient(to bottom, rgba(57, 199, 201, 0), rgba(57, 199, 201, 1) 75%, rgba(57, 199, 201, 1))',
    };

    const frameStyle = {
        width: "150px",
        height: "150px",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative" as const,
        margin: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s",
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "grayscale(100%)",
        transition: "filter 0.3s",
    };

    const handleHover = (event: any) => {
        event.target.style.filter = "grayscale(0%)";
        event.target.parentNode.style.transform = "scale(1.1)";
    };

    const handleLeave = (event: any) => {
        event.target.style.filter = "grayscale(100%)";
        event.target.parentNode.style.transform = "scale(1)";
    };

    const projectIcons = [
        `${process.env.PUBLIC_URL}/project-icons/zksync.png`,
        `${process.env.PUBLIC_URL}/project-icons/massa.png`,
        `${process.env.PUBLIC_URL}/project-icons/layerzero.png`,
        `${process.env.PUBLIC_URL}/project-icons/celestia.png`,
        `${process.env.PUBLIC_URL}/project-icons/babylon.png`,
        `${process.env.PUBLIC_URL}/project-icons/linea.png`,
        `${process.env.PUBLIC_URL}/project-icons/venom.png`,
        `${process.env.PUBLIC_URL}/project-icons/avail.png`,
    ];

    return (
        <div id="about-section" style={root}>
            <Grid container>
                <Grid item xs={7}>
                    <div style={{ height: '90%', margin: "0 7rem" }}>
                        <span className="about-text">
                            <span className={`highlight ${isScrolledTo ? 'highlight-active' : ''}`}>Software Engineer</span> committed to shaping the <span className={`highlight ${isScrolledTo ? 'highlight-active' : ''}`}>emerging paradigm</span> where <span className={`highlight ${isScrolledTo ? 'highlight-active' : ''}`}>decentralized</span> technologies and finance converge.
                        </span>
                    </div>
                    <div style={{ width:"20%", margin: "0.2rem 6rem" }}>
                        <span className="details-text">Active contributor to promising and innovative projects</span>
                    </div>
                </Grid>
                <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 3rem' }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                        {projectIcons.map((item, index) => (
                            <div key={index} style={frameStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <img src={item} style={imageStyle as React.CSSProperties} alt="" />
                            </div>
                        ))}
                    </div>
                    <div style={{ width: "100%", marginTop: "2.5rem"}}>
                        <Button
                            variant="outlined"
                            className={hover ? "button-hover button-normal" : "button-normal"}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                            onClick={() => console.log("Navigate to other component")}
                        >
                            Learn more
                            <KeyboardDoubleArrowDownIcon style={{
                                marginTop: '10px', 
                                animation: 'oscillate 2s infinite'
                            }} />
                        </Button>
                    </div>
                    <div style={{ width: "50%", alignSelf: 'flex-end', textAlign: 'end', marginTop:"2rem" }}>
                        <span className="details-text">Currently studying zero-knowledge proofs and privacy-preserving technologies</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutSection;
