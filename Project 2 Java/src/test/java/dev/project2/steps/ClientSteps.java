package dev.project2.steps;

import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import dev.project2.pages.HomePage;
import dev.project2.runners.ClientRunner;
import dev.project2.pages.HomePage;
import dev.project2.runners.ClientRunner;
import junit.framework.Assert;

public class ClientSteps {

	public static HomePage homepage = ClientRunner.homepage;
	public static WebDriver driver = ClientRunner.driver;

	@Given("^The client is on the home page and clicks search$")
	public void the_client_is_on_the_home_page_and_clicks_search() throws Throwable {
		driver.get("http://localhost:4200/home");
		//Thread.sleep(2000);
		WebElement un = driver.findElement(By.id("searchIcon"));
		//Thread.sleep(2000);
		un.click();
		//Thread.sleep(2000);

	}
	@Then("^The client should see all properties on the home page$")
	public void the_client_should_see_all_properties_on_the_home_page() throws Throwable {
		Thread.sleep(2000);
		Assert.assertEquals("http://localhost:4200/home", driver.getCurrentUrl());
		Thread.sleep(2000); 
	}
	
	@When("^The client clicks on a property image$")
	public void the_client_clicks_on_a_property_image() throws Throwable {
		//Thread.sleep(2000);
		WebElement un = driver.findElement(By.className("mat-card-image"));
		//Thread.sleep(4000);
		un.click();
		//Thread.sleep(2000);
	}
	@Then("^The client should be on that property page$")
	public void the_client_should_be_on_that_property_page() throws Throwable {
		Thread.sleep(2000);
		String str = driver.getCurrentUrl();
		boolean matches = Pattern.matches("http://localhost:4200/displayproperty/.*", str);
		Assert.assertEquals(true, matches);

	}
	
	@When("^The client presses the highest price button$")
	public void the_client_presses_the_highest_price_button() throws Throwable {
		driver.get("http://localhost:4200/home");
		Thread.sleep(3000);
		WebElement un = driver.findElement(By.xpath("/html/body/app-root/app-home-page/app-menu/div[1]/button[2]/span"));
		un.click();
		Thread.sleep(3000);


	}

	@Then("^The home page is updated with properties from the highest price to the lowest price$")
	public void the_home_page_is_updated_with_properties_from_the_highest_price_to_the_lowest_price() throws Throwable {
			Thread.sleep(3000);
		
			WebElement prop1price =   driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/app-property-card[1]/mat-card/div/mat-card-content/mat-card-subtitle[2]"));		//	WebElement prop1address = driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/app-property-card[1]/mat-card/div[2]/mat-card-content/mat-card-subtitle[1]"));
			WebElement prop2price =   driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/app-property-card[2]/mat-card/div/mat-card-content/mat-card-subtitle[2]"));
			
			//System.out.println(prop1price.getText());		//	System.out.println(prop1address);
			//System.out.println(prop2price.getText());
			
			String prop1 = prop1price.getText();
			String prop2 = prop2price.getText();
			prop1 = prop1.replace("$","");
			prop1 = prop1.replace(",","");
			prop1 = prop1.replace(".","");
			prop2 = prop2.replace("$","");
			prop2 = prop2.replace(",","");
			prop2 = prop2.replace(".","");
			int intprop1 = Integer.parseInt(prop1);
			int intprop2 = Integer.parseInt(prop2);
			//System.out.println(prop1);		//	System.out.println(prop1address);
			//System.out.println(prop2);
			
			boolean test = false;
			if(intprop1 >= intprop2)
				test=true;
			else
				test=false;
			
			Assert.assertEquals(true, test);
			Thread.sleep(3000);
	}
	
	@When("^The client presses the lowest price button$")
	public void the_client_presses_the_lowest_price_button() throws Throwable {
		WebElement un = driver.findElement(By.xpath("/html/body/app-root/app-home-page/app-menu/div[1]/button[1]/span"));
		un.click();
		Thread.sleep(3000);

	}

	@Then("^The home page is updated with properties from the lowest price to the highest price$")
	public void the_home_page_is_updated_with_properties_from_the_lowest_price_to_the_highest_price() throws Throwable {
		Thread.sleep(3000);
		
		WebElement prop1price =   driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/app-property-card[1]/mat-card/div/mat-card-content/mat-card-subtitle[2]"));	
		WebElement prop2price =   driver.findElement(By.xpath("/html/body/app-root/app-home-page/div/div/app-property-card[2]/mat-card/div/mat-card-content/mat-card-subtitle[2]"));
		
		//System.out.println(prop1price.getText());		//	System.out.println(prop1address);
		//System.out.println(prop2price.getText());
		
		String prop1 = prop1price.getText();
		String prop2 = prop2price.getText();
		prop1 = prop1.replace("$","");
		prop1 = prop1.replace(",","");
		prop1 = prop1.replace(".","");
		prop2 = prop2.replace("$","");
		prop2 = prop2.replace(",","");
		prop2 = prop2.replace(".","");
		int intprop1 = Integer.parseInt(prop1);
		int intprop2 = Integer.parseInt(prop2);
		//System.out.println(prop1);		//	System.out.println(prop1address);
		//System.out.println(prop2);
		
		boolean test = false;
		if(intprop1 <= intprop2)
			test=true;
		else
			test=false;
		
		Assert.assertEquals(true, test);
		Thread.sleep(3000);
	}
	

	




}// end class