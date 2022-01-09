import { render, screen } from "@testing-library/react";
import WikipediaSearchResultPopUp from "./WikipediaSearchResultPopUp";

import WikipediaTest from "../../../../../Classes/TestResources/WikipediaTest/WikipediaTest";

const wikipediaTest = new WikipediaTest();

test("Render the ListItem without any issue", () => {
  render(<WikipediaSearchResultPopUp dataFromWikiPedia={wikipediaTest.GetWikipediaListItemData()} />);
  screen.debug();
});
