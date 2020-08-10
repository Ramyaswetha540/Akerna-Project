Feature: Forgot Password 

#Description:
#User enter in to ForgotPassword page and validates fields avaliable in the page then enters
#email address in the Email field and click on retrive button to capture the message in 
#variable and validate the captured message


@RegressionTest 
Scenario: Retrive ForgotPassword 

	Given user navigates to ForgotPassword page 
	When the user enters emailid 
		|Jeffrey.smathers@mfreeway.com|
	And clicks on Retrive password button 
	Then the user will capture the message 
