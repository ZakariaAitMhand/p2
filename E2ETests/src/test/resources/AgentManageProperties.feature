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

	Scenario: An agent wanting to see all managed properties
		Given The agent is on the agent portal page
		Then The agent should see all their managed properties

	Scenario: An agent is updating a property 
		Given The agent is on the agent portal 
		When The agent can modify mandatory fields
		When The agent clicks on the update property button
		Then Alert box to let agent know if a property was updated or not

	Scenario: An agent wants to see a specific property
		Given The agent is on the agent portal page
		When The agent clicks on a property card
		Then The agent is redirected to a page with the correct property credentials
