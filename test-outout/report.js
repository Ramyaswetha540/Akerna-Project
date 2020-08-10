$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Req1_Loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Application",
  "description": "",
  "id": "login-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Description:User enter the loginpage and first enters the valid credentials and validate"
    },
    {
      "line": 4,
      "value": "#the Login secure message next,user enter the username and inalid password and validate the"
    },
    {
      "line": 5,
      "value": "#login error message"
    }
  ],
  "line": 9,
  "name": "Login Test functionality with valid username and password Credentials",
  "description": "",
  "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the user navigates to loginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user enters username \"\u003cuserName\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user able to see login message \"\u003clogin_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 15,
      "value": "#For security reasons username and passwords are stored in config.properties"
    }
  ],
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "login_message"
      ],
      "line": 17,
      "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;;1"
    },
    {
      "cells": [
        "Valid",
        "Valid",
        "You logged into a secure area!"
      ],
      "line": 18,
      "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;;2"
    },
    {
      "cells": [
        "Valid",
        "Invalid",
        "Your password is invalid!"
      ],
      "line": 19,
      "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Login Test functionality with valid username and password Credentials",
  "description": "",
  "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the user navigates to loginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user enters username \"Valid\" and password \"Valid\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user able to see login message \"You logged into a secure area!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Loginpagestepdefination.the_user_navigates_to_loginPage()"
});
formatter.result({
  "duration": 6639171300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 26
    },
    {
      "val": "Valid",
      "offset": 47
    }
  ],
  "location": "Loginpagestepdefination.the_user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 145516600,
  "status": "passed"
});
formatter.match({
  "location": "Loginpagestepdefination.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 213412900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You logged into a secure area!",
      "offset": 36
    }
  ],
  "location": "Loginpagestepdefination.the_user_able_to_see_login_message(String)"
});
formatter.result({
  "duration": 681929200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Test functionality with valid username and password Credentials",
  "description": "",
  "id": "login-application;login-test-functionality-with-valid-username-and-password-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the user navigates to loginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user enters username \"Valid\" and password \"Invalid\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user able to see login message \"Your password is invalid!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Loginpagestepdefination.the_user_navigates_to_loginPage()"
});
formatter.result({
  "duration": 5713563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid",
      "offset": 26
    },
    {
      "val": "Invalid",
      "offset": 47
    }
  ],
  "location": "Loginpagestepdefination.the_user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 138334300,
  "status": "passed"
});
formatter.match({
  "location": "Loginpagestepdefination.the_user_clicks_on_login_button()"
});
formatter.result({
  "duration": 204500100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid!",
      "offset": 36
    }
  ],
  "location": "Loginpagestepdefination.the_user_able_to_see_login_message(String)"
});
formatter.result({
  "duration": 692675800,
  "status": "passed"
});
formatter.uri("Req2_Forgotpassword.feature");
formatter.feature({
  "line": 1,
  "name": "Forgot Password",
  "description": "",
  "id": "forgot-password",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Description:"
    },
    {
      "line": 4,
      "value": "#User enter in to ForgotPassword page and validates fields avaliable in the page then enters"
    },
    {
      "line": 5,
      "value": "#email address in the Email field and click on retrive button to capture the message in"
    },
    {
      "line": 6,
      "value": "#variable and validate the captured message"
    }
  ],
  "line": 10,
  "name": "Retrive ForgotPassword",
  "description": "",
  "id": "forgot-password;retrive-forgotpassword",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user navigates to ForgotPassword page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user enters emailid",
  "rows": [
    {
      "cells": [
        "Jeffrey.smathers@mfreeway.com"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clicks on Retrive password button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user will capture the message",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpasswordstepdefination.user_navigates_to_ForgotPassword_page()"
});
formatter.result({
  "duration": 6019200100,
  "status": "passed"
});
formatter.match({
  "location": "Forgotpasswordstepdefination.the_user_enters_emailid(DataTable)"
});
formatter.result({
  "duration": 75295600,
  "status": "passed"
});
formatter.match({
  "location": "Forgotpasswordstepdefination.clicks_on_Retrive_password_button()"
});
formatter.result({
  "duration": 374683500,
  "status": "passed"
});
formatter.match({
  "location": "Forgotpasswordstepdefination.the_user_will_capture_the_message()"
});
formatter.result({
  "duration": 644499600,
  "status": "passed"
});
formatter.uri("Req3_DeepDOM.feature");
formatter.feature({
  "line": 1,
  "name": "DeepDOM feature",
  "description": "",
  "id": "deepdom-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Description:"
    },
    {
      "line": 4,
      "value": "#User enter into DeepDom page validate the large and DeepDOM header and selects the Sibilings"
    },
    {
      "line": 5,
      "value": "#header,Row 1.3 and Row 13.2"
    }
  ],
  "line": 6,
  "name": "Selection of rows",
  "description": "",
  "id": "deepdom-feature;selection-of-rows",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters in to DeepDOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user selects \"\u003crowToSelect\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "deepdom-feature;selection-of-rows;",
  "rows": [
    {
      "cells": [
        "rowToSelect"
      ],
      "line": 12,
      "id": "deepdom-feature;selection-of-rows;;1"
    },
    {
      "cells": [
        "Sibilings"
      ],
      "line": 13,
      "id": "deepdom-feature;selection-of-rows;;2"
    },
    {
      "cells": [
        "1.3"
      ],
      "line": 14,
      "id": "deepdom-feature;selection-of-rows;;3"
    },
    {
      "cells": [
        "13.2"
      ],
      "line": 15,
      "id": "deepdom-feature;selection-of-rows;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Selection of rows",
  "description": "",
  "id": "deepdom-feature;selection-of-rows;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters in to DeepDOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user selects \"Sibilings\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeepDOMstepdefination.user_enters_in_to_DeepDOM_page()"
});
formatter.result({
  "duration": 5755197200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sibilings",
      "offset": 18
    }
  ],
  "location": "DeepDOMstepdefination.the_user_selects(String)"
});
formatter.result({
  "duration": 3694489100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Selection of rows",
  "description": "",
  "id": "deepdom-feature;selection-of-rows;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters in to DeepDOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user selects \"1.3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeepDOMstepdefination.user_enters_in_to_DeepDOM_page()"
});
formatter.result({
  "duration": 5843098600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.3",
      "offset": 18
    }
  ],
  "location": "DeepDOMstepdefination.the_user_selects(String)"
});
formatter.result({
  "duration": 3674097500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Selection of rows",
  "description": "",
  "id": "deepdom-feature;selection-of-rows;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enters in to DeepDOM page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user selects \"13.2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DeepDOMstepdefination.user_enters_in_to_DeepDOM_page()"
});
formatter.result({
  "duration": 5894745500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.2",
      "offset": 18
    }
  ],
  "location": "DeepDOMstepdefination.the_user_selects(String)"
});
formatter.result({
  "duration": 3698984400,
  "status": "passed"
});
});