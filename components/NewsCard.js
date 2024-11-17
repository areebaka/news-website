import { Card, CardContent, Typography, CardMedia } from '@mui/material';

/////////removed filter 
// const filteredArticles = response.data.articles.filter(article => 
        //   !article.title.toLowerCase().includes('removed') &&
        //   !article.description?.toLowerCase().includes('removed')
        // );


const NewsCard = ({ title, description, urlToImage, source }) => {

  const truncateTitle = (title, maxLength) => {
    if (!title) {
      return ''; 
    }
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';  
    }
    return title;
  };

  return (
    <Card sx={{ height: '100%' }}>
      {urlToImage && (
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
      )}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography variant="h6" gutterBottom>
          {/* {title} */}
          {truncateTitle(title, 50)}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 'auto' }}>
          Source: {source}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
