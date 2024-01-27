
import Page from './page.ts';

class YahooPage extends Page  {
  /**
  * define elements
  */
  get searchInput()   { return $('#yschsp'); }
  get searchButton()  { return $('.mag-glass'); }
  get resultsList()   { return $('#results'); }
  get hondaIcon() { return $('//nav//ul//li[@data-value="Honda"]');}
  get radioButton() { return $('(//nav//input[@value="Accessories"])[1]')}
  get footer() { return $('//footer') }
  productDimesionName(index){
    return $('(//div[.//h3[contains(text(),"Product Details") and contains(@class,"productDetailHead")]]//c-products-detail//lightning-layout//lightning-layout-item)['+index+']//div[1]');
  }
  productDimesionValue(index){
    return $('(//div[.//h3[contains(text(),"Product Details") and contains(@class,"productDetailHead")]]//c-products-detail//lightning-layout//lightning-layout-item)['+index+']//div[1]');
  }
  dropdownItem(name) { return $('//button[@name="'+name+'"]');}
  dropdownOption(year) { 
    return $('//*[@role="option"]//*[contains(text(),"'+year+'")]');
  }
  get backLink(){
    return $('//a[text()=" < Back to results"]');
  }
  get modealSearchButton(){
    return $('(//button[contains(@class,"hondabutton") and @data-value="Accessories2"])');
  }
 get accessoriesList()
  {
    return $$('(//ul//li[contains(@class,"product_item")])//img');
  }
  accessoriesListimg(index)
  {
    return $('(//ul//li[contains(@class,"product_item")])['+index+']//img');
  
  }
  accessoriesListLink(index)
  {
    return $('(//ul//li[contains(@class,"product_item")])['+index+']//a');
  }
  /**
   * define or overwrite page methods
   */

  async open() {
      await super.open('https://dreamshop.honda.com/');      //provide your additional URL if any. this will append to the baseUrl to form complete URL
      await browser.pause(1000);
      await browser.maximizeWindow();
  }
  async mouseHover()
  {
    (await this.hondaIcon).moveTo();
     await browser.pause(2000);
  }
  async selectCategoryType()
  {
    (await this.radioButton).click();
    await browser.pause(1000);
  }
  async selectValueFromDropdown(name, value)
  {
    (await this.dropdownItem(name)).click();
     await browser.pause(1000);

     (await this.dropdownOption(value)).click();
     await browser.pause(1000);
  }
  async clickOnSearchButton(){
    (await this.modealSearchButton).click();
    await browser.pause(5000);
  }
 async getAccessoriesList()
 {
  await this.footer.scrollIntoView();
  await browser.pause(5000);
  let accessories = (await this.accessoriesList);
  for(let k = 1; k<=accessories.length; k++){
    console.log(k)
   // console.log(await this.accessoriesListimg(k).getAttribute('src'));
    await this.accessoriesListLink(k).click();
    await browser.pause(5000);
    let name = await this.productDimesionName(1).getText();
    let value = await this.productDimesionValue(2).getText();
    console.log(name,'  --->  ',value);
    await browser.pause(5000);
    (await this.backLink).click();
  }
  console.log("Shiva");
  console.log("Shiva",accessories.length);

 }
  async enterText(item) {
    await this.searchInput.clearValue();
    await this.searchInput.setValue(item);
    await browser.pause(1000);
  }

  async search() {
    await this.searchButton.click();
  }
  async isSearched() {
    await this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }
}

export default new YahooPage();
