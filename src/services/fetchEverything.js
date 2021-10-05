export const fetchEverything = async (title, from, to, language) => {
  const url = `https://newsapi.org/v2/everything?q=${title}?&from=${from}&to=${to}&sortBy=popularity&language=es&apiKey=353551e452344995bbcfe1e2c0eee888`;
  const response = await fetch(url).then();
  const data = await response.json();

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
