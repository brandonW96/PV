const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://www..com');
driver.findElement(webdriver.By.name('q'));.sendKeys('hello world');
driver.findElement({ name: 'q'}).sendKeys(webdriver.Key.ENTER);
driver.wait(webdriver.until.elementLocated({ xpath: '//*[@id="rso"]/div/div/div[3]/div/div/h3/a'}), 1000);
driver.findElement({ xpath: '//*[@id="rso"]/div/div/div[3]/div/div/h3/a'}).click();
driver.getTitle().then(function(title){
	console.log(title);
});
driver.quit();
