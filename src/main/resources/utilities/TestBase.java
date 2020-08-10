package utilities;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	public static WebDriver driver;
	public static Properties prop;

	// Read config.properties file
	public TestBase() {
		prop = new Properties();
		try {
			//
			FileInputStream fis = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\main\\resources\\configuration\\config.properties");
			prop.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	// Initializing Browser
	public static WebDriver intialization(String url) {
		driver = null;
		String browsername = prop.getProperty("BROWSER");
		if (browsername.equals("chrome")) {
			// Set Chrome driver to the system property by mentioning the driver path
			String path = System.getProperty("user.dir");
			System.setProperty("webdriver.chrome.driver", path + "\\chromedriver\\chromedriver.exe");
			driver = new ChromeDriver();
		}

		driver.get(url);
		driver.manage().window().maximize();
		// PageLodeTime is the time taken to load the page
		driver.manage().timeouts().pageLoadTimeout(Timeoutsutil.pageload_timeouts, TimeUnit.SECONDS);
		// Implicitly wait is given to WebElements to load
		driver.manage().timeouts().implicitlyWait(Timeoutsutil.impilicit_wait, TimeUnit.SECONDS);

		return driver;

	}
	// // get URL used to launch the required page
	// public static void launchPage(String url)
	// {
	// driver.get(url);
	// }

}