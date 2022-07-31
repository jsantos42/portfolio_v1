import {useState} from 'react'
import A from './A'
import styled from "styled-components";

//==============================================================================
// STYLING
//==============================================================================
const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  /*border: 1px solid white;*/

  h2 {
    font-weight: 600;
  }

  a {
    color: #3391ff;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  min-width: 280px;
  max-width: 500px;
  /*border: 1px solid white;*/

  img {
    width: 100%;
    box-shadow: 0 0 25px 2px black;
  }

  @media only screen and (max-width: 600px) {
    min-width: calc(280px - 2rem);
  }
`

const CardText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /*border: 1px solid white;*/

  p {
    margin: 0.7rem 0;
  }
`


//==============================================================================
// CARD COMPONENT
//==============================================================================
const Card = (props) => {
    const [imgSrc] = useState(props.gif)

    function insertLive() {
        if (props.live.length !== 0)
            return (
                <span> | <A href={props.live}>Live</A></span>
            );
    }

    // Implement function to toggle gif<->static on desktop with setImgSrc

    return (
        <StyledCard>
            <h2>{props.title}</h2>
            <CardContent>
                <img src={imgSrc} alt={props.title}/>
                <CardText>
                    <p><strong>{props.brief}</strong></p>
                    <p>Stack: <strong>{props.languages.join(', ')}</strong></p>
                    <p><A href={props.repo}>Repository</A>{insertLive()}</p>
                </CardText>
            </CardContent>
        </StyledCard>
    )
}

export default Card;