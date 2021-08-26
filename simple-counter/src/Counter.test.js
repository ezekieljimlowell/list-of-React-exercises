import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';

describe("check increment and decrement", () => {
    render(<Counter />);
    it("check increment only", () => {
        const button1 = screen.getByRole("button", { name: /Increment/i });
        fireEvent.click(button1);
        const result1 = screen.getByText(1);
        expect(result1).toBeInTheDocument();
        const button2 = screen.getByRole("button", { name: /Decrement/i });
        userEvent.click(button2);
        const result2 = screen.getByText(0);
        expect(result2).toBeInTheDocument();
    })
    it("check increment only", () => {
        const button1 = screen.getByRole("button", { name: /Increment/i });
        fireEvent.click(button1);
        const result1 = screen.getByText(1);
        expect(result1).toBeInTheDocument();
        const button2 = screen.getByRole("button", { name: /Decrement/i });
        userEvent.click(button2);
        const result2 = screen.getByText(0);
        expect(result2).toBeInTheDocument();
    })
})

it("check decrement", () => {
    render(<Counter />);
    const button2 = screen.getByRole("button", { name: /Decrement/i });
    userEvent.click(button2);
    const result2 = screen.getByText(-1);
    expect(result2).toBeInTheDocument();
})

describe("base element", () => {
    it("only base element", () => {
        render();
        screen.debug();
    })
})

const element = (
    <div></div>
)

describe("append table", () => {
    it("append table", () => {
        const table = document.createElement("table");
        const { container, unmount } = render(element, {
            container: document.body.appendChild(table)
        });
        expect(screen.getByRole("table")).toBeInTheDocument();
        screen.debug();
        unmount();
        unmount();
        screen.debug();
    })
})



