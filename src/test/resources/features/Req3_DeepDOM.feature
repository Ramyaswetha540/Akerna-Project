Feature: DeepDOM feature 

#Description:
#User enter into DeepDom page validate the large and DeepDOM header and selects the Sibilings
#header,Row 1.3 and Row 13.2
Scenario Outline: Selection of rows 

	Given user enters in to DeepDOM page 
	Then the user selects "<rowToSelect>" 
	
	Examples: 
		|rowToSelect|
		|Sibilings|
		|1.3|
		|13.2|
		
		
