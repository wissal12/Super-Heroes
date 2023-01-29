import React from "react";
import { render, screen } from "@testing-library/react";
import List from ".";

describe("[Component] <List />", () => {
  it("should render", () => {
    const view = render(
      <List>
        <div>child</div>
      </List>
    );
    expect(view).toBeTruthy();
  });

  it("should render all children", () => {
    render(
      <List>
        <div>first child</div>
        <div>second child</div>
        <div>third child</div>
      </List>
    );

    const children = screen.getAllByText(/child/);
    expect(children).toHaveLength(3);
  });
});
