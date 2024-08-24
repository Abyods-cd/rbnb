import styled from "styled-components";

export const HomeFooterWrapper = styled.div`
  background-color: var(--shadow-color);
  padding: 50px 80px 10px 80px;
  border-bottom: 1px solid var(--border-color);
  .home-footer-title{
    font-size: 20px;
    font-weight: 520;
  }
  .footer-tabs{
    margin-top: 20px;
    .tabs{
      display: flex;
      justify-content: start;
      gap: 20px;
      border-bottom: 1px solid var(--border-color);

      .tab{
        color: var(--header-unclick-color);
        font-size: 13px;
        cursor: pointer;
        padding: 10px 0;
        &.active{
          border-bottom: 2px solid #000;
          color: #000;
        }
      }
    }

    .panel{
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: start;
      font-size: 13px;
      cursor: pointer;

      .panel-item{
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 140px;
        height: 50px;
        margin: 0 50px 20px 0;

        .panel-item-content{
          font-weight: 300;
          white-space: wrap;
        }
      }

    }
  }
`