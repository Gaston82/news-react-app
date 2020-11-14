export const fetchNews = async (country, category) => {
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=353551e452344995bbcfe1e2c0eee888`;
  const response = await fetch(url).then();
  const data = await response.json();
  console.log(data);
  const content = data.articles.map((article) => {
    return {
      title: article.title,
      url: article.urlToImage,
      description: article.description,
      content: article.content,
      detail: article.url,
    };
  });
  return content;
};
