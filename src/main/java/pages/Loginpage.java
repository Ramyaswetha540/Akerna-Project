package pages;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.TestBase;

public class Loginpage extends TestBase {
	// Identifying WebElements using Page Factory Approach of Page Object Model

	@FindBy(id = "username")
	WebElement enteruserName;

	@FindBy(id = "password")
	WebElement enterPassword;

	@FindBy(xpath = "//button[@class='radius']")
	WebElement clickloginButton;

	@FindBy(xpath = "//div[@id='flash-messages']/div")
	WebElement message;

	// Login page constructor to initialize driver to WebElements using Page Factory
	// class
	public Loginpage() {
		PageFactory.initElements(driver, this);
	}

	// 1.validate title and check all fields of the login page are enabled or not
	public void validateLoginpageFields() {

		// validate login page title using Assert command
		Assert.assertEquals("The Internet", driver.getTitle());

	}

	// 2. Read login credentials from config.properties which is located in
	// src/main/resources folder
	public void loginDetails(String userName, String password) {
		String validUserName = prop.getProperty("VALID_USER_NAME");
		String validPassword = prop.getProperty("VALID_PASSWORD");
		String inValidPassword = prop.getProperty("INVALID_PASSWORD");

		if (userName.equals("Valid") && password.equals("Valid")) {
			enteruserName.sendKeys(validUserName);
			enterPassword.sendKeys(validPassword);
		} else if (userName.equals("Valid") && password.equals("Invalid")) {
			enteruserName.sendKeys(validUserName);
			enterPassword.sendKeys(inValidPassword);
		}

	}

	// 3. click on login button
	public void clickOnLoginButton() {
		clickloginButton.click();
	}

	// 4.Displaying login messages
	public void login_Message(String login_message) {
		Assert.assertTrue(message.isDisplayed());
		Assert.assertTrue(message.getText().contains(login_message));

		

	}

}
