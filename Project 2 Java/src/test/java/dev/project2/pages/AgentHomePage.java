package dev.project2.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AgentHomePage {
	WebDriver driver;

	public AgentHomePage(WebDriver webDriver) {
		this.driver = webDriver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "agentLoginButton")
	public WebElement loginDisplayButton;
	
	@FindBy(id = "usernameInput")
	public WebElement loginUsernameInput;

	@FindBy(id = "passwordInput")
	public WebElement loginPasswordInput;

	@FindBy(id = "loginButton")
	public WebElement loginButton;
	
	@FindBy(id = "agentLogoutButton")
	public WebElement logoutButton;
	
	@FindBy(id = "agentCreateProperty")
	public WebElement createPropertyDisplayButton;
	
	@FindBy(id = "PriceInput")
	public WebElement propertyPriceInput;
	
	@FindBy(id = "SurfaceInput")
	public WebElement squareFeetInput;
	
	@FindBy(id = "LocationInput")
	public WebElement addressInput;
	
	@FindBy(id = "propertyTypeInput")
	public WebElement propertyTypeSelector;
	
	@FindBy(id = "agentPropertyCreation")
	public WebElement createPropertyButton;
	
	@FindBy(id = "uploadImageButton")
	public WebElement uploadImageButton;
	
	@FindBy(id = "CreatePropertyContainer")
	public WebElement propertyCard;
	
	@FindBy(className = "mat-option-text")
	public WebElement propertyType;
	
	@FindBy(id = "deletePropertyIcon")
	public WebElement deleteButton;
}
