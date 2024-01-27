
import yahooPage    from '../pageobjects/yahoo-search.page.ts';
import assert       from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/


describe('Performing a search operation on Yahoo Page',  () =>  {
  it('Performing a search operation', async () =>  {
    await yahooPage.open(); 
    //assert.equal(await browser.getTitle(), 'Home | DreamShop');
    await yahooPage.mouseHover();
    await yahooPage.selectCategoryType();
    await yahooPage.selectValueFromDropdown('Year2','2021');
    await yahooPage.selectValueFromDropdown('Model2','Accord Sedan');
    await yahooPage.selectValueFromDropdown('Trim2','1.5T EX-L Continuously Variable Transmission');
    await yahooPage.clickOnSearchButton();

  });

  it('searching Selenium Webdriver', async () =>  {
    await yahooPage.getAccessoriesList();
//    await yahooPage.enterText('Selenium Webdriver');
 //   yahooPage.search();
 //   assert.equal(await yahooPage.isSearched(), true);
  });
});
