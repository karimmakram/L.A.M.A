import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Info =styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    justify-content:center;
    align-items: center;
    z-index:3;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 1s ease;
    cursor:pointer;
// gap: 0.5rem;`

const Container = styled.div`
    flex:1;
    margin:0.5rem;
    min-width:280px;
    height:350px;
    display:flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#f0fbfd;
    position: relative;

    &:hover ${Info}{
        opacity:1;
    }
`
const Circle =styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position: absolute;

`

const Image =styled.img`
    height:75%;
    z-index:2;
`
const Icon =styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0.5rem;
    transition: all 0.3s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.2);
    }
`
const ProductItem = ({item}) => {
  return <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
            <ShoppingCartOutlined/>
        </Icon>
        <Icon>
            <SearchOutlined/>
        </Icon>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
      </Info>
  </Container>;
};

export default ProductItem;
