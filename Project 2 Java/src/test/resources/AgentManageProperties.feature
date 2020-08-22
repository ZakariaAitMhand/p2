Feature: Manage properties available for purchase

	Scenario: Agent logging into the agent portal
		Given The agent is on the login page
		When The agent inputs a username
		When The agent inputs a password
		When The agent clicks the login button
		Then The agent should be taken to the agent portal

	Scenario: An agent attempting to login with the wrong credentials
		Given The agent is on the login portal
		When The agent inputs the username and password
		When The agent clicks the submit button
		Then There is an alert displaying credential error

	Scenario: An agent is creating a property 
		Given The agent is on the agent portal 
		When The agent clicks the create property button
		When The agent fills out the square feet field
		When The agent fills out the price field
		When The agent fills out the address
		When The agent selects the property type
		When The agent adds an image
		When The agent presses the create button
		Then A property is created

	Scenario: An agent is deleting a property 
		Given The agent is logged in
		When The agent is on the home page
		When The agent presses the x button on a property
		Then The property is deleted
		 
		
