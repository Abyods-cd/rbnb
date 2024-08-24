
import styled from "styled-components";

export const DetailImageWrapper = styled.div`
    .detail-header{
      padding: 18px 0;
      display: flex;
      justify-content: space-between;
      .title{
      font-size: 23px;
      font-weight: 500;
      }
      .icons{
        display: flex;
        justify-content: end;
        gap: 0 20px;
        .share,
        .favorite{
          display: flex;
          align-items: center;
          gap: 0 5px;
          cursor: pointer;
          .share-icon,
          .favorite-icon{
            font-size: 13px;
          }
          span{
            text-decoration: underline;
            font-size: 13px;
          }
          &.saved{
            svg,
            svg path
            {
              color:red;
            }
          }
        }

      }
    }
    .img-box{
      width: 100%;
      height: 465px;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      overflow: hidden;

    .only-box{
      width: 100%;
      cursor: pointer;
      position: relative;
      &:hover{
        // when hover, add a cloak
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.09);
        }
      }
    }

    .primary{
      width: 50%;
      cursor: pointer;
      position: relative;
      &:hover{
        // when hover, add a cloak
        &::before{
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.09);
        }
      }
    }
    .primary-img{
      width: 100% ;
      height: 100%;
    }
    .primary-img.only{
      height: 100% !important;
      width: 100%;
    }
    .side-imgs{
      width: 50% !important;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      .side-img-box{
        width: calc(50% - 5px);
        height: calc(50% - 5px);
        margin-left: 10px;
        cursor: pointer;
        position: relative;
        &:hover{
        // when hover, add a cloak
          &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.09);
          }
      }
      }

      .side-img{
        width: 100%;
        height: 100%;
      }
      }
    }


`