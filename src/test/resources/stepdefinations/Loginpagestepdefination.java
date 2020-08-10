package stepdefinations;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.Loginpage;
import utilities.TestBase;

public class Loginpagestepdefination extends TestBase{
//global variables are used by all methods
	Loginpage loginpage;
	
	
	@Given("^the user navigates to loginPage$")
	public void the_user_navigates_to_loginPage() 
	{
	    //Initialize the chrome driver and launch login page Url
		TestBase.intialization(prop.getProperty("LOGIN_PAGE_URL"));
		
	    // create object of Login page	
	       loginpage=new Loginpage();
	    
	    // validate title of Login page using object reference
	       loginpage.validateLoginpageFields();
		
	}

	@When("^the user enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void the_user_enters_username_and_password(String userName, String password)  {
	  
		//passing login details 
		loginpage.loginDetails(userName, password);

	}

	@When("^the user clicks on login button$")
	public void the_user_clicks_on_login_button()  {
	    
		//click on login button 
		loginpage.clickOnLoginButton();
		
	}

    

    @Then("^the user able to see login message \"([^\"]*)\"$")
    public void the_user_able_to_see_login_message(String login_message) {
    
	//validate login flash messages	
		loginpage.login_Message(login_message);
	
		driver.quit();
		
	    
	}

}

