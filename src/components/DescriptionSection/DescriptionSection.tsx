import Typography from '@mui/material/Typography/Typography';
import logo from '../../resources/images/w807_logo.png';
import { StyledDescriptionDiv, StyledDiv, StyledTitle, StyledSubTitle } from './DescriptionSection.styled';

export function DescriptionSection() {
  return (
    <StyledDiv>
      <img src={logo} alt='w807 logo' />
      <StyledDescriptionDiv>
        <StyledTitle variant="h2">Welcome to the W807 Homepage</StyledTitle>
        <StyledSubTitle>We are a Milsim group focused on Ready or Not and Ground Branch.</StyledSubTitle>
        <Typography>We strive for realism and to provide an immersive experience to our operators. Our team comprises people from different countries, backgrounds and skill sets, with this we strongly believe it gives us an edge and provides an extra layer when it comes to combat simulation.</Typography>
        <Typography>Feel free to take a look at our galleria where we post photos from past operations, trainings and others.</Typography>
        <Typography>If you decide you want to join the team proceed to join our discord.</Typography>
        <Typography>Good luck!</Typography>
      </StyledDescriptionDiv>
    </StyledDiv>
  );
}