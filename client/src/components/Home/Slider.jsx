import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItem } from '../../data';

const Continer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position: relative;
    overflow:hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom:0 ;
left:${props=>props.direction === 'left'&& "10px"};
right:${props=>props.direction === 'right'&& "10px"};
margin: auto;
cursor:pointer;
opacity:0.7;
z-index:2;
`;

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform: translateX(${props=>{
        console.log(props.slideIndex*-100)
        return props.slideIndex*-100}}vw);
    transition: all 1s ease;
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-item:center;
    background-color:#${props=>props.bg}
`
const ImageContiner= styled.div`
    height:100%
    flex:1;
`
const ImageInfo= styled.div`
    flex:1;
    padding:3rem;
    text-align:center;
`
const Image = styled.img`
margin:1rem;
height:80%
`
const Title = styled.h1`
    font-size:70px;
`
const Description = styled.p`
    margin:0 2rem;
    font-size:20px;
    font-weight:500;
    latter-space:3px;
`
const Button = styled.button`
    padding:0.5rem;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`



const Slider = () => {

    const [slideIndex,setSlideIndex]= useState(0)
    const handelSlider =(direction)=>{
        if(direction ==="right"){
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }else{
            setSlideIndex(slideIndex>0?slideIndex-1:2)        
            }
            
        console.log(slideIndex);

    }
  return <Continer>
            <Arrow direction='left' onClick={()=>handelSlider('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItem.map(item=>(
                        <Slide key={item.id} bg={item.bg}>
                        <ImageContiner>
                        <Image src={item.img}/>
                        </ImageContiner>
                        <ImageInfo>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOW NOW</Button>
                        </ImageInfo>
    
                    </Slide>
                    ))
                }

            </Wrapper>
            <Arrow direction='right' onClick={()=>handelSlider('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Continer>;
};

export default Slider;
