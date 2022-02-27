import styled from "styled-components"
import Navbar from '../components/Layout/Navbar' 
import Announmouse from '../components/Layout/Announmouse' 
import Footer from '../components/Layout/Footer'
import { Add, Remove } from "@material-ui/icons"


const Container = styled.div`
`
const Wrapper = styled.div`
padding: 1.25rem;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
padding:1rem;
display: flex;
align-items: center;
justify-content: space-between;
`
const TopButton = styled.button`
padding: 0.5rem;
cursor: pointer;
font-weight: 600;
border:${props=>props.type==="filled"&&"none"};
background-color:${props=>props.type==="filled"?"black":"transparent"};
color:${props=>props.type==="filled"&&"white"};
`
const TopContent = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin:0 0.8rem;

`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 12.5rem;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
width: 1rem;
height: 1rem;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`
const ProductAmount = styled.div`
font-size: 1.5rem;
margin: 0.25rem;
`
const ProductPrice = styled.div`
font-size: 2rem;
font-weight: 200;
`

const Hr = styled.hr`
  border: none;
  background-color: #eee;
  height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 0.5rem;
padding: 1rem;
height: 50vh;
`
const SummaryTitle= styled.h1`
font-weight: 100;
`
const SummaryItem= styled.div`
margin: 1.5rem 0 ;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '1.5rem'};
`
const ItemText= styled.span``
const ItemPrice= styled.span``
const Button= styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: black;
  color: white;
  font-weight: 600;
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announmouse/>
        <Wrapper>
            <Title>Your BAG</Title>
            <Top>
                <TopButton>Continue Sopping</TopButton>
                <TopContent>
                    <TopText>Shopping Bag [2]</TopText>
                    <TopText>Wichlist [0] </TopText>
                </TopContent>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                    <Details>
                      <ProductName><b>Product </b>JESSIE THUNDER SHOES</ProductName>
                      <ProductId><b>ID  </b> 6464513186</ProductId>
                      <ProductColor color="black"/>
                      <ProductSize><b>Size  </b> 38</ProductSize>
                    </Details>
                   </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                        <ProductAmount>2</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                  </PriceDetail>
                </Product>

                <Hr/>
                <Product>
                  <ProductDetail>
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                    <Details>
                      <ProductName><b>Product </b>HAKURA T-SHIRT</ProductName>
                      <ProductId><b>ID  </b> 664872263</ProductId>
                      <ProductColor color="gray"/>
                      <ProductSize><b>Size  </b> M</ProductSize>
                    </Details>
                   </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                        <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ 60</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>Order Summary</SummaryTitle>
                <SummaryItem>
                  <ItemText>Subtotal</ItemText>
                  <ItemPrice>$ 110</ItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <ItemText>Estimated Shipping</ItemText>
                  <ItemPrice>$ 5</ItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <ItemText>Shipping Discount</ItemText>
                  <ItemPrice>$ -10</ItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                  <ItemText>Total</ItemText>
                  <ItemPrice>$ 105</ItemPrice>
                </SummaryItem>
                <Button>Checkout Now</Button>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart