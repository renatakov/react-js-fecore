import { sumNum } from "./func";
import { userName } from "./func";

it("Test with two params", ()=>{
    const result = sumNum(10, 15)
    expect(result).toBe(25) //pass
    
})

// npm test - запуск теста в npm

it("Test with one param", () => {
    const result = sumNum(10)
    expect(result).toBe("Error")//pass
})

//it - создать тест

it("Test username", ()=>{
    const result = userName("RenataKov")
    expect(result).toBe("Hello RenataKov!") //pass
})

it("Test username fail", ()=>{
    const result = userName("John")
    expect(result).toBe("Wrong Username")//pass
})

