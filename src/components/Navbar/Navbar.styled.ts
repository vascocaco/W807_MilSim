import { styled } from '@mui/material/styles'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

export const StyledNavbar = styled('nav')`
    background-color: #0C0A16;
    display: grid;
    grid-template-columns: 35% auto auto auto auto;
    gap: 10px;    

    h1 {
        font-size: 75px;
        color: #EB1C26;
        text-align: center;
        align-items: center;
        vertical-align: text-bottom;
        text-align-last: center;
        margin-right: 35%;
        font-family: 'Anek Telugu', sans-serif;
        font-weight: bold;
    }

    h6 {
        color: #EB1C26;
        font-size: 16px;
        font-family: 'Anek Telugu', sans-serif;
        color: #EB1C26;
    }

    p {
        color: white;
        font-weight: bold;
        font-size: 21px;
        font-family: 'Anek Telugu', sans-serif;
    }
`;

export const StyledDivList = styled('div')`
    display: flex;
    align-items: center;
`;

export const StyledAccessTimeIcon = styled(AccessTimeIcon)`
    color: lightgray;
    font-size: 55px;
    margin-right: 5px;
`;

export const StyledLocationOnIcon = styled(LocationOnIcon)`
    color: lightgray;
    font-size: 55px;
    margin-right: 5px;
`;

export const StyledEventIcon = styled(EventIcon)`
    color: lightgray;
    font-size: 55px;
    margin-right: 5px;
`;

export const StyledPhotoLibraryIcon = styled(PhotoLibraryIcon)`
    color: lightgray;
    font-size: 55px;
    margin-right: 5px;
`;