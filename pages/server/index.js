import Navbar from '../../components/Navbar';
import NewsCard from '../../components/NewsCard';
import ErrorAlert from '../../components/ErrorAlert';
import React from 'react';
import { Container, Grid, Pagination } from '@mui/material'; 
import { useRouter } from 'next/router';

const HomePage = ({ news,  error, totalResults,  articlesPerPage, page }) => {
const maxPages = 10;
const totalPages = Math.min(Math.ceil(totalResults / articlesPerPage), maxPages);
const router = useRouter(); 

const handlePageChange = (event, value) => {
    // router.push(`/?page=${value}`);
    window.location.href= `/?page=${value}`;
  };

  const handleRetry = () => {
    window.location.reload();
  }

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ marginTop: 4 }}>     
      

        {/* error state */}
        {error && <ErrorAlert errorMessage={error} onRetry={handleRetry} />}

        {/* news cards */}
        { !error && (
          <>
            <Grid container spacing={4} justifyContent="center">
              {news.map((article, index) => (
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

            {/* pagination */}
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
      news,
      error,
      totalResults,
      page,
      articlesPerPage
    }
  };
}

export default HomePage;
