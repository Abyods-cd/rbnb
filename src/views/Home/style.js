import styled from "styled-components";

export const HomeWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: start;
align-items: center;
width: 100%;
padding: 0 80px;


.item{
height: 370px;
width: 24%;
border-radius: 10%;
cursor: pointer;
&:hover{
  transition: box-shadow 0.2s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
}


.ant-carousel{
  width: 100%;

  .slick-list{
  border-radius: 12%;
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
  margin-top: 10px;
  padding: 0 3px;
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
  height:280px;
  color: #fff;
  line-height: 200px;
  text-align: center;
  background-image: ${props => props.$imgurl ? `url(${props.$imgurl})` : 'none'};
  background-size: cover;
  background-position: center;
`;