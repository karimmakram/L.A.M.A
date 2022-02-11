import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
display:flex;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding:1rem;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:1rem 0 ;
`
const SocialContianer=styled.div`
    display:flex;
`
const SocialIcon=styled.div`
    height:2.5rem;
    width:2.5rem;
    border-radius: 50%;
    color:#fff;
    cursor:pointer;
    background-color:#${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:1rem
`


const Center = styled.div`
flex:1;
padding:1rem;

`
const Title=styled.h3`
margin-bottom:1.5rem;
`
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:0.5rem;
`




const Right = styled.div`
flex:1;
padding:1rem;
`
const ContactItem=styled.div`
display:flex;
align-item:center;
margin-bottom:0.8rem;
`
const Payment = styled.img`
width:50%;
`
const Footer = () => {
  return (<Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContianer>
            <SocialIcon color="3b5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="e4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55acee">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="3b5999">
                <LinkedIn/>
            </SocialIcon>
        </SocialContianer>    
      </Left> 
      <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
      </Center>

      <Right>
          <Title>Contact</Title>
          <ContactItem>
          <Room style={{marginRight:"0.8rem"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"0.8rem"}}/> +20 11 2929 8635
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"0.8rem"}} /> KarimMakram11@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container> )
}

export default Footer