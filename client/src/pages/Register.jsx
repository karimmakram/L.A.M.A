import styled from 'styled-components'
const Component = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)) , black;
backgeound-size:cover;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
padding:1rem;
width:40%;
background-color: #fff;
`
const Title = styled.h1`
font-size:1.5rem;
font-weight:300;
`
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:1rem 0.5rem 0 0;
padding:0.5rem;
`
const Agreement = styled.span`
font-size:.75rem;
margin:1rem 0;
`
const Button = styled.button`
width:40%;
border:none;
padding:1rem 0.8rem;
background-color:teal;
color:white;
cursor:pointer;
`
const Register = () => {
  return (
    <Component>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>By creating an account, I consent to the processing of my personal
                     data in accordance with the <b>PRIVACY POLICY</b>  </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Component>
  )
}

export default Register