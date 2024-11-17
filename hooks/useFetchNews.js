// import { useState, useEffect} from 'react';
// import axios from 'axios';
// import useIsMount from '../hooks/useIsMount';

// const useFetchNews = (page, articlesPerPage,) => {
//     const [news, setNews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [totalResults, setTotalResults] = useState(0);
//     const [cache, setCache] = useState({});
//     const isMount = useIsMount();
//     useEffect(() => {
//       if (isMount) {
//        return;
//       } else {
//       const fetchNews = async (page) => {
//         if (cache[page]) {
//           setNews(cache[page]);
//           setLoading(false);
//           return;
//         }
        
//         try {
//           const response = await axios.get('https://newsapi.org/v2/everything', {
//             params: {
//               q: 'bitcoin',
//               sortBy: 'publishedAt',
//               apiKey: '53bda776003b4b02b1171cba737e2560',
//               pageSize: articlesPerPage,
//               page: page,
//             },
//           });

//           // const response = await fetch('/data.json'); 
//          // https://newsapi.org/v2/everything?q=tesla&from=2024-10-06&sortBy=publishedAt&apiKey=53bda776003b4b02b1171cba737e2560&pageSize=10&page=1

//         //  const response = await axios.get('https://newsapi.org/v2/everything', {
//         //     params: {
//         //       q: 'tesla',
//         //       sortBy: 'publishedAt',
//         //       apiKey: '553bda776003b4b02b1171cba737e2560',
//         //       pageSize: articlesPerPage,
//         //       page: page,
//         //     },
//         //   });
 
//          console.log('Fetched response:', response.data.articles);
       
//           const paginatedArticles = response.data.articles;
   

//           setCache(prevCache => ({
//             ...prevCache,
//             [page]: paginatedArticles,
//           }));
//           setNews(paginatedArticles);
//           setTotalResults(response.data.totalResults);
//           setLoading(false);
//         } catch (err) {
//           setError(err.message ||'Error fetching news');
//           setLoading(false);
//         }
//       };
  
//       fetchNews(page);
//     }
//     }, [page, articlesPerPage]);
  
//     return { news, loading, error, totalResults };
  
//   };
  
//   export default useFetchNews;



///////////////////////////////////////
import { useState, useEffect } from 'react';
import axios from 'axios';
import useIsMount from '../hooks/useIsMount';

const useFetchNews = (page, articlesPerPage) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [cache, setCache] = useState({});
  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      return; 
    }

    const fetchNews = async () => {
      if (cache[page]) {
        setNews(cache[page]);
        setLoading(false);
        return;
      }

      setLoading(true); 

      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'bitcoin',
            sortBy: 'publishedAt',
            apiKey: '53bda776003b4b02b1171cba737e2560',
            pageSize: articlesPerPage,
            page: page,
          },
        });

        const paginatedArticles = response.data.articles;

      
        setCache((prevCache) => ({
          ...prevCache,
          [page]: paginatedArticles,
        }));
        setNews(paginatedArticles);
        setTotalResults(response.data.totalResults);
      } catch (err) {
        setError(err.message || 'Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, articlesPerPage, isMount, cache]);

  return { news, loading, error, totalResults };
};

export default useFetchNews;

