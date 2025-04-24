import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaBoxOpen, FaMoneyBill } from 'react-icons/fa';
import styled from 'styled-components';

interface RadioBtnProps{
    isCod?:boolean;
}

const Radio:React.FC<RadioBtnProps> = ({
    isCod
}) => {
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label>
          <input defaultChecked className="radio-input" type="radio" name="engine" />
          <span className="radio-tile">
            <span className="radio-icon">
              <FaMoneyBill/>
            </span>
            <span className="radio-label">&nbsp;&nbsp;&nbsp;Online</span>
          </span>
        </label>

        {isCod && 
                    <label>
                    <input className="radio-input" type="radio" name="engine" />
                    <span className="radio-tile">
                      <span className="radio-icon">
                        <FaBoxOpen/>
                      </span>
                      <span className="radio-label">&nbsp;&nbsp;&nbsp;COD</span>
                    </span>
                  </label>
        }
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <span className="radio-tile">
            <span className="radio-icon">
                <BiShoppingBag/>
            </span>
            <span className="radio-label">&nbsp;&nbsp;&nbsp;Pick-up</span>
          </span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .radio-inputs > * {
    margin: 6px;
  }

  .radio-input:checked + .radio-tile {
    border-color: #10B880;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.1);
    color: #4d8bff;
  }

  .radio-input:checked + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #10B880;
    border-color: #10B880;
  }

  .radio-input:checked + .radio-tile .radio-icon svg {
    fill: #10B880;
  }

  .radio-input:checked + .radio-tile .radio-label {
    color: #10B880;
  }

  .radio-input:focus + .radio-tile {
    border-color: #10B880;
    background-color:#D6EFD8;
    box-shadow:
      0 5px 10px rgba(255, 255, 255, 0.1),
      0 0 0 2px #387F39;
  }

  .radio-input:focus + .radio-tile:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-tile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    min-height: 30px;
    border-radius: 0.5rem;
    border: 2px solid #387F39;
    background-color: white;
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.05);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
  }

  .radio-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #4a5265;
    background-color: #1e2129;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
  }

  .radio-tile:hover {
    border-color: #10B880;
  }

  .radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
  }

  .radio-icon svg {
    width: 2rem;
    height: 2rem;
    fill: grey;
  }

  .radio-label {
    color: #8f8f8f;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
  }

  .radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }`;

export default Radio;
