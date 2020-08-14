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
import dev.project2.pages.AgentLoginPage;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/ManagePropertiesManager.feature", glue = "dev.project2.steps/AgentSteps.java")
public class AgentRunner {

	public static WebDriver driver;
	public static AgentLoginPage alpage;
	
	@BeforeClass
	public static void setup() {
		File file = new File("src/main/resources/chromedriver_win32/chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
		driver = new ChromeDriver();
		alpage = new AgentLoginPage(driver);
	}
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
	
	
}
