import { render, screen } from "@testing-library/react";
import CastListItem from "./CastListItem";

import CastItemTest from "../../../../../Classes/TestResources/CastItemTest/CastItemTest";

const castItemTest = new CastItemTest();

const withNullValues = {
  role: {
    character: "President James Dale / Art Land",
  },
};

test("Render the ListItem without any issue", () => {
  render(<CastListItem castPerson={castItemTest.GetCastItemTestData()} />);
  screen.debug();
});

test("Render the ListItem with null values", () => {
  render(<CastListItem castPerson={withNullValues} />);
  screen.debug();
});
