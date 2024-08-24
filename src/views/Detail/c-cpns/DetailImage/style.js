
import styled from "styled-components";

export const DetailImageWrapper = styled.div`
  .title{
    font-size: 23px;
    font-weight: 500;
    padding: 18px 0;
  }
  .img-box{
    width: 100%;
    height: 410px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    overflow: hidden;
    .primary-img{
      width: 50% !important;
      height: 100%;
    }
    .side-imgs{
      width: 50% !important;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      /* gap:10px; */
      .side-img{
        width: calc(50% - 10px);
        height: calc(50% - 10px);
        margin-left: 15px;
      }
    }

  }

`