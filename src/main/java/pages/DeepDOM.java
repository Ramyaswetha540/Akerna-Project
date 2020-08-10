package pages;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.TestBase;

public class DeepDOM extends TestBase {

	@FindBy(xpath = "//div[@id='content']/div/h3")
	WebElement largeanddeepdmo;
	@FindBy(xpath = "//div[@id='content']/div/h4[2]")
	WebElement sibilings;
	@FindBy(xpath = "//div[@id='sibling-1.3']")
	WebElement row1_3;
	@FindBy(xpath = "//div[@id='sibling-13.2']")
	WebElement row13_2;

	public DeepDOM() {
		PageFactory.initElements(driver, this);
	}

	// validate large Deep Dom hearder text
	public void large_Deep_DOM_Hearder() {
		String headerText = driver.findElement(By.xpath("//div[@id='content']/div/h3")).getText();
		Assert.assertEquals("Large & Deep DOM", headerText);

	}

	JavascriptExecutor js = (JavascriptExecutor) driver;

	// This method used to select the rows based on conditions
	public void selectRow(String rowToSelect) {
		if (rowToSelect.equals("Sibilings")) {
			selectsibilings();
		} else if (rowToSelect.equals("1.3")) {
			selectRow1_3();
		} else if (rowToSelect.equals("13.2")) {
			selectRow13_2();
		}
	}
//JavaexecuteAsyncScript is used so the the User will able to see the selected rows
	public void selectsibilings() {
		try {
			driver.manage().timeouts().setScriptTimeout(3, TimeUnit.SECONDS);
			js.executeAsyncScript(
					"arguments[0].setAttribute('style','border : solid red; background-color:	#CD5C5C ; outline: dashed green;');",
					sibilings);

		} catch (Exception e) {
			System.out.print(e);
		}
	}

	public void selectRow1_3() {
		try {
			driver.manage().timeouts().setScriptTimeout(3, TimeUnit.SECONDS);

			js.executeAsyncScript(
					"arguments[0].setAttribute('style','border : solid red; background-color: #CD5C5C ; outline: dashed green;');",
					row1_3);
		} catch (Exception e) {
			System.out.print(e);
		}

	}

	public void selectRow13_2() {
	//	JavaexecuteScript is user to Scrolldown the page to the row which should be selected
		js.executeScript("window.scrollBy(0,500)");
		try {
			driver.manage().timeouts().setScriptTimeout(3, TimeUnit.SECONDS);
			js.executeAsyncScript(
					"arguments[0].setAttribute('style','border : solid red; background-color: #CD5C5C ; outline: dashed green;');",
					row13_2);
		} catch (Exception e) {
			System.out.print(e);
		}

	}

}
