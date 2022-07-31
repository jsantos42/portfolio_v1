import styled from "styled-components";
import LinkedIn from "../res/footer_logos/linked_in.png";
import Git from "../res/footer_logos/git.png";
import Email from "../res/footer_logos/email.png";
import A from '../components/A'
import {personalData} from "../data";

//==============================================================================
// STYLING
//==============================================================================
const StyledFooter = styled.footer`
  width: 100%;
  margin: auto 0 0 0;
  background: #005684;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  list-style: none;
  padding: 1rem 0;
  gap: 1rem;

  img {
    height: 1.5rem;
  }

  p {
    margin: 0;
  }
`

const Social = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  
  img:hover {
    opacity: 50%;
  }
`

//==============================================================================
// FOOTER COMPONENT
//==============================================================================
const Footer = () => {
    return (
        <StyledFooter>
            <Social>
                <A href={personalData.linkedIn}><img src={LinkedIn} alt={'LinkedIn'}/></A>
                <A href={personalData.gitHub}><img src={Git} alt={'GitHub'}/></A>
                <A href={'mailto:' + personalData.email}><img src={Email} alt={'Email'}/></A>
            </Social>
            <p>© {new Date().getFullYear()} {personalData.name}</p>
        </StyledFooter>
    );
}

export default Footer;