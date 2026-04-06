import {test, expect} from "@playwright/test"

test("verify the title of page", async({page})=>{
    console.log("test started")
    //AAA - Arrange, Act, Assert
    await page.goto("https://www.google.com/")

})
