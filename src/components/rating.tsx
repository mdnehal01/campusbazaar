import React from 'react';
import styled from 'styled-components';

interface RatingRadioProps {
  rate?: number;
}

const ConditionStar: React.FC<RatingRadioProps> = ({ rate }) => {
  return (
    <StyledWrapper className='flex justify-start -ml-1'>
      <div className="rating">
        {[5, 4, 3, 2, 1].map((val) => (
          <React.Fragment key={val}>
            <input
              type="radio"
              id={`star${val}`}
              name="rate"
              value={val}
              checked={rate === val}
              disabled={rate !== undefined}
              readOnly
            />
            <label htmlFor={`star${val}`} title={
              ['Bad', 'Okay', 'Good', 'Great!', 'Excellent!'][val - 1]
            }>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 
                51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 
                113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 
                128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 
                329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 
                150.3 316.9 18z" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating > label {
    margin-right: 4px;
  }

  .rating > input {
    display: none;
  }

  .rating > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
  }

  .rating > label > svg {
    fill: #666;
    transition: fill 0.3s ease;
  }

  .rating > input:checked ~ label > svg {
    fill: #ffa723;
  }

  .rating > input#star1:checked ~ label > svg {
    fill: #ef4444;
  }

  .rating > input#star2:checked ~ label > svg {
    fill: #e06c2b;
  }

  .rating > input#star3:checked ~ label > svg {
    fill: #eab308;
  }

  .rating > input#star4:checked ~ label > svg {
    fill: #19c37d;
  }

  .rating > input#star5:checked ~ label > svg {
    fill: #ab68ff;
  }
`;

export default ConditionStar;