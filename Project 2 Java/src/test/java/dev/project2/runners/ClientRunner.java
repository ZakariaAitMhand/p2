package dev.project2.runners;

import static org.junit.Assert.*;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import dev.project2.pages.HomePage;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Client.feature", glue = "dev.project2.steps") // features is the location 
// of your feature files. glue is the location of your step implementation
// each given when and then is its own step
public class ClientRunner {
	
	public static WebDriver driver;
	public static HomePage homepage;
	
	@BeforeClass
	public static void setUp() {
		File file = new File("src/main/resources/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());	
		driver = new ChromeDriver();
		homepage = new HomePage(driver);// Dependency Injection		
	}

	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
	

}
