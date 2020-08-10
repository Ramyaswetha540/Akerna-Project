package pages;

import org.junit.Assert;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.TestBase;

public class ForgotPassword extends TestBase {
	// Identifying WebElements using Page Factory Approach of Page Object Model
	@FindBy(id = "email")
	WebElement enterEmail;

	@FindBy(xpath = "//button[@id='form_submit']")
	WebElement retriveButton;

	@FindBy(xpath = "//div[@id='content']")
	WebElement messageDisplayed;
	
	@FindBy(xpath="//div[@id='content']/div/h2")
	WebElement forgotPasswordHeader;

	// ForgotPassword constructor to initialize driver to WebElements
	public ForgotPassword() {
		PageFactory.initElements(driver, this);
	}
	//validating all fields in forgotpassword page 
	public void validateAllFields()
	{
		Assert.assertEquals("Forgot Password", forgotPasswordHeader.getText());
		Assert.assertTrue(enterEmail.isEnabled());
		Assert.assertTrue(retriveButton.isEnabled());	
		
	}

	// Click on submit button
	public void clickRetriveButton() {
		
	
		retriveButton.click();
	}

	// Capture Result message
	public void testMessage() {
		String displayMessage = messageDisplayed.getText();

		Assert.assertEquals("Your e-mail's been sent!", displayMessage);

	}

}
