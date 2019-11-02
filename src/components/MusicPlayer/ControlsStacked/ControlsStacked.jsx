import React, { Component } from 'react';
import styled from 'styled-components';
import play from '../../../assets/static/Play.png';
import prev from '../../../assets/static/rewind-left.png';
import next from '../../../assets/static/rewind-right.png';

const ControlsStackedWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    grid-gap: 30px;
`;
ControlsStackedWrap.defaultProps = {
  theme: {
    gridTemplateColumns: '100px 1fr',
  },
};

const MainControls = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr) ;
    width: 100px;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
`;

const TimeSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:auto 35px ;
    grid-gap: 30px;
    display: grid;
    align-items: center;
    color: white;
    display: ${(props) => props.theme.display};
`;
TimeSection.defaultProps = {
  theme: {
    display: 'block',
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

  render() {
    // console.log('offsetWidth', this.offsetWidth);
    // alert(this.offsetWidth);
    console.log('Super', this.props);
    return (
      <>
        <ControlsStackedWrap>
          <MainControls>
            <div className='prev-song'>
              <img src={prev} alt='' srcSet='' />
            </div>
            <div className='play-pause'>
              <img src={play} alt='' srcSet='' />
            </div>
            <div className='next-song'>
              <img src={next} alt='' srcSet='' />
            </div>
          </MainControls>

          <TimeSection>
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

