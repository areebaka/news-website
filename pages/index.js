  import React, { useState, useEffect } from 'react';
  import { Container, Grid, Pagination } from '@mui/material'; 
  import useFetchNews from '../hooks/useFetchNews';
  import NewsCard from '../components/NewsCard';
  import LoadingSpinner from '../components/LoadingSpinner';
  import ErrorAlert from '../components/ErrorAlert';
  import Navbar from '../components/Navbar';

//   const HomePage = () => {
  
//     const [page, setPage] = useState(1);
//     const articlesPerPage = 4;
//     const maxPages = 10;
   
//     const [news, setNews] = useState(initialNews);
//     const [totalResults, setTotalResults] = useState(initialTotalResults);
//     const [error, setError] = useState(initialError);
    

  
//     // const { news, loading, error, totalResults } = useFetchNews(page, articlesPerPage);
//     // const data =  useFetchNews(page, articlesPerPage);
//     // setNews(data.news);
//     // setTotalResults()
  
//     const totalPages = Math.min(Math.ceil(totalResults / articlesPerPage), maxPages);
  
//     const handlePageChange = (event, value) => {
//       setPage(value);
//     };

//     const handleRetry = () => {
//       window.location.reload();
//     }

//   return (

//     <>
//      <Navbar />
//     <Container maxWidth="lg" sx={{ marginTop: 4 }}>     
    
//     {/*loading state*/}
//     {loading && <LoadingSpinner />}

//     {/* error state */}
//     {error && <ErrorAlert errorMessage={error} onRetry={handleRetry} />}

//       {/* news cards */}
//       {!loading && !error && (
//       <>
//       <Grid container spacing={4} justifyContent="center">
//         {/* {news.map((article, index) => ( */}
//             {news.map((article, index) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//             <NewsCard
//               title={article.title}
//               description={article.description}
//               urlToImage={article.urlToImage}
//               source={article.source.name} 
//             />
//           </Grid>
//         ))}
//       </Grid>

//          {/* Display API call count */}
//          {/* <p>API Calls Made: {apiCallCount}</p> */}

//       {/* pagination */}
//         <Pagination
//         count={totalPages} 
//         page={page}
//         onChange={handlePageChange} 
//         sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', marginTop: 4}}
//       />
//          </>
//         )}
//     </Container>
//     </>
//   );

// };



// export async function getServerSideProps(context) {
//   const page = context.query.page ? parseInt(context.query.page) : 1;
//   const articlesPerPage = 4;
//   const apiKey = '53bda776003b4b02b1171cba737e2560';
//   const apiUrl = 'https://newsapi.org/v2/everything';
//   let news = [];
//   let totalResults = 0;
//   let error = null;

//   try {
//     const response = await fetch(`${apiUrl}?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}&pageSize=${articlesPerPage}&page=${page}`);
//     const data = await response.json();
//     news = data.articles || [];
//     totalResults = data.totalResults || 0;
//   } catch (err) {
//     error = err.message || 'Error fetching news';
//   }

//   return {
//     props: {
//       initialNews: news,
//       initialTotalResults: totalResults,
//       // initialPage: page,
//       initialError: error,
//     },
//   };
// }
// export default HomePage;


////////////////////////////////////////
const HomePage = ({ initialNews, initialTotalResults, initialError }) => {
  const [page, setPage] = useState(1);
  const articlesPerPage = 4;
  const maxPages = 10;

  const { news, loading, error, totalResults } = useFetchNews(page, articlesPerPage);

  const [newsData, setNewsData] = useState(initialNews);
  const [totalResultsState, setTotalResultsState] = useState(initialTotalResults);

  const totalPages = Math.min(Math.ceil((totalResults || totalResultsState) / articlesPerPage), maxPages);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (!loading && !error) {
      setNewsData(news);
      setTotalResultsState(totalResults);
    }
  }, [news, totalResults, loading, error]);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && <ErrorAlert errorMessage={error} onRetry={handleRetry} />}

        {/* News Cards */}
        {!loading && !error && (
          <>
            <Grid container spacing={4} justifyContent="center">
              {newsData.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <NewsCard
                    title={article.title}
                    description={article.description}
                    urlToImage={article.urlToImage}
                    source={article.source.name}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4 }}
            />
          </>
        )}
      </Container>
    </>
  );
};


export async function getServerSideProps(context) {
    const page = context.query.page ? parseInt(context.query.page) : 1;
    const articlesPerPage = 4;
    const apiKey = '53bda776003b4b02b1171cba737e2560';
    const apiUrl = 'https://newsapi.org/v2/everything';
    let news = [];
    let totalResults = 0;
    let error = null;
  
    try {
      const response = await fetch(`${apiUrl}?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}&pageSize=${articlesPerPage}&page=${page}`);
      const data = await response.json();
      news = data.articles || [];
      totalResults = data.totalResults || 0;
    } catch (err) {
      error = err.message || 'Error fetching news';
    }
  
    return {
      props: {
        initialNews: news,
        initialTotalResults: totalResults,
        // initialPage: page,
        initialError: error,
      },
    };
  }
  export default HomePage;
  

