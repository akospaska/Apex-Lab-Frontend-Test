class QueryProvider {
  getFeaturedQuery() {
    return this.#baseQuery("query fetchPopular {movies: popularMovies ");
  }
  getSearchQuery(keyword) {
    return this.#baseQuery(`query SearchMovies { searchMovies(query: "${keyword}")`);
  }
  getSimilarQuery(similarIdsArray) {
    return this.#baseQuery(`{movies(ids:[${[...similarIdsArray]}])`);
  }
  #baseQuery(targetQuery) {
    return ` ${targetQuery}{
        id
        name
        score
        genres{name}
        runtime
        overview
        poster{large}
        budget
        similar(limit:10){id,name}
         revenue
        releaseDate
        similar(limit:10){id,name}
        crew(limit:5,){id,person{name},role{... on Crew{job}}}
        img: poster {
          url: custom(size: "w185_and_h278_bestv2")
        }
        cast (limit: 5){
          id
          person {
            name
            images{small}
          }
          role {
            ... on Cast {
              character
            }
          }
        }
      }
      }`;
  }
}

export default QueryProvider;
