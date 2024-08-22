import styled from 'styled-components'

export const HeaderCenterWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 14px;
border-radius: 24px;
border: 1px solid var(--border-color);
transition: box-shadow 0.2s ease;
color:var(--header-unclick-color);
cursor: pointer;
box-shadow: 0 1px 2px rgba(0,0,0,.1);

&:hover{
  box-shadow: 0 2px 4px rgba(0,0,0,.18);
  cursor: pointer;
}

.where,.week,.guest{
  text-align: center;
  padding: 0 20px;
  height: 22px;
  line-height: 22px;
}

.where,.week{
  border-right: 1px solid var(--border-color);
}

.searchIcon{
  background-color: var(--primary-color);
  border-radius: 50%;
  font-size: 35px;
  padding: 8px;
  margin-right: 6px;
}

svg,
svg path{
    color: #fff;
}


`