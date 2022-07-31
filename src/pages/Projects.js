import {useEffect} from "react";
import styled from "styled-components";
import CardArray from "../containers/CardArray";

//==============================================================================
// STYLING
//==============================================================================
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 5rem;
  padding: 4rem 1rem;
  min-height: calc(100vh - 6rem - 5.5rem);
  
  @media only screen and (max-width: 470px) {
    grid-template-columns: 1fr;
    min-height: calc(100vh - 3rem - 5.5rem);
  }
`

//==============================================================================
// PROJECTS PAGE
//==============================================================================
const Projects = () => {
    // This is necessary to render the page always at the start. Otherwise, if
    //the user reaches the footer on one page and heads to another page, that
    //other page will be rendered at the bottom
    useEffect(() => window.scroll(0, 0), []);

    return <CardGrid>{CardArray}</CardGrid>
}

export default Projects;