import{test,expect} from '@playwright/test';


test('Download test text file', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download?');
    const downloadPromise1 = page.waitForEvent('download');
    await page.getByRole('link',{name:'test_upload.txt'}).click();
    const downloadtxt = await downloadPromise1;
    console.log(downloadtxt.suggestedFilename());

    await expect(downloadtxt.suggestedFilename()).toBe('test_upload.txt');
    await downloadtxt.saveAs('downloads/fisrt_download.txt');

})

test('download test jpg file', async ({page})=>{
    page.goto('https://the-internet.herokuapp.com/download?');
    const downloadpromise2 = page.waitForEvent('download');
    await page.getByRole('link',{name:'image.jpg'}).click();
    const downloadjpg = await downloadpromise2;

    await expect(downloadjpg.suggestedFilename()).toBe('image.jpg');
    await downloadjpg.saveAs('downloads/imageDownlaod.jpg');


})