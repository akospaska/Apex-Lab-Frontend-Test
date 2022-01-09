const GetIMDBLink = (searchKeyWord) => {
  var config = {
    method: "get",
    url: `https://imdb8.p.rapidapi.com/title/find?q=${searchKeyWord}`,
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": process.env.x_RAPIDAPI_KEY,
      "Content-Type": "application/json",
    },
  };

  return config;
};

export default GetIMDBLink;
