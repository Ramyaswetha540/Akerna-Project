package stepdefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.DeepDOM;
import utilities.TestBase;

public class DeepDOMstepdefination extends TestBase {
	DeepDOM deepDom;

	// This method SetUp will read initialization parameters from the class
	// TestBase.java & launch chrome
	@Given("^user enters in to DeepDOM page$")
	public void user_enters_in_to_DeepDOM_page() {

		TestBase.intialization(prop.getProperty("DEEP_DOM_URL"));

	}

	// SELECT ROWS
	@Then("^the user selects \"([^\"]*)\"$")
	public void the_user_selects(String rowToSelect) throws Exception {
		deepDom = new DeepDOM();
		deepDom.large_Deep_DOM_Hearder();
		deepDom.selectRow(rowToSelect);
        driver.quit();
	}

}
