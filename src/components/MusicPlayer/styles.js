import styled from 'styled-components';

export const AudioPlayer = styled.div`
    background-color: #262930;  
    display: grid;
    grid-template-columns:100px 1fr 100px ;
    justify-content: space-evenly;//alineado horizontal
    align-content: space-around;//alineado vertical
    justify-items: center ;//horizontal
    /* // align-items:  ; *///vertical
    grid-gap: 10px;
    padding: 20px;
`;
export const PlayingArtist = styled.div`
    font-size: 12px;
`;

export const SongPlaying = styled.div`
    width: 120px;
    color: white;
    display: grid;
    grid-auto-flow: column;   
    align-items: center;
    grid-gap: 10px;
`;
export const CoverImage = styled.img`
    max-width: 50px;
    max-height: 50px;
`;

export const PlayingInfo = styled.div`

`;

export const PlayingSong = styled.div`
    font-size: 10px;
`;

export const ControlsStacked = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
    grid-gap: 30px;
`;

// if ControlsStacked.width
ControlsStacked.defaultProps = {
  theme: {
    gridTemplateColumns: '100px 1fr',
  },
};

ControlsStacked.prototype;

export const MainControls = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr) ;
    width: 100px;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
`;

export const TimeSection = styled.div`
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
// console.log(MainControls);

// if (MainControls.getBoundingClientRect().width < 500) {
//   TimeSection.defaultProps = {
//     theme: {
//       display: 'none',
//     },
//   };
// } else {
//   TimeSection.defaultProps = {
//     theme: {
//       display: 'block',
//     },
//   };
// }

export const Slider = styled.div`
    width: 100%;
    display: grid;    
    align-items: center;            
`;

export const TimeSlider = styled.div`
    -webkit-appearance: none;
    outline: none;
    width: 100%;
    height:2px;
    display:block;
    background-image:linear-gradient(to right, #26FFAB calc(var(--value)*1%), #D8D8D8 0);
`;

export const ExtraActions = styled.div`
    display: grid;
    grid-template-columns:repeat(3,1fr) ;
    width: 100px;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
`;

AudioPlayer.PlayingArtist = PlayingArtist;

//Old

// .song-playing{

//     .coverImg{

//     }
//     .playing__info{
//         .playing__artist{
//         }
//         .playing__song{
//         }
//     }
// }
// .controls-stacked{

//     .main-controls{

//     }
//     .time-section{

//         .slider{

//             .timeSlider{

//             }
//         }
//     }
// }

// .extra-actions{

// }

