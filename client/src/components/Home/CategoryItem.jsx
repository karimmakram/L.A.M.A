import styled from "styled-components";
const Container = styled.div`
    flex:1;
    margin:0.5rem;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
const Title = styled.h2`
    color:white;
    margin-bottom:1.5rem;
`
const Button = styled.button`
    color:gray;
    border:none;
    padding:1rem;
    font-weight:bold;
    background-color:white;
    cursor:pointer;
`
const CategoryItem = ({item}) => {
  return <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
  </Container>;
};

export default CategoryItem;
