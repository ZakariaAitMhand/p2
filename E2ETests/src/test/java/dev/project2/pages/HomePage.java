package dev.project2.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	WebDriver driver;

	public HomePage(WebDriver webDriver) {
		this.driver = webDriver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "loginButton")
	public WebElement loginDisplayButton;
	
	@FindBy(id = "loginButton")
	public WebElement loginUsernameInput;

	@FindBy(id = "loginButton")
	public WebElement loginPasswordInput;

	@FindBy(id = "loginButton")
	public WebElement loginButton;
	
	@FindBy(id = "loginButton")
	public WebElement lowToHighButton;
	
	@FindBy(id = "loginButton")
	public WebElement highToLowButton;
	
}
