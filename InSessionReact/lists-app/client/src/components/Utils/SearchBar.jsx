import * as React from 'react';
import { InputBase, styled } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchInput = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f1f1f1',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#616161' : '#f8f8f8',
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(3),
	  marginRight: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Input = styled(InputBase)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  '& input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    '&::placeholder': {
      color: theme.palette.mode === 'dark' ? '#bdbdbd' : '#9e9e9e',
    },
    '&:focus': {
      '&::placeholder': {
        color: 'transparent',
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <SearchInput>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <Input placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
    </SearchInput>
  );
}

export default  SearchBar
