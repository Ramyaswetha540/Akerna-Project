package stepdefinations;

import java.util.List;

import org.openqa.selenium.By;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ForgotPassword;
import utilities.TestBase;

public class Forgotpasswordstepdefination extends TestBase {
	ForgotPassword forgotPassword;

	// This method SetUp will read initialization parameters from the class
	// TestBase.java & launch chrome and validating fields
	@Given("^user navigates to ForgotPassword page$")
	public void user_navigates_to_ForgotPassword_page() {
		TestBase.intialization(prop.getProperty("FORGOT_PASSWORD_URL"));
		forgotPassword=new ForgotPassword();
		forgotPassword.validateAllFields();
		
	}

	//retrive data using Datatable
	@When("^the user enters emailid$")
	public void the_user_enters_emailid(DataTable emailid) {

		List<List<String>> data = emailid.raw();
		driver.findElement(By.id("email")).sendKeys(data.get(0).get(0));

	}

	// Calling click_Retrive_Button method to click to the Retrive Password Button
	@And("^clicks on Retrive password button$")
	public void clicks_on_Retrive_password_button() {
		
		forgotPassword.clickRetriveButton();
	}

	//  testMessage() in which captured message is stored in variable is validated.
	
	@Then("^the user will capture the message$")
	public void the_user_will_capture_the_message() {

		forgotPassword.testMessage();
       driver.quit();
	}
}
