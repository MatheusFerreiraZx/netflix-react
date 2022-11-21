import React from "react";
import requests from "../utils/requests";
import Row from "../Components/Row";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Originais da Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Recomendados para você" fetchUrl={requests.fetchTrends} />
      <Row title="Em alta" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Anime" fetchUrl={requests.fetchAnime} />
      <Row title="Ficção Científica" fetchUrl={requests.fetchFantasy} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
