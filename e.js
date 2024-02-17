const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.manage().window().maximize();
    await driver.get('chrome://settings/appearance');
    await driver.sleep(10000);
    let element = await driver.findElement(By.xpath('/html/body/settings-ui')).getShadowRoot();
    let ele1 = await element.findElement(By.id('container'))
    let ele2 = await ele1.findElement(By.id('main')).getShadowRoot()
    let ele3 = await ele2.findElement(By.css('.cr-centered-card-container'))
    let ele4 = await ele3.getShadowRoot()
    let ele5 = await ele4.findElement(By.id('basicPage'))
    let ele6 = await ele5.findElement(By.css("settings-section[section='appearance']"))
    let ele7 = await ele6.findElement(By.css("settings-appearance-page")).getShadowRoot()
    let ele8 = await ele7.findElement(By.id('pages'))
    let ele9 = await ele8.findElement(By.css('.iron-selected'))
    let ele10 = await ele9.findElement(By.css("settings-toggle-button[label='Show bookmarks bar']"))
    await driver.sleep(10000);
    await ele10.click();
    await driver.sleep(10000);
    await driver.quit();
  } 
  catch (e){
    console.log(e)
  }
})();
