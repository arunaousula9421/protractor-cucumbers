var SearchPage = function () {
    this.salesCategory = element(by.css('[href="/sales/"]'));
    this.salesHeader = element(by.id('search-title'));

    this.cityCountyDropDown = element(by.id('cityCountyDropDown'));
    this.cityCounty = element.all(by.xpath("//*[@id='cc_id']/dd/ul/li"));

    this.cityCountyCount;
    this.randomCityCountyIndex;

    this.selectCityCountyLabel = function (cityCountyLabel) {
        element(by.xpath(".//*[@id='cc_id']/dd/ul/li[text()='" + cityCountyLabel + "']")).click();
        };

    
    this.submitButton = element(by.css('input.btn-search'));
    this.searchResults = element.all(by.xpath("//*[@id='sr_content']/tbody/tr/td[1]/div[@class='box']"));

    this.searchResultsCount;
    this.randomSearchResultsIndex;

    this.randomSearchResult = function (randomSearchResultsIndex, searchResult) {
        return element(by.xpath(".//*[@id='sr_content']/tbody/tr/td[1]/div[@class='box'][" + randomSearchResultsIndex + "]/div[1]/h2/a"));
    }
 
    this.addressRegex;
}

module.exports = new SearchPage();