import styled from 'styled-components'
import { mobile } from '../responsive'
const Component = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)) ,
url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
center;
background-size:cover;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
padding:1rem;
width:25%;
background-color: #fff;
${mobile({width: '75%'})}
`
const Title = styled.h1`
font-size:1.5rem;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-direction: column;

`
const Input = styled.input`
flex:1;
min-width:40%;
margin:0.5rem 0;
padding:0.5rem;
`
const Button = styled.button`
width:40%;
border:none;
padding:1rem 0.8rem;
background-color:teal;
color:white;
cursor:pointer;
margin:1rem 0;
${mobile({width: '100%'})}
`
const Link = styled.a`
margin:0.25rem 0;
font-size:0.75rem;
text-decoration: underline;
cursor:pointer;
`
const Login = () => {
  return (
    <Component>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input placeholder='email or username'/>
                <Input placeholder='password'/>
                <Button>Login</Button>
                <Link>DO NOT YOU REMEMPER THE PASSWORD?</Link>
                <Link >CREATE A NEW ACCONT</Link>
            </Form>
        </Wrapper>
    </Component>
  )
}

export default Login