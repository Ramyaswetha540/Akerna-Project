>IDE Used : Ecllipse oxygen 4.7.3a
>Java installed :jdk1.8.0_241
>Junit is integgrated to IDE 
>Chrome Driver 
JAVA should be installed in the Laptop/PC /Mac machine's
Providing steps to set Environment variable and Verify Installation of both Java and Maven:
>Steps to set Java Environment variable:
1.Windows 10 and Windows 8
2.In Search, search for and then select: System (Control Panel)
3.Click the Advanced system settings link.
4.Click Environment Variables. In the section System Variables, find the PATH environment variable and select it. Click Edit. If the PATH environment variable does not exist, click New.
In the Edit System Variable (or New System Variable) window, specify the value of the PATH environment variable. Click OK. Close all remaining windows by clicking OK.
>Verify Java Installation on your Machine-Command prompt
Windows
c:\> java -version
>Maven Installation:
Step 1 - Verify Java Installation on your Machine. ...
Step 2 - Set JAVA Environment. ...
Step 3 - Download Maven Archive. ...
Step 4 - Extract the Maven Archive. ...
Step 5 - Set Maven Environment Variables. ...
Step 6 - Add Maven bin Directory Location to System Path. ...
Step 7 - Verify Maven Installation.

>>Set Maven Environment Variables
Set the environment variables using system properties.
//Location -can be different based on installation
Windows:
M2_HOME=C:\Program Files\Apache Software Foundation\apache-maven-3.3.1 M2=%M2_HOME%\bin MAVEN_OPTS=-Xms256m -Xmx512m

>>Add Maven bin Directory Location to System Path
Append the string ;%M2% to the end of the system variable, Path.

>>Verify Maven Installation-command prompt
c:\> mvn --version

Instructions to Run the Project:
1.After Unzip the project 
2.Open the src/test/resources
3.Open the TestRunner class
4.Right click the TestRunnerclass ->click on Run As-->J Unit Test
5.After the test refresh the project for reports which are  generated

Run the project using maven test
1.After Unzip the project
2.Right click the project -->click on Run As-->Maven Test

>>Project Structure
There are four Source Folders in this project
1).src/main/java
Packages:
i).Pages
Classes:
a.Login_Page
b.Forgotpassword Page
c.DeepDom Page
2).src/test/java
i)testrunner- Testrunner maps feature files and stepdefination classes
3.src/test/resources
Packages:
1.Features files -where all the three requirement feature files are stored
a.Login_Page
b.Forgorpassword
c.DeepDOM
2.stepdefinations-where all the step defination classes are stored
a.Loginstepdefination
b.Forgotpasswordstepdefination
c.DeepDOM
4.src/main/resources
Packages:
1.Utility-where Base class is present to read properties and intialize browser
2.Configuration-where config.properties file is located- all the required information is stored in it.

Other Folders in the Project:
1.chromedriver-where chromedriver.exe is located
2.json_output-report
3.junit_xml-report
4.test-outout ->where index.html report is generated -Reports will be generated after running tests and refresh the browser
 

