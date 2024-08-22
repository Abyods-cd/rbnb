import styled from "styled-components";

export const SharePanelWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,0.3);
width: 100%;
height: 100%;
z-index: 4;

  .innerBox{
  width: 568px;
  height: 406px;
  background-color: #fff;
  border-radius: 4%;
  padding: 15px 25px;
  margin:120px auto;

  .close-icon{
    height: 23px;
    width: 23px;
    border-radius: 100%;
    padding: 2px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover{
      background-color: var(--shadow-color);
    }
  }

  .panel-title{
    font-size: 26px;
    padding: 10px 0;
  }

  .item-info{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    .item-img{
      width: 70px;
      height: 55px;
      border-radius: 10px;
    }
  }

  .icons{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    align-items: center;

    .icon-item{
      width: 250px;
      height: 48px;
      border: 1px solid var(--border-color);
      border-radius: 9px;
      padding-left: 15px;
      display: flex;
      gap: 10px;
      justify-content: start;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.2s ease;
      &:hover{
        background-color: var(--shadow-color);
      }
    }
  }

   

}
`