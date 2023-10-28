import banner from '../../resources/images/w807_banner.png';
import { StyledDiv } from './ImageSection.styled';

export function ImageSection() {
  return (
    <StyledDiv>
      <img src={banner} alt='w807 banner' />
    </StyledDiv>
  );
}