import styled from "styled-components"
import burgerMenu from "../res/menu_white.png"

const StyledImg = styled.img`
  width: 2rem;
  padding: 2rem;
  &:hover {
    background: #005684;
  }

  @media only screen and (max-width: 470px) {
    width: 1rem;
    padding: 1rem;
  }
`

const Hamburger = ({action, mobile}) => {
    if (mobile) {
        return (
            <StyledImg src={burgerMenu} alt="burger menu" onClick={action}/>
        )
    }
}

export default Hamburger;