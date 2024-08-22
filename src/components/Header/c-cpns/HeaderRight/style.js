import styled from 'styled-components'

export const HeaderRightWrapper = styled.div`
display: flex;
justify-content: end;
align-items: center;
font-size: 14px;
font-weight: 500;
height: 42px;

.text{
  height: 42px;
  line-height: 42px;
  padding: 0 10px;
}

.languageIcon{
  margin: 10px;
}

.info{
  position: relative;
  width: 86px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
  border: 1px solid var(--border-color);
  border-radius: 24px;
  transition: box-shadow 0.2s ease;
  svg,
  svg path{
    font-size: 30px;
    color: #6A6A6A;
  }

  .panel{
    position: absolute;
    top: 55px;
    right: 0;
    width: 240px;
    box-shadow: 0 2px 4px rgba(0,0,0,.18);
    border-radius: 20px;
    text-align: left;
    background-color: #fff;
    font-size: 14px;

    .top{
      border-bottom: 1px solid var(--border-color);
    }

    .top,.bottom{
      padding: 10px 0;
      .sign-up{
        color: #2c2c2c;
        font-weight: 550;
      }
      .item{
        padding: 10px;
        &:hover{
          background-color: var(--shadow-color);
        }
      }
    }
  }
}

.text:hover,.languageIcon:hover{
  cursor: pointer;
  background-color: var(--shadow-color); 
  border-radius: 21px;
}

.info:hover{
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
  cursor: pointer;
}

`