import { render, screen } from "@testing-library/react";

import MovieDetailModal from "./MovieDetailModal";

import ModalTest from "../../../../Classes/TestResources/ModalTest/ModalTest";

const modalTest = new ModalTest();

test("Render the DetailedMovieModal without any issue", async () => {
  render(
    <MovieDetailModal
      spinnerHandler={true}
      setMainTitle={true}
      setQueryRoot={true}
      searchTrigger={true}
      isMovieDetailModalOpen={true}
      closeMovieDetailModal={true}
      movieData={modalTest.getMovieListForTest()}
    />
  );
  screen.debug();
});
