import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS" // this passes to Row #10
                fetchUrl={requests.fetchNetflixOriginals} // To fetch we go to utils/requests brings data
                isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </>
    );
};

export default RowList






// import React from 'react'
// import "./RowList.css"
// import Row from "../Row/Row"

// const RowList = () => {
//   return (
//     <>
        
//         <Row/>
//         <Row/> 
//         <Row/>
//         <Row/>
//         <Row/>
        
//         </>
//     // We render our lists 
//   )
// }

// export default RowList