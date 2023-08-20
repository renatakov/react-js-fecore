import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Welcome from "./Welcome"

describe("Welcome component", () => {
    // it("Render component", () => {
    //     render(<Welcome/>)
    //     expect(screen.getByText("Welcome to home page")).toBeInTheDocument()
    // })
    // it("Check page word", () => {
    //     render(<Welcome/>)
    //     expect(screen.getByText(/page/)).toBeInTheDocument()
    // })
    // it("Check welcome word", () => {
    //     render(<Welcome/>)
    //     expect(screen.getByText(/welcome/i)).toBeInTheDocument()
    // })
    // it("Render with username", () => {
    //     const username = "renata"
    //     render(<Welcome username={username}/>)
    //     expect(screen.getByText(`Welcome, ${username}`)).toBeInTheDocument()
    // })
    it("Render button", ()=>{
        render(<Welcome/>)
        const btnClick = screen.getByText("Click")
        expect(btnClick).toBeInTheDocument()
    })
    it("Check click event", ()=>{
        const handleClick = jest.fn()
        render(<Welcome handleClick={handleClick}/>)
        const btnClick = screen.getByText("Click")
        userEvent.click(btnClick)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})

//рендеринг происходит в виртуальный дом