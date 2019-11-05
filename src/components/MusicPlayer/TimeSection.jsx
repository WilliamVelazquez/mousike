import React from 'react';
import styled from 'styled-components';

const TimeSectionWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:auto 35px ;
    grid-gap: 10px;
    display: grid;
    align-items: center;
    color: white;
    display: ${(props) => props.theme.display};
`;
TimeSectionWrap.defaultProps = {
  theme: {
    display: 'none',
  },
};

const Slider = styled.div`
    width: 100%;
    display: grid;    
    align-items: center;            
`;
const TimeSlider = styled.div`
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    height:2px;
    display:block;
    background-image:linear-gradient(to right, #26FFAB calc(var(--value)*1%), #D8D8D8 0);
`;
// const input = document.querySelector('.timeSlider');
// function handleUpdateSliderInput(input) {
//   input.style.setProperty('--value', input.value);
// }
// handleUpdateSliderInput(input);

// input.addEventListener('input', () => {
//   handleUpdateSliderInput(input);
// }, false);

const TimeSection = () => {
  componentDidMount = () => {
    alert('mounting');
  };
  return (
    <TimeSectionWrap id='timeSection'>
      <Slider data-direction='horizontal'>
        <input type='range' min='0' max='100' step='1' value='50' className='timeSlider' />
      </Slider>
      <span className='remaining-time'>0:00</span>
    </TimeSectionWrap>
  );
};
export default TimeSection;
