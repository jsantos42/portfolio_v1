import styled from "styled-components";

const Title = styled.h1`
  position: absolute;
  left: 0;
  margin: 0;
  padding: 0 1rem;
  font-size: 1.6rem;
  //color: #0358b9;
  //color: #3391ff;
  text-shadow: 0 0 1px black;

  @media only screen and (max-width: 470px) {
    font-size: 1rem;
  }
`

export default Title;