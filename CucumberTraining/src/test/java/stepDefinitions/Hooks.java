package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before(order=1)
	public void testSetup(){
		
		System.out.println("This neeed to run before setup");
	}
	
	@Before(order=0)
	public void beforetest() {
		
		System.out.println("This is to test before tag");
	}
	
	@After(order=1)
	public void Last() {
		
		System.out.println("This need to run at the last");
	}
	
	@After(order=0)
	public void teardown() {
		
		System.out.println("This need to run at the time of quit");
	}

	
	
}
