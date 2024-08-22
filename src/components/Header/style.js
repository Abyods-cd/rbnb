import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height: 80px;
  border-bottom: 1px solid #eee;
  padding: 0 80px;

  .center{
    width: 400px;
    height: 48px;
  }

  .left,
  .right{
    flex:1
  }

  .left,
  .center,
  .right{
    text-align: center;
  }
`