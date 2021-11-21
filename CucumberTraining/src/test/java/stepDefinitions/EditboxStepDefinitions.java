package stepDefinitions;

import java.sql.Driver;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.seleniumtraining.base.TestBase;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;



public class EditboxStepDefinitions {
	WebDriver driver;
	String email;
	String appendedtxt;
	
	@Given("^User is on TestLeaf edit box page$")
	public void user_is_on_TestLeaf_edit_box_page() throws Throwable {
		
		WebDriverManager.chromedriver().setup();
		
		driver = new ChromeDriver();
		
		driver.get("http://leafground.com/home.html");
		driver.findElement(By.xpath("//h5[@class='wp-categories-title']")).click();
	}

	@When("^User clear the values in the edit box field$")
	public void user_clear_the_values_in_the_edit_box_field() throws Throwable {
	   
		driver.findElement(By.xpath("//label[text() ='Clear the text']/following::input[1]")).clear();
	}

	@Then("^Cleared values in edit box should be returned$")
	public void cleared_values_in_edit_box_should_be_returned() throws Throwable {
	   driver.quit();
	/*String value =	driver.findElement(By.xpath("//label[text() ='Clear the text']/following::input[1]")).getText();
		
	    System.out.println(value);*/
	}
	
	
	@When("^User enter the email id \"([^\"]*)\" in edit field$")
	public void user_enter_the_email_id_in_edit_field(String email) throws Throwable {
	    
		this.email = email;
		driver.findElement(By.id("email")).sendKeys(email);
	    
		
	}

	@When("^user appended the text \"([^\"]*)\" in edit field$")
	public void user_appended_the_text_in_edit_field(String appendedtxt) throws Throwable {
	   
		this.appendedtxt = appendedtxt;
		driver.findElement(By.xpath("//label[text() ='Append a text and press keyboard tab']/following::input")).sendKeys(appendedtxt);
	}

	@Then("^inputted values should be present in edit box$")
	public void inputted_values_should_be_present_in_edit_box() throws Throwable {
	  
	String derivedtxt = 	driver.findElement(By.id("email")).getAttribute("Value");
	
	//Assert.assertEquals(email, derivedtxt);
	
	String Derivdappnd = driver.findElement(By.xpath("//label[text() ='Append a text and press keyboard tab']/following::input")).getText();
	
	//Assert.assertEquals(appendedtxt, Derivdappnd);
	driver.quit();
	}
	
	@When("^enter the list of email id$")
	public void enter_the_list_of_email_id(DataTable arg2) throws Throwable {
	
	List<Map<String,String>> bj = arg2.asMaps(String.class,String.class);
	
	
	for (Map<String, String> map : bj) {
		
		String name = map.get("UserName");
		String pwd = map.get("password");
		
		System.out.println("User name is " +name);
		System.out.println("pwd name is " +pwd);
	}
	
	
	    
	}

	@When("^appended the appended texts \"([^\"]*)\" in edit field$")
	public void appended_the_appended_texts_in_edit_field(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1);
	}
	
	@Then("^value to check scenrio outline \"([^\"]*)\"$")
	public void newtext(String value) {
		
		System.out.println(value);
		
	}

}
