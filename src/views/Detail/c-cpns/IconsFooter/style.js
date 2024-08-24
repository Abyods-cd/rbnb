import styled from "styled-components";

export const IconsFooterWrapper = styled.div`
  .icon-img-box{
    margin-top: 20px;
    padding: 20px 0 40px 0;
    width: 100%;
    text-align: center;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    .icon-img{
      width: 52%;
    }
    .icons{
      .title{
        font-size: 70px;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }
  .icon-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 35px 0;
    border-bottom: 1px solid var(--border-color);

    .l-info,
    .m-info,
    .r-info{
      flex: 1;
    }

    .l-icon,
    .m-icon,
    .r-icon{
      font-size: 35px;
    }

    .l-text-title,
    .m-text-title,
    .r-text-title{
      margin: 10px 0 5px 0;
    }

    .l-text-content,
    .m-text-content,
    .r-text-content{
      font-weight: 300;
      font-size: 13px;
      color: var(--header-unclick-color);
    }

    }
`

