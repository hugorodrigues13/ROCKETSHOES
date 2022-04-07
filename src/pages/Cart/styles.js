import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button{
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover{
      background: ${darken(0.05, '#7159c1')};
    }

  }
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
      color: #999;
      text-align: left;
      padding: 12px;
    }

    tbody td {
      padding: 12px;
      vertical-align: middle;
      border-bottom: 1px solid #eee;
    }

    img {
      height: 100px;
      display: block;
    }

    strong{
      color: #333;
      display: block;
    }

    span {
      margin-top: 5px;
      font-size: 18px;
      font-weight: bold;
    }

    div{
      display: flex;
      align-items: center;

      input{
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 4px;
        width: 60px;

      }
    }

    button{
    background: none;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 6px 8px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;

    &:hover{
      background: ${darken(0.03, '#fff')};
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span{
    color: #999;
    font-weight: bold;
  }

  strong{
    font-size: 28px;
    margin-left: 5px;
  }

`;

