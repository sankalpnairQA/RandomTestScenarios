import{test,expect} from '@playwright/test';

test('validate iframes',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/frames');
    await page.getByRole('link',{name:'iFrame'}).click();
    
    const frame = page.frameLocator('#mce_0_ifr');
    const iframetext = frame.locator('body');
    const text= await iframetext.textContent();
    console.log(text);



})


test('validate nested frames', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/frames');
    await page.getByRole('link',{name:'Nested Frames'}).click();

    const ntopframes = page.frameLocator('[name="frame-top"]');
    const nleftframe = ntopframes.frameLocator('[name="frame-left"]');
    const nframetext = nleftframe.locator('body');
    const ntext = await nframetext.textContent();

    console.log(ntext);



})