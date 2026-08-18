import {test} from '@playwright/test'


test('Verify network interception ', async({ page })=>{

    await page.route('https://the-internet.herokuapp.com/', async route=>{

        // console.log("Intercepted");
        // await route.continue();

        console.log("fulifilled");
        await route.fulfill({
            status:200,
            body: 'Hello we have altered the output using rout.fulfill',
        })
    })    
        await page.goto('https://the-internet.herokuapp.com/');
  

    


})