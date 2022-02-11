import styled from 'styled-components'
import Navbar from '../components/Layout/Navbar'
import Announmouse from '../components/Layout/Announmouse'
import Footer from '../components/Layout/Footer'
import NewsLetter from '../components/Home/NewsLetter'
import Products from '../components/Home/Products'



const Container = styled.div``
const Title = styled.h1`
margin:1rem;
`
const FileterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:1rem;
`
const FiltreText=styled.span`
font-size:1.2rem;
font-weight:600;
margin-right:1rem;
`
const Select = styled.select`
padding:0.5rem;
margin-right:1rem;
`
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Announmouse/>
        <Navbar/>
        <Title>Dresses</Title>
        <FileterContainer>
            <Filter>
                <FiltreText>Filter Product</FiltreText>
                <Select>
                    <Option selected disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option selected disabled>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>X</Option>
                    <Option>XL</Option>
                    <Option>2X</Option>
                </Select>
            </Filter>
            <Filter>
                <FiltreText>Sort Product</FiltreText>
                <Select>
                    <Option selected disabled>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>    
            </Filter>
        </FileterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default ProductList