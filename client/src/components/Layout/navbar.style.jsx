import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Contianer = styled.div`
  height: 60px;
  margin-bottom: 0.8rem;
  ${mobile({height:'50px'})}
`
export const Wrapper = styled.div`
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({padding: '0.5rem 0'})}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}
`
export const SearchContianer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`
export const Input = styled.input `
  border:none;
  ${mobile({width: '3rem'})}
`
export const Logo = styled.h1 `
font-weight: bold;
${mobile({fontSize: '1.5rem'})}
`
export const Center = styled.div`
  flex: 1;
  text-align:center;
`
export const Right = styled.div`
  flex: 1;
  display:flex;
  justify-content: flex-end;
  gap:1rem;
  ${mobile({flex:'2',justifyContent:'center',gap:'0.5rem'})}
`

export const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  ${mobile({fontSize:'12px'})}
`
