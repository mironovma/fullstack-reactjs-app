import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar react component", () => {
    test("Sidebar", () => {
        // @ts-ignore
        render(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Sidebar on toggle", () => {
        // @ts-ignore
        render(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
        screen.debug();
    });
});
