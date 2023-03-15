import React from 'react';
import styled from 'styled-components';
import BuyBoard from './BuyBoard';
import SellBoard from './SellBoard';
import TradeLog from './TradeLog';

import { useMarketContext } from '../context/MarketContext';

const Boards = () => {
  const { tradesData } = useMarketContext();
  if (tradesData.length === 0) {
    return <div className="loader"> </div>;
  }
  return (
    <Wrapper>
      <nav>
        <ul>
          <li className="first li">Product View</li>
          <li className="active">Order Book</li>
          <li className="li">Price History</li>
          <li className="li">
            Open Orders
            <div className="badge">10</div>
          </li>
          <li className="li">
            Closed Trades
            <div className="badge">20</div>
          </li>
          <li className="li">
            Canceled Trades
            <div className="badge">20</div>
          </li>
        </ul>
      </nav>
      <div className="boards">
        <BuyBoard />
        <SellBoard />
        <TradeLog />
      </div>
    </Wrapper>
  );
};

export default Boards;

const Wrapper = styled.section`
  margin-top: 1rem;
  width: 100%;

  nav {
    ul {
      display: flex;
      justify-content: start;
      border-bottom: 1px solid #e0e0e0;
      font-size: small;
      li {
        transition: all 0.9s ease-in-out;
        margin-left: 1rem;
        color: #797979;
        cursor: default;
        display: flex;
        div.badge {
          transition: all 0.9s ease-in-out;
          background-color: #d6d6d6;
          height: fit-content;
          padding-inline: 7px;
          border-radius: 45%;
          margin-left: 1rem;
          text-align: center;
          color: black;
          font-size: small;
        }
      }
      li.first {
        margin-left: 0;
      }
      li.active {
        border-bottom: 1px solid #ff3b3b;
        padding-bottom: 1rem;
        color: #ff3b3b;
        font-weight: 700;
      }
      li.li:hover {
        border-bottom: 1px solid black;
        padding-bottom: 1rem;
        color: black;
        div.badge {
          background-color: black;
          color: white;
        }
      }
    }
  }
  .boards {
    max-height: calc(100vh - (50vh + 10rem));
    overflow-y: scroll;
    padding-block: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
      'buyboard buyboard'
      'sellboard sellboard'
      'tradelog tradelog';
    gap: 2rem;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px;
    box-sizing: content-box;
  }
  @media (min-width: 769px) {
    .boards {
      max-height: calc(100vh - (50vh + 5rem));
      grid-template-areas:
        'buyboard sellboard'
        'tradelog tradelog';
    }
  }
  @media (min-width: 1025px) {
    nav {
      ul {
        font-size: medium;
        border-bottom: 2px solid #e0e0e0;
        li.active {
          border-bottom: 2px solid #ff3b3b;
        }
        li.li:hover {
          border-bottom: 2px solid black;
        }
      }
    }
    .boards {
      max-height: calc(100vh - (50vh + 1.1rem));
    }
  }
  @media (min-width: 1441px) {
    nav {
      ul {
        font-size: xx-large;
        li.li {
          div.badge {
            font-size: x-large;
          }
        }
      }
    }
    .boards {
      max-height: calc(100vh - (50vh + -8.9rem));
    }
  }
`;
