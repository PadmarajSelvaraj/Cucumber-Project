Feature: This to test different Editbox functionalities
@clearvalues @editvalues  
Scenario: clear the values in edit box field
    Given User is on TestLeaf edit box page
    When User clear the values in the edit box field
    Then Cleared values in edit box should be returned
    
# @editvalues  
# Scenario: Enter the values into the edit box
#    Given User is on TestLeaf edit box page
#    When User enter the email id "s.padmaraj@gmail.com" in edit field
#    And user appended the text "new value" in edit field 
#    Then inputted values should be present in edit box    
    
    
    
 @editdatavalues  
 Scenario Outline: Enter the data values into the edit box
 #   Given User is on TestLeaf edit box page
   When enter the list of email id
    |UserName         |password  |
    |s.duck@gmail.com|checktest |
    |s.vetriz@gmail.com|goodword|    
   And appended the appended texts "<text>" in edit field 
  Then value to check scenrio outline "<ScenarioTest>"
  
Examples:

|text |ScenarioTest|
|text1|sctext1     |
|text2|sctext2     |
