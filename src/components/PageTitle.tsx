import React from 'react';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdOutlineSettingsInputComposite,
} from 'react-icons/md';
import styled from 'styled-components';
import { useMarketContext } from '../context/MarketContext';

const PageTitle = () => {
  const {
    productFilter,
    boardFilter,
    setBoardFilter,
    setProductFilter,
    filterItems,
  } = useMarketContext();

  const toggleBoardFilter = (data: string) => {
    if (boardFilter.includes(data)) {
      setBoardFilter(boardFilter.filter((item: string) => item !== data));
    } else {
      setBoardFilter([...boardFilter, data]);
    }
  };
  const toggleProductFilter = (data: string) => {
    if (productFilter.includes(data)) {
      setProductFilter(productFilter.filter((item: string) => item !== data));
    } else {
      setProductFilter([...productFilter, data]);
    }
  };

  const applyFilter = () => {
    filterItems();
  };
  const resetFilter = () => {
    setBoardFilter([]);
    setProductFilter([]);
  };

  return (
    <Wrapper>
      <nav>
        <h5>Home</h5>
        <MdKeyboardArrowRight className="icon" />{' '}
        <h5 style={{ color: '#D83430' }}>Market</h5>
      </nav>
      <main>
        <div className="page-title">
          <h4>Market</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            illum!
          </p>
        </div>
        <div className="btn-container">
          <div className="page-settings-container">
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown"
              name="dropdown"
            />
            <label htmlFor="dropdown">
              <h5> Page Settings</h5>
              <MdOutlineSettingsInputComposite className="icon" />
            </label>
            <div className="page-setting-dropdown">
              <h4>Page Settings</h4>
              <div className="board-settings">
                <h5>Board</h5>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="x-traded"
                      name="x-traded"
                      value="x-traded"
                      onClick={(e) => toggleBoardFilter(e.target.value)}
                    />
                    <label htmlFor="x-traded">X-Traded</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="otc"
                      name="otc"
                      value="otc"
                      onChange={(e) => toggleBoardFilter(e.target.value)}
                    />
                    <label htmlFor="otc">OTC</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="fi"
                      name="fi"
                      value="fi"
                      onChange={(e) => toggleBoardFilter(e.target.value)}
                    />
                    <label htmlFor="fi">FI</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="derivatives"
                      name="derivatives"
                      value="derivatives"
                      onChange={(e) => toggleBoardFilter(e.target.value)}
                    />
                    <label htmlFor="derivatives">Derivatives</label>
                  </li>
                </ul>
              </div>
              <div className="product-settings">
                <h5>Product</h5>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="all"
                      name="all"
                      value="all"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="all">All</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="sbbs"
                      name="sbbs"
                      value="sbbs"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="sbbs">SBBS</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="sprl"
                      name="sprl"
                      value="sprl"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="sprl">SPRL</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="sngn"
                      name="sngn"
                      value="sngn"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="sngn">SGNG</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="scoc"
                      name="scoc"
                      value="scoc"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="scoc">SCOC</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="smaz"
                      name="smaz"
                      value="smaz"
                      onChange={(e) => toggleProductFilter(e.target.value)}
                    />
                    <label htmlFor="smaz">SMAZ</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="sngn-two"
                      name="sngn"
                      value="sngn"
                    />
                    <label htmlFor="sngn-two">SGNG</label>
                  </li>
                  <li>
                    <input type="checkbox" id="ssgm" name="ssgm" value="ssgm" />
                    <label htmlFor="ssgm">SSGM</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fetc" name="fetc" value="fetc" />
                    <label htmlFor="fetc">FETC</label>
                  </li>
                </ul>
              </div>
              <label className="sticky-label">
                <input
                  className="stick"
                  type="checkbox"
                  name="sticky-header"
                  value="sticky-header"
                />
                Sticky Header
              </label>
              <div className="line"></div>
              <div className="ps-btns">
                <button
                  type="button"
                  className="reset-btn"
                  onClick={resetFilter}>
                  Reset
                </button>
                <button
                  type="button"
                  className="apply-btn"
                  onClick={applyFilter}>
                  Apply
                </button>
              </div>
            </div>
          </div>
          <button className="demo-btn">
            <h5>Demo</h5> <MdKeyboardArrowDown className="icon" />
          </button>
        </div>
      </main>
    </Wrapper>
  );
};

export default PageTitle;

