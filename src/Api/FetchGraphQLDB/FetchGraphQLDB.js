const FetchGraphQLDB = (query) => {
  var data = JSON.stringify({
    query: query,
  });

  var config = {
    method: "post",
    url: "https://tmdb.sandbox.zoosh.ie/dev/grphql",

    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return config;
};

export default FetchGraphQLDB;
