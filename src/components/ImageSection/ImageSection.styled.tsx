import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')`
    margin: 0;
    
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: 50% 30%;
    }

    @media (min-width: 2048px) {
        img {
            height: 800px;
        }
    }
`;