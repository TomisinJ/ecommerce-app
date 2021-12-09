import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: coral;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size; 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size; 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0174/0580/4598/products/3993658_TEAA_1_27c33f50-8a37-4330-b235-033cf0f293e4_1296x.jpg?v=1638495245" />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>30% OFF NEW ARRIVALS. DON'T MISS THIS ONE TIME ONLY SALE</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0174/0580/4598/products/3993658_TEAA_1_27c33f50-8a37-4330-b235-033cf0f293e4_1296x.jpg?v=1638495245" />
          </ImgContainer>
          <InfoContainer>
            <Title>SPRING SALE</Title>
            <Desc>30% OFF NEW ARRIVALS. DON'T MISS THIS ONE TIME ONLY SALE</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0174/0580/4598/products/3993658_TEAA_1_27c33f50-8a37-4330-b235-033cf0f293e4_1296x.jpg?v=1638495245" />
          </ImgContainer>
          <InfoContainer>
            <Title>AUTUMN SALE</Title>
            <Desc>30% OFF NEW ARRIVALS. DON'T MISS THIS ONE TIME ONLY SALE</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider