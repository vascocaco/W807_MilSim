import Typography from '@mui/material/Typography/Typography';
import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')`
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 300px;
        margin-right: 50px;
    }
`;

export const StyledDescriptionDiv = styled('div')`
    background-color: #010101;
    color: white;
    padding: 12px;
    border-radius: 12px;
`;

export const StyledTitle = styled(Typography)`
    font-size: 30px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #A89670;
`;

export const StyledSubTitle = styled(Typography)`
    margin-bottom: 10px;
    font-weight: bold;
`;