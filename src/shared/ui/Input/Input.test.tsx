import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input react component", () => {
    test("Input", () => {
        render(<Input placeholder="TEST" />);
        expect(screen.getByPlaceholderText("TEST")).toBeInTheDocument();
        screen.debug();
    });
});
