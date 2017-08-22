#src/features/search.feature
Feature: Search on Daft.ie
    As a user
    I should be able to search for properties
    So that I can find a new place

    Scenario: Search Test on Daft
    Given I launch Daft and select sales category
    When I navigate to search form page
    Then I can select any random City or County
    And I perform search
    Then I can select any random search result
    And I should check if selected City or County matches property address