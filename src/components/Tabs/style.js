import styled from "styled-components";

export const TabsWrapper = styled.div`
  height: 78px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
  overflow-x:scroll;
  &::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
  }
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  
  .tabItem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 37px;
    color:var(--header-unclick-color);
    cursor: pointer;
    &:hover{
      border-bottom: 2px solid var(--border-color);
      .tabName{
      color: #000;
      }
    }
    &.active{
      border-bottom: 2px solid #000;
      .tabName{
      color: #000;
      }
    }

    .tabImg{
      width: 24px;
      height: 24px;
      color:var(--header-unclick-color);
      &:hover{
      color: #fff;
      }
    }
    .tabName{
      font-size: 12px;
      color:var(--header-unclick-color);
      transition: color 0.2s ease;
      padding: 10px 0;
      white-space: nowrap;
    }
  }
`