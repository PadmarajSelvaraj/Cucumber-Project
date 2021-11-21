package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(features="featureFiles/Editbox.feature", 
glue ="stepDefinitions",dryRun = false,monochrome = true,
tags = {}, 
plugin = {"json:Reports/cucumber.json","html:Reports/cucumber.html"})
public class RunnerClass {
	
}

//  ~ this is ignore test case

//and = tags = {"@clearvalues","@editvalues"}, or = tags = {"@clearvalues,@editvalues"},