import styled from "styled-components";

export const DetailContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .l-content{
    flex: 2;
    margin-right: 130px;
    .host{
      padding: 15px 0;
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      .host-avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        .host-img{
          width: 100%;
        }
      }
      .host-info {
        margin-left: 15px;
        .title{
          font-size: 15px;
          margin-bottom: 3px;
        }
        .profession{
          font-size: 14px;
          color: var(--header-unclick-color);
        }
      }
    }
    .detail-info{
      font-size: 14px;
      padding: 30px 0;
      border-bottom: 1px solid var(--border-color);
      span{
        line-height: 21px;
      }
      .html-title{
        font-size: 16px;
        font-weight: 550;
      }
    }
  }
  .r-content{
    flex: 1;
    .request-box{
      margin: 20px 0 0 -50px;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid var(--border-color);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,.18);
      transition: all .2s ease;
      &:hover{
        scale:1.02;
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
      }

      .request-text{
        font-size: 20px;
        font-weight: 560;
      }

      .request-btn-box{
        margin-top: 17px;
        .request-btn{
          color: #fff;
          background-color: var(--btn-color);
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          cursor: pointer;
        }
      }
  }
}
`