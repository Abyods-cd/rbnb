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
    .meet-your-host-section{
      .meet-title{
        font-size: 22px;
        padding: 20px 0;
        font-weight: 550;
      }
      .meet-card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 230px;
        border-radius: 20px;
        border: 1px solid var(--border-color);
        box-shadow: 0 4px 10px rgba(0,0,0,.18);
        cursor: pointer;

        .meet-card-avatar{
          width: 30%;
          border-radius: 50%;
          overflow: hidden;
          .meet-img{
            width: 100%;
          }
        }
        .meet-card-name{
          font-size: 28px;
          font-weight: 600;
          margin-top: 15px;
        }
      }

    }
    .host-desc{
      display: flex;
      justify-content: start;
      gap: 20px;
      padding-top: 20px;
      .icons{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 18px;
        width: 24px;
      }
      .desc{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 24px;
        line-height: 24px;
        gap: 18px;
        font-size: 14px;
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