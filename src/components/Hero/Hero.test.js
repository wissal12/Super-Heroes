import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Hero from ".";
import { BrowserRouter } from "react-router-dom";
import { getHeroDetailsURL } from "../../routes";

const defaultHeroProps = Object.freeze({
  id: 1,
  name: "Wissal The Hero of Paris",
  firstAppearnce: "Wondar Woamn 3 (2023)",
  race: "Human",
  image: "img.jpg",
});
// addToFavourites,
// isFavourite,
// removeFromFavourites

const Wrapper = ({ children }) => (
  // you could just use your normal Redux store or create one just for the test
  <BrowserRouter>{children}</BrowserRouter>
);

describe("[Component] <Hero />", () => {
  // mock useNavigate
  const mockedUsedNavigate = jest.fn();
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    const view = render(<Hero {...defaultHeroProps} />, { wrapper: Wrapper });
    expect(view).toBeTruthy();
  });

  it("should have add to favourites button disabled when hero is already a favourite", () => {
    render(
      <Hero {...defaultHeroProps} addToFavourites={() => {}} isFavourite />,
      { wrapper: Wrapper }
    );

    const addToFavouritesButton = screen.getByTestId("add-to-favourite");
    expect(addToFavouritesButton).toBeTruthy();
    expect(addToFavouritesButton).toBeDisabled();
  });

  it("should call remove hero when add-to-favourite clicked and removeFromFavourites is passed", () => {
    const removeFromFavourites = jest.fn();
    render(
      <Hero
        {...defaultHeroProps}
        removeFromFavourites={removeFromFavourites}
        isFavourite
      />,
      { wrapper: Wrapper }
    );

    const removeFromFavouritesButton = screen.getByTestId("add-to-favourite");
    expect(removeFromFavouritesButton).toBeTruthy();
    fireEvent.click(removeFromFavouritesButton);
    expect(removeFromFavourites).toHaveBeenCalled();
    expect(removeFromFavourites).toBeCalledTimes(1);
  });

  it("should not navigate out of component when addToFaviorate is called", () => {
    const addToFavourites = jest.fn();
    render(<Hero {...defaultHeroProps} addToFavourites={addToFavourites} />, {
      wrapper: Wrapper,
    });

    const addToFavouritesButton = screen.getByTestId("add-to-favourite");
    fireEvent.click(addToFavouritesButton);
    expect(addToFavourites).toHaveBeenCalled();
    expect(addToFavourites).toBeCalledTimes(1);

    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });

  it("should not navigate out of component when addToFaviorate is called", () => {
    const addToFavourites = jest.fn();
    render(<Hero {...defaultHeroProps} addToFavourites={addToFavourites} />, {
      wrapper: Wrapper,
    });

    const addToFavouritesButton = screen.getByTestId("add-to-favourite");
    fireEvent.click(addToFavouritesButton);
    expect(addToFavourites).toHaveBeenCalled();
    expect(addToFavourites).toBeCalledTimes(1);

    expect(mockedUsedNavigate).not.toHaveBeenCalled();
  });
});
