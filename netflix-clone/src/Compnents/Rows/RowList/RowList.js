import React from 'react'
import Row from "../Row/Row.js";
import "./rowList.css";
import request from '../../../utils/request';

function RowList() {
  return (
    <>
        <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchingNetflexOriginal}
        isLargeRow={true}
        />
        <Row title="ACTION"
          fetchUrl={request.fetchingActionMovies} />
        <Row title="COMDEY"
          fetchUrl={request.fetchingComdeyMovies} />
        <Row title="DOCUMENTRY"
          fetchUrl={request.fetchingDocumentryMovies} />
        <Row title="HORROR"
          fetchUrl={request.fetchingHorrorMovies} />
        <Row title="ROMANCE"
          fetchUrl={request.fetchingRomanceMovies} />
        <Row title="TOP RATED"
          fetchUrl={request.fetchingTopRated} />
        <Row title="TRENDING"
          fetchUrl={request.fetchingTrending} />
        <Row title="TV SHOW"
          fetchUrl={request.fetchingTvShow} />
        
        
    </>
  )
}

export default RowList;
