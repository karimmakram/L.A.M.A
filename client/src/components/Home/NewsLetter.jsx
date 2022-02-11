import {Send} from '@material-ui/icons'
import styled from 'styled-components'
const Container = styled.div`
height: 60vh;  
background-color: #fcf5f5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h2`
    font-size:4rem;
    margin-bottom:1rem;
`
const Description = styled.div`
    font-size:1.5rem;
    font-weight:300;
    margin-bottom:1rem;
`
const  InputContainer= styled.div`
width:50%;
height:2.5rem;
background-color:#fff;
border:1px solid lightgray;
display:flex; 
justify-content: space-between;
border-radius: 6px;

`
const  Input= styled.input`
    border:none;
    flex:8;
    padding-left:1rem;
`
const  Button= styled.button`
flex:1;
border:none;
background-color:teal;
color:#fff;
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLatter</Title>
        <Description>Get timely updated for your product</Description>
        <InputContainer>
            <Input placeholder='your Email'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter