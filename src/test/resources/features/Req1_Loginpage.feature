Feature: Login Application 

#Description:User enter the loginpage and first enters the valid credentials and validate 
#the Login secure message next,user enter the username and inalid password and validate the
#login error message 



Scenario Outline: Login Test functionality with valid username and password Credentials 

	Given the user navigates to loginPage 
	When the user enters username "<userName>" and password "<password>" 
	And the user clicks on login button 
	Then the user able to see login message "<login_message>" 
	#For security reasons username and passwords are stored in config.properties	
	Examples: 
		|userName|password|login_message|
		|Valid|Valid|You logged into a secure area!|
		|Valid|Invalid|Your password is invalid!|