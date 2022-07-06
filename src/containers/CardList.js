import styled from "styled-components";

const CardList = styled.div`
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

export default CardList;