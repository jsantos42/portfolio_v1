import styled from "styled-components"
import hamburguerImg from "../res/menu_white.png"

const StyledImg = styled.img`
  width: 2rem;
  padding: 2rem;
  &:hover {
    background: #005684;
    color: green;
  }
`

const Hamburger = ({action, mobile}) => {
    if (mobile) {
        return (
            <StyledImg src={hamburguerImg} alt="aaa" onClick={action}/>
        )
    }
}

export default Hamburger;