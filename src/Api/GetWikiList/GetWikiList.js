const GetWikiList = (searchKeyWord) => {
  var config = {
    method: "get",
    url: `https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${searchKeyWord}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return config;
};

export default GetWikiList;
