import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShoppingIcon = styled.img`
  height: 40px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  right: -5px;
  top: 15px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
`;
