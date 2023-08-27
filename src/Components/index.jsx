import React, { useState } from "react";
import * as S from "./index_style.jsx";
import { movies } from "./info_movies.jsx";

// logos
import logoDisney from "../assets/logo.png";
import imdbIcon from "../assets/IMDB-icon.png";
import menu from "../assets/hamburguer-menu.svg";

export default function Index() {
  const [modalBackImg, setmodalBackImg] = useState(movies[4].background);
  const [idInfoMovies, setidInfoMovies] = useState(4);
  const [modalMenuMovies, setModalMenuMovies] = useState(false);
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
                <figcaption>{movies[idInfoMovies].rating}</figcaption>
              </figure>
              <p>{movies[idInfoMovies].year} - Kids - Movie</p>
            </div>

          </S.FirstSectionAsideLeftBox>

          <S.SecondSectionAsideLeftBox>
            
            <div>
              
              <figure>
                
                <S.MovieName word={movies[idInfoMovies].title}>{
                movies[idInfoMovies].title}
                </S.MovieName>

                <figcaption>{movies[idInfoMovies].summary}</figcaption>
              </figure>

              <a href={movies[idInfoMovies].link}>
                <S.WatchNowButton>
                  <span>▶</span> Watch Now
                </S.WatchNowButton>
              </a>
            
            </div>
          </S.SecondSectionAsideLeftBox>
        </S.AsideLeftBox>

        <S.AsideRightBox>
          <div>
            <img
              src={menu}
              onClick={() => setModalMenuMovies(!modalMenuMovies)}
              alt=""
            />
          </div>

          {modalMenuMovies && (
            <S.FirstSectionAsideRightBox>
              <h2>Movies</h2>

              {movies.map((item, id) => (
                <S.ImagesMovie
                  backImg={item.movieImage}
                  onClick={() => {
                    setmodalBackImg(movies[id].background);
                    setidInfoMovies(id);
                  }}>

                  <figcaption>{item.type}</figcaption>
                  <figcaption>{item.title}</figcaption>
                
                </S.ImagesMovie>
              ))}
            
            </S.FirstSectionAsideRightBox>
          )}
        
        </S.AsideRightBox>
      </S.MainBox>
    </>
  );
}
