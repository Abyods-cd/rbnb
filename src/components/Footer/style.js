import styled from "styled-components";

export const FooterWrapper = styled.div`
background-color: var(--shadow-color);
font-size: 14px;
padding: 40px 80px 0 80px;

.top{
display: flex;
justify-content: space-between;
border-bottom: 1px solid var(--border-color);
padding-bottom: 40px;

dd{
  font-weight: 300;
  margin: 10px 0;
  &:hover{
  text-decoration: underline;
  }
}
}

.bottom{
  padding: 30px 0;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .left{
    display: flex;
    justify-content: start;
    .left-link a{
      margin-left: 10px;
        &:hover{
          text-decoration: underline;
        }
    }
  }
  
  .right{
    font-weight: 400;
    display: flex;
    justify-content: end;
    align-items: center;

    .currency{
      margin: 0 15px;
    }
    svg,
    svg path{
      font-size: 20px;
      margin-left: 13px;
    }
  }
}

`