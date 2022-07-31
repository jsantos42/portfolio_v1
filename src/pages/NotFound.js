import styled from "styled-components";

const StyledNotFound = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.body.background};

  p {
    font-size: 2rem;
    font-weight: 500;
  }
`

const NotFound = () => {
    return (
        <StyledNotFound>
            <p><strong>404 NOT FOUND</strong></p>
            <p>This page does not exist.</p>
        </StyledNotFound>
    )
}

export default NotFound;