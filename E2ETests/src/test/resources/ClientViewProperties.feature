Feature: Client is able to view available properties

	Scenario: A client wants to view all properties available
		Given The client is on the home page
		Then The client should see properties on the home page

	Scenario: A client wants to view a property
		Given The client is on the home page
		When The client clicks on a property image
		Then The client should be on that property page

	Scenario: A client wants to view properties from highest to lowest price
		Given The client is on the home page
		When The client presses the highest price button
		Then The home page is updated with properties from the highest price to the lowest price

	Scenario: A client wants to view properties from the lowest to highest price
		Given The client is on the home page
		When The client clicks the lowest price button
		Then The home page is updated with prcies from the lowest price to the highest price

	Scenario: A client wants to find properties within a price range
		Given The client is on the home page
		When The client pclick the price between button
		When The client input a number in the min box
		When The client inputs a number in the max box
		Then The home page is updated with properties within the min and max box values for price 