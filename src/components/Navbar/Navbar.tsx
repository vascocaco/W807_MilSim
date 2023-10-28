import { StyledAccessTimeIcon, StyledDivList, StyledEventIcon, StyledLocationOnIcon, StyledNavbar, StyledPhotoLibraryIcon } from './Navbar.styled';
import { Typography } from '@mui/material';

const listItems = [
  { title: 'Timezones', description: 'US & EU', icon: <StyledAccessTimeIcon /> },
  { title: 'Where', description: 'Discord', icon: <StyledLocationOnIcon /> },
  { title: 'When', description: 'Every Weekend', icon: <StyledEventIcon /> },
  { title: 'Wanna See?', description: 'Galleria', icon: <StyledPhotoLibraryIcon /> },
];

export function Navbar() {
  return (
    <StyledNavbar>
      <Typography variant='h1'>W807</Typography>
      {listItems.map((item, index) => (
        <StyledDivList key={index}>
          {item.icon}
          <div>
            <Typography variant='h6'>{item.title.toUpperCase()}</Typography>
            <Typography variant='body1'>{item.description.toUpperCase()}</Typography>
          </div>
        </StyledDivList>
      ))}
    </StyledNavbar>
  );
}