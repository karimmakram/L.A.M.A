import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../../responsive'
const Wrapper=styled.div`
display:flex;
padding:3rem;
${mobile({padding: ' 0.5rem',flexDirection:'column'})}
`
const ImageContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:100%;
height: 75vh;
object-fit: cover;
${mobile({height: '45vh'})}

`
const InfoContainer=styled.div`
flex:1;
padding:0 2rem;
${mobile({padding: ' 0.5rem'})}

`
const Title=styled.h1`
font-weight:300;
`
const Desc=styled.p`
margin:1rem 0;
${mobile({margin: ' 0.5rem 0'})}
`
const Price=styled.span`
font-size:2rem;
font-weight:100;
`

const FilterContainer =styled.div`
width:50%;
margin:1.5rem 0 ;
display:flex;
justify-content:space-between;
${mobile({width: ' 100%'})}
`
const Filter =styled.div`
display: flex;
align-items: center;
`
const FilterColor =styled.div`
width:1.25rem;
height:1.25rem;
border-radius: 50%;
background-color:${props=>props.color};
margin-left:0.5rem;
cursor: pointer;
${mobile({width: ' 1.5rem',height:'1.5rem'})}
`
const FilterTitle =  styled.span`
font-size:1.2rem;
font-weight:300;
`
const FilterSize =  styled.select`
margin-left:0.5rem;
padding:0.25rem;
${mobile({padding: ' 0.75rem'})}
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width:50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width: ' 100%'})}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight:700;
`

const Amount = styled.span`
width:2rem;
height:2rem;
border-radius:0.5rem;
display: flex;
justify-content: center;
align-items: center;
border:1px solid teal;
margin:0 0.25rem;
font-size:1.5rem;
`

const Button = styled.button`
padding:0.8rem;
border:2px solid teal;
cursor: pointer;
background-color:#fff;
transition: all 1s ease;
&:hover{
border:2px solid #ddd;
cursor: pointer;
background-color:teal;
color:#fff;
}
`

const ProductItemData = ({image,title,description,price,colors,size,amount}) => {
  return (
        <Wrapper>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
                <Price>$ {price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {colors.map((color,index)=><FilterColor key={index} color={color}/>)}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            {size.map((s,index)=><FilterSizeOption key={index}>{s}</FilterSizeOption>)}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                    </AmountContainer>
                    <Button>ADD To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
  )
}

export default ProductItemData