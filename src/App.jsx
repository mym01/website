/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Help from "./components/Help/Help";
import Technology from "./components/Technology/Technology";
import Team from "./components/Team/Team";
import Projects from "./components/Projects/Projects";
import Mobile from "./components/Mobile/Mobile";
import Footer from "./components/Footer/Footer";
import FlotingBtns from "./components/FlotingBtns/FlotingBtns";

function App() {
    const [isHeroHide, setIsHeroHide] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // console.log(entry);
                setIsHeroHide(!entry.isIntersecting);
            },
            { rootMargin: "-120px" }
        );
        // console.log(isHeroHide);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isHeroHide]);
    return (
        <Fragment>
            <Navbar isHeroHide={isHeroHide} />
            <Hero refg={ref} />
            <About />
            <Services />
            <Help />
            <Technology />
            <Team />
            <Projects />
            <Mobile />
            <Footer />
            <FlotingBtns isHeroHide={isHeroHide} />
        </Fragment>
    );
}

export default App;
