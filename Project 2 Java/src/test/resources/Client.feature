Feature: Client is able to view available properties

	Scenario: A client wants to search all properties 
		Given The client is on the home page and clicks search
		Then The client should see all properties on the home page


	Scenario: A client wants to view a property
	
		When The client clicks on a property image
		Then The client should be on that property page
		
	Scenario: A client wants to view properties from highest to lowest price
		When The client presses the highest price button
		Then The home page is updated with properties from the highest price to the lowest price
		
	Scenario: A client wants to view properties from lowest to highest price
		When The client presses the lowest price button
		Then The home page is updated with properties from the lowest price to the highest price
		