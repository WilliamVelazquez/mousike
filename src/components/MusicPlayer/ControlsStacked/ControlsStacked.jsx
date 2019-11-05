import React, { Component } from 'react';
import styled from 'styled-components';
import MainControls from './MainControls';

const ControlsStackedWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    grid-gap: 10px;
`;
ControlsStackedWrap.defaultProps = {
  theme: {
    gridTemplateColumns: '100px',
  },
};

const TimeSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:auto 35px ;
    grid-gap: 10px;
    display: grid;
    align-items: center;
    color: white;
    display: ${(props) => props.theme.display};
`;
TimeSection.defaultProps = {
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

class ControlsStacked extends Component {

  componentDidMount() {
    const controls = document.getElementById('controls');
    const timeSection = document.getElementById('timeSection');
    if (controls.offsetWidth > 300) {
      // TimeSection.defaultProps = {
      //   theme: {
      //     display: 'block',
      //   },
      // };
      // ControlsStackedWrap.defaultProps = {
      //   theme: {
      //     gridTemplateColumns: '100px 1fr',
      //   },
      // };

      // const input = document.querySelector('.timeSlider');
      // function handleUpdateSliderInput(input) {
      //   input.style.setProperty('--value', input.value);
      // }
      // handleUpdateSliderInput(input);

      // input.addEventListener('input', () => {
      //   handleUpdateSliderInput(input);
      // }, false);

      timeSection.style.display = 'block';
      controls.style.gridTemplateColumns = '100px 1fr';
    } else {
      timeSection.style.display = 'none';
      controls.style.gridTemplateColumns = '100px';
    }
  }

  render() {
    console.log('Super', this.props);
    return (
      <>
        <ControlsStackedWrap id='controls'>
          <MainControls />
          <TimeSection id='timeSection'>
            <Slider data-direction='horizontal'>
              <input type='range' min='0' max='100' step='1' value='50' className='timeSlider' />
            </Slider>
            <span className='remaining-time'>0:00</span>
          </TimeSection>
        </ControlsStackedWrap>

      </>
    );
  }

};

export default ControlsStacked;

