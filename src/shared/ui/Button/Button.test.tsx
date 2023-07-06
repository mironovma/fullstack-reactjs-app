import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";
// import React from "react";

describe("Button react component", () => {
    test("Button", () => {
        // @ts-ignore
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Button with theme", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
