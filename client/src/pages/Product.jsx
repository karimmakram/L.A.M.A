import styled from 'styled-components'
import Navbar from '../components/Layout/Navbar'
import Announmouse from '../components/Layout/Announmouse'
import Footer from '../components/Layout/Footer'
import NewsLetter from '../components/Home/NewsLetter'
import ProductItemData from '../components/Product/ProductItemData'

const Container = styled.div``
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announmouse/>
        <ProductItemData
          image="https://i.ibb.co/S6qMxwr/jean.jpg"
          title="Denim Jumpsuit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare."
          price={20}
          colors = {['black','darkblue','red','gray']}
          size = {['s','m','l','xl']}
          amount={4}
        />
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product