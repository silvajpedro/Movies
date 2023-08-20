import React, { useState } from "react";
import * as S from "./index_style.jsx";
import logoDisney from "../assets/logo.png";
import imdbIcon from "../assets/IMDB-icon.png";
import luca_title from "../assets/luca.png";
import menu from "../assets/hamburguer-menu.svg";

import bob from "../assets/11.svg";
import raya from "../assets/12.svg";
import din from "../assets/13.svg";
import spirit from "../assets/14.svg";
import luca from "../assets/15.svg";

// backgrounds
import background_luca from "../assets/background_luca.jpg";
import background_spirit from "../assets/background_spirit.jpg";
import background_din from "../assets/background_din.jpeg"
import background_raya from "../assets/background_raya1.jpg"
import background_spongebob from "../assets/background_spongebob.jpg"

export default function Index() {
  
    const [modalBackImg, setmodalBackImg] = useState(background_luca);

  return (
    <>
      <S.GlobalStyle />
      <S.MainBox mainBackImg={modalBackImg}>
        <S.AsideLeftBox>
          <S.FirstSectionAsideLeftBox>
            <S.LogoDisney src={logoDisney} alt="" />

            <div>
              <figure>
                <S.ImdbIcon src={imdbIcon} alt="" />
                <figcaption>8.8</figcaption>
              </figure>
              <p>2021 - Kids - Movie</p>
            </div>
          </S.FirstSectionAsideLeftBox>

          <S.SecondSectionAsideLeftBox>
            <div>
              <figure>
                <S.MovieName src={luca_title} alt="" />
                <figcaption>
                  Luca and Alberto dream of a life of freedom, a life of
                  adventure — and, most of all, a life with a Vespa to ride.
                </figcaption>
              </figure>
              <S.WatchNowButton>
                <span>▶</span> Watch Now
              </S.WatchNowButton>
            </div>
          </S.SecondSectionAsideLeftBox>
        </S.AsideLeftBox>

        <S.AsideRightBox>
          <div>
            <img src={menu} alt="" />
          </div>
          <S.FirstSectionAsideRightBox>
            <h2>Movies</h2>

            <S.ImagesMovie backImg={spirit} onClick={() => setmodalBackImg(background_spirit)}>
              <figcaption>Kids</figcaption>
              <figcaption>Spirit Untamed</figcaption>
            </S.ImagesMovie>

            <S.ImagesMovie backImg={din} onClick={()=> setmodalBackImg(background_din)}>
              <figcaption>Kids</figcaption>
              <figcaption>Wish Dragon</figcaption>
            </S.ImagesMovie>

            <S.ImagesMovie backImg={raya} onClick={()=> setmodalBackImg(background_raya)}>
              <figcaption>Kids</figcaption>
              <figcaption>Raya and the Last Dragon</figcaption>
            </S.ImagesMovie>

            <S.ImagesMovie backImg={bob} onClick={()=> setmodalBackImg(background_spongebob)}>
              <figcaption>Kids</figcaption>
              <figcaption>Sponge on the run</figcaption>
            </S.ImagesMovie>

            <S.ImagesMovie
              backImg={luca} onClick={() => setmodalBackImg(background_luca)} >
              <figcaption>Kids</figcaption>
              <figcaption>Luca</figcaption>
            </S.ImagesMovie>
          </S.FirstSectionAsideRightBox>
        </S.AsideRightBox>
      </S.MainBox>
    </>
  );
}
