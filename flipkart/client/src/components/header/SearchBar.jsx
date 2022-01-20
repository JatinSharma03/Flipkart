import React from 'react';

import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({  }) => ({
  borderRadius: 2,
  backgroundColor: "#fff",
  marginLeft: 10,
    width: '41vw',
    display:"flex",
    justifyContent:"space-between",
    color:"black",
}));

const SearchIconWrapper = styled('div')(({  }) => ({
  padding: 6,
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  color:"blue"
}));

const StyledInputBase = styled(InputBase)(({  }) => ({
  fontsize:"unset",
  '& .MuiInputBase-input': {
    paddingLeft: 20,
  },
  width:"100%",
}));



export default function SearchBar() {
    return (
        <div>
            <Search>

            <StyledInputBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
            />
            
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

          </Search>
        </div>
    )
}
