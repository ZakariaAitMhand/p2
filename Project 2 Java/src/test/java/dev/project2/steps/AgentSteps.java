package dev.project2.steps;

import static org.junit.Assert.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dev.project2.app.Project2Application;
import dev.project2.entities.Agent;
import dev.project2.pages.AgentHomePage;
import dev.project2.repos.PropertyRepository;
import dev.project2.runners.AgentRunner;
import dev.project2.services.PropertyService;


public class AgentSteps {

	public static WebDriver driver = AgentRunner.driver;
	public static AgentHomePage ahPage = AgentRunner.ahpage;
	private int propertyCount;
	List<WebElement> cards = new ArrayList<WebElement>();

	
	@Given("^The agent is on the login page$")
	public void the_agent_is_on_the_login_page() throws Throwable {
		driver.get("http://localhost:4200/home");
		ahPage.loginDisplayButton.click();
	}

	@When("^The agent inputs a username$")
	public void the_agent_inputs_a_username() throws Throwable {
		ahPage.loginUsernameInput.sendKeys("Johnny Bones");
	}

	@When("^The agent inputs a password$")
	public void the_agent_inputs_a_password() throws Throwable {
		ahPage.loginPasswordInput.sendKeys("YouTheMan!");
	}

	@When("^The agent clicks the login button$")
	public void the_agent_clicks_the_login_button() throws Throwable {
		ahPage.loginButton.click();
	}

	@Then("^The agent should be taken to the agent portal$")
	public void the_agent_should_be_taken_to_the_agent_portal() throws Throwable {
		Thread.sleep(1000);
		Assertions.assertEquals(ahPage.logoutButton.getText(), "Logout");
		//ahPage.logoutButton.click();
	}

	@Given("^The agent is on the login portal$")
	public void the_agent_is_on_the_login_portal() throws Throwable {
		driver.get("http://localhost:4200/home");
		ahPage.loginDisplayButton.click();
	}

	@When("^The agent inputs the username and password$")
	public void the_agent_inputs_the_username_and_password() throws Throwable {
		ahPage.loginUsernameInput.sendKeys("badUsername");
	}

	@When("^The agent clicks the submit button$")
	public void the_agent_clicks_the_submit_button() throws Throwable {
		ahPage.loginPasswordInput.sendKeys("badPassword");
	}

	@Then("^There is an alert displaying credential error$")
	public void there_is_an_alert_displaying_credential_error() throws Throwable {
		Assertions.assertEquals(ahPage.loginButton.getText(), "Login");

	}

	@Given("^The agent is on the agent portal$")
	public void the_agent_is_on_the_agent_portal() throws Throwable {
		driver.get("http://localhost:4200/home");
		ahPage.homeButton.click();
		Thread.sleep(2000);
		cards = ahPage.propertyCard.findElements(By.cssSelector("#propertyCard"));
		propertyCount = cards.size();
		Thread.sleep(3000);
		
		driver.get("http://localhost:4200/home");
		ahPage.loginDisplayButton.click();
		ahPage.loginUsernameInput.sendKeys("Johnny Bones");
		ahPage.loginPasswordInput.sendKeys("YouTheMan!");
		ahPage.loginButton.click();
		Thread.sleep(1000);
		
	}

	@When("^The agent clicks the create property button$")
	public void the_agent_clicks_the_create_property_button() throws Throwable {
		ahPage.createPropertyDisplayButton.click();
	}

	@When("^The agent fills out the square feet field$")
	public void the_agent_fills_out_the_square_feet_field() throws Throwable {
		ahPage.squareFeetInput.sendKeys("1337");
	}

	@When("^The agent fills out the price field$")
	public void the_agent_fills_out_the_price_field() throws Throwable {
		ahPage.propertyPriceInput.sendKeys("1337");
	}

	@When("^The agent fills out the address$")
	public void The_agent_fills_out_the_address() throws Throwable {
		ahPage.addressInput.sendKeys("1600 Pennsylvania Avenue NW, Washington, DC 20500");
	}

	@When("^The agent selects the property type$")
	public void The_agent_selects_the_property_type() throws Throwable {
		ahPage.propertyTypeSelector.click();
		ahPage.propertyType.click();
	}
	
	@When("^The agent adds an image$")
	public void the_agent_adds_an_image() throws Throwable {
		String home = System.getProperty("user.home");
		File file = new File(home + "/Downloads/House1.jpg");
	    ahPage.uploadImageButton.findElement(By.id("undefined")).sendKeys(file.getAbsolutePath());
	    file = new File(home + "/Downloads/House2.jpg");
	    ahPage.uploadImageButton.findElement(By.id("undefined")).sendKeys(file.getAbsolutePath());
	    file = new File(home + "/Downloads/House3.jpg");
	    ahPage.uploadImageButton.findElement(By.id("undefined")).sendKeys(file.getAbsolutePath());
	    file = new File(home + "/Downloads/House4.jpg");
	    ahPage.uploadImageButton.findElement(By.id("undefined")).sendKeys(file.getAbsolutePath());

	}

	
	@When("^The agent presses the create button$")
	public void the_agent_presses_the_create_button() throws Throwable {
		ahPage.createPropertyButton.click();
		Thread.sleep(2000);
	}

	@Then("^A property is created$")
	public void a_property_is_created() throws Throwable {
		Assertions.assertEquals(propertyCount, cards.size());
	}
	
	@Given("^The agent is logged in$")
	public void the_agent_is_logged_in() throws Throwable {
		driver.get("http://localhost:4200/home");
		ahPage.loginDisplayButton.click();
		ahPage.loginUsernameInput.sendKeys("Johnny Bones");
		ahPage.loginPasswordInput.sendKeys("YouTheMan!");
		ahPage.loginButton.click();
	}

	@When("^The agent is on the home page$")
	public void the_agent_is_on_the_home_page() throws Throwable {
		Thread.sleep(2000);
		//ahPage.homeButton.click();
		//Thread.sleep(2000);
	    cards = ahPage.propertyCard.findElements(By.cssSelector("#propertyCard"));
	}

	@When("^The agent presses the x button on a property$")
	public void the_agent_presses_the_x_button_on_a_property() throws Throwable {
		
		propertyCount = cards.size();

		Thread.sleep(2000);
		ahPage.agentButton.click();
		Thread.sleep(2000);
		ahPage.agentCard.click();
		
		cards = ahPage.propertyCard.findElements(By.cssSelector("#propertyCard"));

		Thread.sleep(2000);
		ahPage.deleteButton.click();
		Thread.sleep(2000);

	}

	@Then("^The property is deleted$")
	public void the_property_is_deleted() throws Throwable {
	    Assertions.assertEquals(cards.size(), propertyCount);
	    
	}
}
