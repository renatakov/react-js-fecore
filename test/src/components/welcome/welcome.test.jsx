import {render, screen} from "@testing-library/react"

import Welcome from "./Welcome"

describe("Welcome component", () => {
    it("Render component", () => {
        render(<Welcome/>)
        expect(screen.getByText("Welcome to home page")).toBeInTheDocument()
    })
    it("Check page word", () => {
        render(<Welcome/>)
        expect(screen.getByText(/page/)).toBeInTheDocument()
    })
    it("Check welcome word", () => {
        render(<Welcome/>)
        expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    })
    it("Render with username", () => {
        const username = "renata"
        render(<Welcome username={username}/>)
        expect(screen.getByText(`Welcome, ${username}`)).toBeInTheDocument()
    })
})

//рендеринг происходит в виртуальный дом