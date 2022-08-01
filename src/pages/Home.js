import {useEffect} from "react";
import {Link} from "react-router-dom";
import {pages, personalData} from "../data";
import Highlight from "../components/Highlight";
import A from '../components/A'
import Programmer from "../res/undraw_shared_workspace_re_3gsu.png"
import styled from "styled-components";
// import Doctor from "../res/undraw_doctor_kw5l.png"
// import Me from "../res/me.png"

//==============================================================================
// STYLING
//==============================================================================
export const StyledHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem 8rem;
  min-width: 280px;
  max-width: 100%;
  min-height: calc(100vh - 4rem - 5rem);

  @media only screen and (max-width: 470px) {
    min-height: calc(100vh - 3rem - 5.5rem);
  }

  h1 {
    width: 100%;
    font-weight: 200;
    margin: 4rem 0 0 0;
  }

  img {
    width: 278px;
  }


  a {
    text-decoration: underline;
  }
`

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 2rem;

  h2 {
    align-self: flex-start;
    padding: 0;
    font-weight: 200;
    /*margin: 0;*/
  }

  ul {
    font-size: 1.1rem;
    padding-left: 1rem;
    margin: 0 0 2rem 0;
  }

  li {
    padding: 0.3rem;
  }
`

export const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  margin: 0 0 2rem 0;
  width: 100%;

  img {
    width: 100px;
    align-self: flex-end;
    justify-self: flex-end;
  }

  h2 {
    margin: 0;
    font-weight: 200;
  }
`


//==============================================================================
// HOME COMPONENT
//==============================================================================
const Home = () => {
    // This is necessary to render the page always at the start. Otherwise, if
    //the user reaches the footer on one page and heads to another page, that
    //other page will be rendered at the bottom
    useEffect(() => window.scroll(0, 0), []);

    return (
        <StyledHome>
            <h1>{personalData.role}</h1>
            {/*<img src={Doctor}/>*/}
            <img src={Programmer} alt={'Programmer'}/>
            <About>
                <h2>About Me:</h2>
                <ul>
                    <li>background in <Highlight>Medicine</Highlight></li>
                    <li><Highlight>6+ years</Highlight> of clinical practice</li>
                    <li>worked in <Highlight>2 countries</Highlight> (PT and FR)</li>
                    <li>frustrated by the <Highlight>poor UX</Highlight> of healthcare software</li>
                    <li>did a <Highlight>datascience</Highlight> project involving <Highlight>GIS</Highlight></li>
                    <li>thrilled, enrolled at <Highlight>42</Highlight> to become a programmer</li>
                    <li>highly <Highlight>curious</Highlight> and <Highlight>motivated</Highlight> individual</li>
                    <li>sensitive to <Highlight>UX</Highlight> and <Highlight>UI</Highlight> design/aesthetics</li>
                    <li>worship <A href={'https://en.wikipedia.org/wiki/Jony_Ive'}><Highlight>Sir Jony
                        Ive</Highlight></A></li>
                </ul>
                <h2>Currently:</h2>
                <ul>
                    <li>finishing a FullStack course on Udemy</li>
                    <li>doing some <Highlight>front-end</Highlight> and <Highlight>datascience</Highlight> projects</li>
                </ul>
            </About>
            <More>
                <h2>Interested?</h2>
                <h2>Check my <Link style={{textDecoration: 'underline'}} to={pages.projects}>projects</Link>!
                </h2>
                {/*    <img src={Me}/>*/}
                {/*    <button>Contact Me (this button still doesn't work!)</button>*/}
            </More>
        </StyledHome>
    )
}

export default Home;

