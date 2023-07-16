import {useEffect} from "react";
import {Link} from "react-router-dom";
import {pages, personalData} from "../data";
import Highlight from "../components/Highlight";
import A from '../components/A'
import Programmer from "../res/undraw_shared_workspace_re_3gsu.png"
import styled from "styled-components";
// import Doctor from "../res/undraw_doctor_kw5l.png"
// import Me from "../res/me.png"
import js from "../res/stack_logos/js.png"
import react from "../res/stack_logos/react.png"
import ember from "../res/stack_logos/ember.png"
import nodejs from "../res/stack_logos/nodejs.png"
import express from "../res/stack_logos/express.png"
import nextjs from "../res/stack_logos/nextjs.png"
import php from "../res/stack_logos/php.png"
import laravel from "../res/stack_logos/laravel.png"
import python from "../res/stack_logos/python.png"
import r from "../res/stack_logos/r.png"
import c from "../res/stack_logos/c.png"
import cpp from "../res/stack_logos/cpp.png"
import docker from "../res/stack_logos/docker.png"
import mysql from "../res/stack_logos/mysql.png"
import postgresql from "../res/stack_logos/postgresql.png"

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
	align-self: flex-start;
  }

  li {
    padding: 0.3rem;
  }
`

export const Stack = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 5rem;
  width: 100%;
  
  img {
	width: 80px;
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
            {/*<img src={Programmer} alt={'Programmer'}/>*/}
            <About>
                <h2>About Me</h2>
                <ul>
                    <li>background in <Highlight>Medicine</Highlight></li>
					<li><Highlight>6+ years</Highlight> of clinical practice</li>
					<li>frustrated by the <Highlight>poor UX</Highlight> of healthcare software</li>
					<li>firm believer that <Highlight>we can change that</Highlight></li>
                    <li>worked in <Highlight>3 countries</Highlight> 🇵🇹 🇫🇷 🇮🇹</li>
					<li>speak <Highlight>5 languages</Highlight> 🇵🇹 🇬🇧 🇫🇷 🇮🇹 🇪🇸</li>
                    <li><Highlight>curious</Highlight> and passionate about <Highlight>learning</Highlight></li>
                    {/*<li>sensitive to <Highlight>UX</Highlight> and <Highlight>UI</Highlight> design/aesthetics</li>*/}
                </ul>
                <h2>Currently</h2>
                <ul>
					<li>working @<Highlight>haelsi</Highlight></li>
					<li>improving an <Highlight>Electronic Medical Record (EMR)</Highlight> software</li>
                </ul>
				<h2>Stack</h2>
				<Stack>
					<img src={js} alt={'js'}/>
					<img src={react} alt={'react'}/>
					<img src={ember} alt={'ember'}/>
					<img src={nodejs} alt={'nodejs'}/>
					<img src={express} alt={'express'}/>
					<img src={nextjs} alt={'nextjs'}/>
					<img src={php} alt={'php'}/>
					<img src={laravel} alt={'laravel'}/>
					<img src={python} alt={'python'}/>
					<img src={r} alt={'r'}/>
					<img src={c} alt={'c'}/>
					<img src={cpp} alt={'cpp'}/>
					<img src={docker} alt={'docker'}/>
					<img src={mysql} alt={'mysql'}/>
					<img src={postgresql} alt={'postgresql'}/>
				</Stack>
            </About>
        </StyledHome>
    )
}

export default Home;

