import { render, screen } from "@testing-library/react";

import ModalTest from "../../../../Classes/TestResources/ModalTest/ModalTest";
import MovieCard from "./MovieCard";

const cardTest = new ModalTest();

test("Render the ListItem without any issue", () => {
  render(<MovieCard listItem={cardTest.getMovieListForTest().data.movies[0]} selectMovie={true} openDetailListModal={true} />);
  screen.debug();
});