const Wrapper = styled.main`
  width: 100%;
  .icon {
    font-size: 1.2rem;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
  }
  main {
    margin-block: 0.7rem;
    display: flex;
    justify-content: space-between;
    .page-title {
      p {
        font-size: small;
      }
    }
    .btn-container {
      display: flex;
      height: fit-content;
      .page-settings-container {
        position: relative;
        max-width: 100%;
        text-align: center;
        z-index: 200;
        [type='checkbox']:checked,
        [type='checkbox']:not(:checked) {
          position: absolute;
          left: -9999px;
          opacity: 0;
          pointer-events: none;
        }
        .dropdown:checked + label,
        .dropdown:not(:checked) + label {
          position: relative;
          height: fit-content;
          color: black;
          padding: 0.375rem 0.75rem;
          transition: all 200ms linear;
          display: flex;
          align-items: center;
          cursor: pointer;
          border-radius: var(--radius);
          border: 1px solid #d2d0d0;
          .icon {
            margin-left: 1rem;
          }
          justify-content: center;
          text-align: center;
          background-color: white;
        }
        .page-setting-dropdown {
          position: absolute;
          padding: 1rem;
          background-color: white;
          top: 45px;
          left: -150px;
          width: 200%;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: start;
          box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.4);
          z-index: 2;
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px);
          transition: all 200ms linear;
          .board-settings,
          .product-settings {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-block: 0.2rem;
            ul {
              display: flex;
              flex-wrap: wrap;
              padding: 0;
              margin: 0;
              clear: both;
            }

            li {
              list-style-type: none;
              list-style-position: outside;
              padding: 10px;
              float: left;
            }

            input[type='checkbox']:not(:checked),
            input[type='checkbox']:checked {
              position: absolute;
              left: -9999%;
            }

            input[type='checkbox'] + label {
              display: inline-block;
              padding-inline: 0.8rem;
              padding-block: 0.1rem;
              cursor: pointer;
              border: 1px solid #d2d0d0;
              border-radius: 4px;
              color: black;
              background-color: transparent;
            }

            input[type='checkbox']:checked + label {
              border: 1px solid white;
              color: white;
              background-color: #d83430;
            }
          }
          .sticky-label {
            display: flex;
            justify-items: center;
            cursor: pointer;
            .stick {
              margin-right: 0.5rem;
              opacity: 1;
              position: static;
              left: 0;
              pointer-events: visible;
              accent-color: #d83430;
            }
          }
          .sticky-label:hover {
            font-weight: 700;
          }
          .line {
            border: 0.1px solid #d2d0d0;
            width: 100%;
            margin-block: 1rem;
          }
          .ps-btns {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            button {
              padding-inline: 0.8rem;
              padding-block: 0.3rem;
              outline: none;
              color: #9b9b9b;
              background-color: transparent;
              border-radius: var(--radius);
              border: 1px solid #d2d0d0;
              cursor: pointer;
            }
            button.apply-btn {
              background-color: red;
              margin-left: 1rem;
              color: white;
              border: none;
            }
            button.apply-btn:hover {
              background-color: purple;
            }
            button.reset-btn:hover {
              border: 1px solid #a5a5a5;
              color: #646464;
            }
          }
        }
        .dropdown:checked ~ .page-setting-dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .page-setting-dropdown:before {
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
          content: '';
          display: block;
          z-index: 1;
        }
        .page-setting-dropdown:after {
          position: absolute;
          top: -7px;
          right: 30px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid white;
          content: '';
          display: block;
          z-index: 2;
          transition: all 200ms linear;
        }
      }
      .demo-btn {
        background: white;
        color: black;
        padding: 0.375rem 0.75rem;
        display: flex;
        align-items: center;
        cursor: auto;
        border-radius: var(--radius);
        border: 1px solid #d2d0d0;
        margin-left: 1rem;
        .icon {
          margin-left: 1rem;
        }
      }
    }
  }

  @media (min-width: 1025px) {
    main {
      .page-title {
        h4 {
          font-size: x-large;
        }
        p {
          font-size: large;
        }
      }
      .btn-container {
        .page-settings-container {
          .dropdown:checked + label,
          .dropdown:not(:checked) + label {
            padding: 0.6rem 0.75rem;
          }
          .page-setting-dropdown {
            .board-settings,
            .product-settings {
              margin-block: 0.5rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1441px) {
    main {
      .page-title {
        h4 {
          font-size: xx-large;
        }
        p {
          font-size: x-large;
        }
      }
      .btn-container {
        .page-settings-container {
          .dropdown:checked + label,
          .dropdown:not(:checked) + label {
            padding: 1rem 2rem;
            h5,
            .icon {
              font-size: 1.8rem;
            }
          }
          .page-setting-dropdown {
            left: -200px;
            top: 62px;
            .board-settings,
            .product-settings {
              margin-block: 1.5rem;
            }
          }
        }
        button.demo-btn {
          h5,
          .icon {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;
