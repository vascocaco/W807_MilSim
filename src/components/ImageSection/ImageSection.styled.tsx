import { styled } from '@mui/material/styles'

export const StyledDiv = styled('div')`
    margin: 0;
    
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: 50% 30%;
    }

    @media (min-width: 2420px) {
        img {
            height: 800px;
        }
    }

    @media (min-width: 1921px) {
        img {
            height: 600px;
        }
    }
`;