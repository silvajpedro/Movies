import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    color: #ffffff;
}
`;

export const MainBox = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-image: url(${(props) => props.mainBackImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: ease-in-out 0.7s;
`;

export const AsideLeftBox = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29vw;
  height: 94vh;
  /* border: solid red; */
`;

export const FirstSectionAsideLeftBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 14.5vw;
  height: 20vh;
  margin-right: 6.4vw;
  /* border: solid green; */
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7.5vh;
    /* border:solid red; */
  }
  figure {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border:solid purple; */
    width: 5.5vw;
    font-size: 1.05vw;
    font-weight: 600;
  }
  p {
    font-size: 1.12vw;
  }
`;

export const SecondSectionAsideLeftBox = styled.section`
  /* border: solid purple 5px; */
  margin-top: 4vh;
  
  figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* border: solid hotpink; */
    height: 41vh;
  }
  figcaption {
    font-size: 1.12vw;
    font-weight: 400;
    line-height: 3vh;
    /* border:solid; */
    width: 21vw;
    white-space: pre-line;
  }
`;

export const WatchNowButton = styled.button`
  margin-top: 5vh;
  width: 15vw;
  height: 7vh;
  font-size: 1.2vw;
  border: none;
  border-radius: 50px;
  background: linear-gradient(154.23deg, #0f3a7b -58.45%, #0cffff 374.49%);
  box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.160784);
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  span {
    margin-right: 0.8vw;
    font-size: 1.37vw;
  }
`;

export const AsideRightBox = styled(AsideLeftBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* border: solid yellow; */
  width: 24vw;
  height: 90vh;
  
  div {
      display: flex;
      justify-content:flex-end;
      /* border:solid; */
      width: 17.5vw;
    }
    img{
      cursor:pointer;
    }
    
    `;

export const FirstSectionAsideRightBox = styled.section`
  /* border: solid red; */
  height: 70vh;
  overflow-y: scroll;
  margin-bottom: 7vh;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  &::-webkit-scrollbar-track {
    background: #bfbfbf;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #bfbfbf;
  }
  &::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  h2{
   font-size:31px;
   font-weight: 800;
   height:6vh;
  }
`;

// Images and Icons sizes

export const LogoDisney = styled.img`
  width: 7vw;
  height: 7.8vh;
`;
export const ImdbIcon = styled.img`
  width: 2.64vw;
  height: 2.74vh;
`;

export const MovieName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size:${(props) => props.word.length > 5 ? '3.6vw':'7.5vw'} ;
  font-family: "Chewy", sans-serif;
  width: 19vw;
  height: 26.68vh;
  /* border:solid; */
  
`;
export const ImagesMovie = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  line-height: 2.42vh;
  font-weight: 600;
  font-size: 0.96vw;
  width: 15vw;
  height: 15.5vh;
  background-image: url(${(props) => props.backImg});
  background-size: 190% 190%;
  background-position: center;
  border-radius: 30px;
  margin-top: 3.35vh;
  margin-right: 2vw;
  cursor: pointer;
`;
