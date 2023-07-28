import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

/**
 * fireEvent vs userEvent:
 * fireEvent dispatches DOM events, whereas user-event
 * simulates full interactions, which may fire multiple
 * events and do additional checks along the way.
 */

describe("Counter react component", () => {
    test("Counter render", () => {
        componentRender(<Counter />);
        expect(screen.getByTestId("Counter")).toBeInTheDocument();
    });

    test("Counter RC get state value", () => {
        // Counter RC render
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        // Expect to be in the document
        expect(screen.getByTestId("Counter")).toBeInTheDocument();
        // Current html element (h1) contains text = counter state value
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });

    test("Increment and decrement counter state value and get this value in RC", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("Counter")).toBeInTheDocument();
        // Click on INC btn and inc our state value
        fireEvent.click(screen.getByTestId("inc-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
        // Click twice on DEC btn and dec our state value
        fireEvent.click(screen.getByTestId("dec-btn"));
        fireEvent.click(screen.getByTestId("dec-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
