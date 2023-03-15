import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMarketContext } from '../context/MarketContext';
import { formatNum } from '../helpers';
import { IProductView, ITrades } from '../types';
const TradeLog = () => {
  const {
    tradesData,
    products,
  } = useMarketContext();

  const getCommName = (code: string) => {
    const commodity = products.find(
      (product: IProductView) => product.code === code
    );
    return `${commodity?.name} (${code})`;
  };

  return (
    <Wrapper>
      <h4>Trade Log</h4>
      <table className="boardTable">
        <thead>
          <tr>
            <th>Security</th>
            <th>Board</th>
            <th>Order Type</th>
            <th>Matched Price</th>
            <th>Qauntity</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.lenght > 0
            ? filteredItems.map((trade: ITrades, index) => {
                return (
                  <tr key={index}>
                    <td>{getCommName(trade.security_code)}</td>
                    <td>{trade.board_type}</td>
                    <td>{trade.order_type}</td>
                    <td>{formatNum(trade.order_price)}</td>
                    <td>{trade.units}</td>
                    <td>{new Date(trade.updated).toDateString()}</td>
                    <td>
                      {`${
                        new Date(trade.updated).getHours() % 12 || 12
                      }:${new Date(trade.updated).getMinutes()}`}
                    </td>
                  </tr>
                );
              })
            : tradesData.map((trade: ITrades, index) => {
                return (
                  <tr key={index}>
                    <td>{getCommName(trade.security_code)}</td>
                    <td>{trade.board_type}</td>
                    <td>{trade.order_type}</td>
                    <td>{formatNum(trade.order_price)}</td>
                    <td>{trade.units}</td>
                    <td>{new Date(trade.updated).toDateString()}</td>
                    <td>
                      {`${
                        new Date(trade.updated).getHours() % 12 || 12
                      }:${new Date(trade.updated).getMinutes()}`}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default TradeLog;

const Wrapper = styled.section`
  grid-area: tradelog;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 1rem; */
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
    tbody tr td:last-child {
      text-align: left;
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
