import { screen } from "@testing-library/react";
import * as reactRouterDom from "react-router-dom";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

describe("Category tests", () => {
  beforeEach(() => {
    reactRouterDom.useParams.mockReturnValue({
      category: "mens",
    });
  });

  test("It should render a Spinner if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("it should render products if isLoading is false and there are items present", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const productElement = screen.getByText(/product 1/i);
    expect(productElement).toBeInTheDocument();
  });
});
