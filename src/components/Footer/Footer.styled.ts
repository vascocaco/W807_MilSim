import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledFooter = styled('footer')`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0C0A16;
    height: 50px;
`;

export const StyledTypography = styled(Typography)`
    text-align: center;
    color: white;
`;