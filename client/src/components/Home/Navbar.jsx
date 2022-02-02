import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import {
  Contianer,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContianer,
  Input,
  Logo,
  MenuItem
} from './navbar.style'
import { Badge } from '@material-ui/core'
const Navbar = () => {
  return (
    <Contianer>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContianer>
            <Input/>
            <Search style={{color:'gray',fontSize:'16px'}}/>
          </SearchContianer>
        </Left>
        <Center>
          <Logo>LAMA</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Contianer>
  )
}

export default Navbar
