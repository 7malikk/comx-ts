import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMarketContext } from '../context/MarketContext';
import { formatNum } from '../helpers';
import { IProductView, ITrades } from '../types';

const BuyBoard = () => {
  const { products, tradesData } = useMarketContext();
  const [buyProducts, setBuyProducts] = useState<ITrades[]>([]);

  const getCommName = (code: string) => {
    const commodity = products.find(
      (product: IProductView) => product.code === code
    );
    return `${commodity?.name} (${code})`;
  };

  const getBuyProducts = () => {
    setBuyProducts(
      tradesData.filter((trade: ITrades) => trade.order_type === 'Buy')
    );
  };

  useEffect(() => {
    getBuyProducts();
  }, [tradesData]);
  return (
    <Wrapper>
      <h4>Buy Board</h4>
      <table className="boardTable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyProducts.map((buyProduct, index) => {
            return (
              <tr key={index}>
                <td>{getCommName(buyProduct.security_code)}</td>
                <td>{buyProduct.units}</td>
                <td>{formatNum(buyProduct.order_price)}</td>
                <td>
                  <p className="green">Buy</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default BuyBoard;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: buyboard;

  border-radius: 0.5rem;
  background: #ffffff;
  h4 {
    margin-block: 0.6rem;
    padding-inline: 1rem;
  }
  table.boardTable {
    border-collapse: collapse;
    width: 100%;
    th {
      border-top: 1px solid #ddd;
    }
    td,
    th {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      padding-top: 7px;
      padding-bottom: 7px;
      text-align: left;
      color: #797979;
    }
    thead tr th:last-child,
    tbody tr td:last-child {
      text-align: center;
      .green {
        color: green;
        padding-inline: 0.1rem;
        padding-block: 0.1rem;
        border-radius: 0.3rem;
        background: #d1ffccac;
        text-align: center;
      }
    }
    tbody tr td:nth-last-child(2) {
      color: green;
    }
  }
  @media (min-width: 1241px) {
    table.boardTable {
      th,
      td {
        font-size: medium;
      }
    }
  }
  @media (min-width: 1441px) {
    h4 {
      font-size: xx-large;
    }
    table.boardTable {
      th,
      td {
        font-size: x-large;
      }
    }
  }
`;
