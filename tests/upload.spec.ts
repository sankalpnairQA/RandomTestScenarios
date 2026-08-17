import {test,Page,expect,Locator} from '@playwright/test'


test('verify upload functionality',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload?');
    await page.locator('#file-upload').setInputFiles('testdata/testimg.jpg');
    await page.screenshot({
        path:'screenshots/beforeAttach.png'
    });
    await page.getByRole('button',{name:'Upload'}).click();
    await expect(page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();
     await page.screenshot({
        path:'screenshots/afterAttach.png'
    });
    await expect(page.locator('#uploaded-files'))
        .toHaveText('testimg.jpg');
    
})