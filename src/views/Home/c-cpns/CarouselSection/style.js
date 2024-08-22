import styled from "styled-components";

export const CarouselSectionWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: start;
align-items: center;
width: 100%;


.item{
height: 380px;
width: 24%;
border-radius: 8%;
cursor: pointer;
position: relative;

&:hover{
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
}

  .hide-dots .slick-dots li button{
    display: none;
  }


  .share-icon{
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 4px;
    z-index: 3;
    background-color: rgba(255,255,255,.7);
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
      background-color:#fff;
    }
    
  }


.ant-carousel{
  width: 100%;


  .slick-list{
  border-radius: 6%;
  }

  .slick-dots li button{
    width: 5px;
    height: 5px;
    border-radius: 100%;
    
  }
  .slick-dots li{
    width: 1px;
  }
  li.slick-active{
    width: 1px;
  }
}

.text{
  text-align: left;
  font-size: 15px;
  margin-top: 12px;
  padding: 7px;
  .title,
  .host,
  .info{
    margin-bottom: 5px;
  }
  .host{
    color:var(--header-unclick-color);
    font-weight: 300;
  }
}
}
`


export const CarouselItem = styled.div`
  width: 100%;
  height:270px;
  color: #fff;
  line-height: 200px;
  text-align: center;
  background-image: ${props => props.$imgurl ? `url(${props.$imgurl})` : 'none'};
  background-size: cover;
  background-position: center;
`;
