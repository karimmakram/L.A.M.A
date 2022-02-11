import styled from "styled-components";

const Contianer = styled.div`
display: flex;
background-color: teal;
color: white;
justify-content: center;
align-items: center;
height: 30px;
font-size: 14px;
font-weight: 500;
`

const Announmouse = () => {
  return <Contianer> Free Shipping on Orders Over 20k products </Contianer>;
};

export default Announmouse;
