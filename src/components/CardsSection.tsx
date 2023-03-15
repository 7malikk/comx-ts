import React, { useEffect } from 'react';
import styled from 'styled-components';
import { LineChart, Line } from 'recharts';
import { useMarketContext } from '../context/MarketContext';
import { formatNum } from '../helpers';

const CardsSection = () => {
  const { clientData } = useMarketContext();
  const screenSize = window.innerWidth;
  const medium = 1024;
  const large = 1440;
  const fourK = 2560;

  return (
    <Wrapper>
      <div className="cash-card card">
        <h5>Cash Balance</h5>
        <div className="card-split">
          <div className="amount">
            <h4>{formatNum(clientData.cash_cover?.cash_cover_available)}</h4>
            <div className="status">
              <div>Decline</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <LineChart
              width={
                screenSize === fourK
                  ? 500
                  : screenSize === large
                  ? 200
                  : screenSize === medium
                  ? 118
                  : 100
              }
              height={
                screenSize === fourK
                  ? 90
                  : screenSize === large
                  ? 70
                  : screenSize === medium
                  ? 60
                  : 50
              }
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#ff3b3b"
                fill="#ff3b3b"
              />
            </LineChart>
          </div>
        </div>
      </div>
      <div className="security-card card">
        <h5>Securities Value</h5>
        <div className="card-split">
          <div className="amount">
            <h4>{formatNum(clientData.wallets?.available_balance)}</h4>
            <div className="status">
              <div className="increment">Increment</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <LineChart
              width={
                screenSize === fourK
                  ? 500
                  : screenSize === large
                  ? 200
                  : screenSize === medium
                  ? 118
                  : 100
              }
              height={
                screenSize === fourK
                  ? 90
                  : screenSize === large
                  ? 70
                  : screenSize === medium
                  ? 60
                  : 50
              }
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#3bff4b"
                fill="#3bff4b"
              />
            </LineChart>
          </div>
        </div>
      </div>
      <div className="loan-card card">
        <h5>Loan Balance</h5>
        <div className="card-split">
          <div className="amount">
            <h4>
              {formatNum(clientData.wallets?.loan_repayment_balance) === NaN
                ? 'Loading...'
                : formatNum(clientData.wallets?.loan_repayment_balance)}
            </h4>
            <div className="status">
              <div>Decline</div>
              <p>Monitored Monthly</p>
            </div>
          </div>
          <div className="chart">
            <LineChart
              width={
                screenSize === fourK
                  ? 500
                  : screenSize === large
                  ? 200
                  : screenSize === medium
                  ? 150
                  : 100
              }
              height={
                screenSize === fourK
                  ? 90
                  : screenSize === large
                  ? 70
                  : screenSize === medium
                  ? 60
                  : 50
              }
              data={data}
              margin={{
                top: 6,
                right: 0,
                left: 0,
                bottom: 5,
              }}>
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#ff3b3b"
                fill="#ff3b3b"
              />
            </LineChart>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardsSection;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  row-gap: 0.5rem;
  column-gap: 1rem;
  .card {
    display: flex;
    flex-direction: column;
    padding-inline: 0.6rem;
    padding-block: 0.3rem;
    border-radius: 0.5rem;
    background: #ffffff;
    .card-split {
      display: flex;
      justify-content: space-between;
      margin-block: 0.2rem;
      .amount {
        h4 {
          font-size: large;
        }
        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            background: #ffccccac;
            color: red;
            padding-inline: 0.6rem;
            /* padding-block: 0.2rem; */
            margin-right: 0.5rem;
            border-radius: 0.3rem;
          }
          div.increment {
            background: #d1ffccac;
            color: green;
          }
        }
      }
    }
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 2fr);
    gap: 1rem;
    .card {
      padding-block: 0.8rem;
      .card-split {
        .amount {
          h4 {
            font-size: large;
          }
          .status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            div {
              background: #ffccccac;
              color: red;
              padding-inline: 0.6rem;
              /* padding-block: 0.2rem; */
              margin-right: 0.5rem;
              border-radius: 0.3rem;
            }
            div.increment {
              background: #d1ffccac;
              color: green;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1441px) {
    .card {
      padding-inline: 0.9rem;
      padding-block: 1.5rem;
      h5 {
        font-size: x-large;
      }
      .card-split {
        margin-block: 1rem;
        .amount {
          h4 {
            font-size: xx-large;
          }
          .status {
            margin-top: 1rem;
            font-size: large;
            div {
              padding-inline: 0.6rem;
              margin-right: 0.5rem;
            }
          }
        }
      }
    }
  }
`;

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

  {
    name: 'Page H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page I',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page H',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
