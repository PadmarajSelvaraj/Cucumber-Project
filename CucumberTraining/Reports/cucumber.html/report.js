$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/Editbox.feature");
formatter.feature({
  "line": 1,
  "name": "This to test different Editbox functionalities",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 380400,
  "status": "passed"
});
formatter.before({
  "duration": 93001,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "clear the values in edit box field",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities;clear-the-values-in-edit-box-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@clearvalues"
    },
    {
      "line": 2,
      "name": "@editvalues"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on TestLeaf edit box page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clear the values in the edit box field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Cleared values in edit box should be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "EditboxStepDefinitions.user_is_on_TestLeaf_edit_box_page()"
});
formatter.result({
  "duration": 7058826900,
  "status": "passed"
});
formatter.match({
  "location": "EditboxStepDefinitions.user_clear_the_values_in_the_edit_box_field()"
});
formatter.result({
  "duration": 168397300,
  "status": "passed"
});
formatter.match({
  "location": "EditboxStepDefinitions.cleared_values_in_edit_box_should_be_returned()"
});
formatter.result({
  "duration": 640700700,
  "status": "passed"
});
formatter.after({
  "duration": 174599,
  "status": "passed"
});
formatter.after({
  "duration": 140499,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "# @editvalues"
    },
    {
      "line": 9,
      "value": "# Scenario: Enter the values into the edit box"
    },
    {
      "line": 10,
      "value": "#    Given User is on TestLeaf edit box page"
    },
    {
      "line": 11,
      "value": "#    When User enter the email id \"s.padmaraj@gmail.com\" in edit field"
    },
    {
      "line": 12,
      "value": "#    And user appended the text \"new value\" in edit field"
    },
    {
      "line": 13,
      "value": "#    Then inputted values should be present in edit box"
    }
  ],
  "line": 18,
  "name": "Enter the data values into the edit box",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@editdatavalues"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#   Given User is on TestLeaf edit box page"
    }
  ],
  "line": 20,
  "name": "enter the list of email id",
  "rows": [
    {
      "cells": [
        "UserName",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "s.duck@gmail.com",
        "checktest"
      ],
      "line": 22
    },
    {
      "cells": [
        "s.vetriz@gmail.com",
        "goodword"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "appended the appended texts \"\u003ctext\u003e\" in edit field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "value to check scenrio outline \"\u003cScenarioTest\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;",
  "rows": [
    {
      "cells": [
        "text",
        "ScenarioTest"
      ],
      "line": 29,
      "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;;1"
    },
    {
      "cells": [
        "text1",
        "sctext1"
      ],
      "line": 30,
      "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;;2"
    },
    {
      "cells": [
        "text2",
        "sctext2"
      ],
      "line": 31,
      "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 170099,
  "status": "passed"
});
formatter.before({
  "duration": 140501,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Enter the data values into the edit box",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@editdatavalues"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#   Given User is on TestLeaf edit box page"
    }
  ],
  "line": 20,
  "name": "enter the list of email id",
  "rows": [
    {
      "cells": [
        "UserName",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "s.duck@gmail.com",
        "checktest"
      ],
      "line": 22
    },
    {
      "cells": [
        "s.vetriz@gmail.com",
        "goodword"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "appended the appended texts \"text1\" in edit field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "value to check scenrio outline \"sctext1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditboxStepDefinitions.enter_the_list_of_email_id(DataTable)"
});
formatter.result({
  "duration": 10204900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text1",
      "offset": 29
    }
  ],
  "location": "EditboxStepDefinitions.appended_the_appended_texts_in_edit_field(String)"
});
formatter.result({
  "duration": 3317800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sctext1",
      "offset": 32
    }
  ],
  "location": "EditboxStepDefinitions.newtext(String)"
});
formatter.result({
  "duration": 309300,
  "status": "passed"
});
formatter.after({
  "duration": 132499,
  "status": "passed"
});
formatter.after({
  "duration": 115000,
  "status": "passed"
});
formatter.before({
  "duration": 155601,
  "status": "passed"
});
formatter.before({
  "duration": 116999,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Enter the data values into the edit box",
  "description": "",
  "id": "this-to-test-different-editbox-functionalities;enter-the-data-values-into-the-edit-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@editdatavalues"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "#   Given User is on TestLeaf edit box page"
    }
  ],
  "line": 20,
  "name": "enter the list of email id",
  "rows": [
    {
      "cells": [
        "UserName",
        "password"
      ],
      "line": 21
    },
    {
      "cells": [
        "s.duck@gmail.com",
        "checktest"
      ],
      "line": 22
    },
    {
      "cells": [
        "s.vetriz@gmail.com",
        "goodword"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "appended the appended texts \"text2\" in edit field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "value to check scenrio outline \"sctext2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "EditboxStepDefinitions.enter_the_list_of_email_id(DataTable)"
});
formatter.result({
  "duration": 723699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text2",
      "offset": 29
    }
  ],
  "location": "EditboxStepDefinitions.appended_the_appended_texts_in_edit_field(String)"
});
formatter.result({
  "duration": 473600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sctext2",
      "offset": 32
    }
  ],
  "location": "EditboxStepDefinitions.newtext(String)"
});
formatter.result({
  "duration": 233100,
  "status": "passed"
});
formatter.after({
  "duration": 127301,
  "status": "passed"
});
formatter.after({
  "duration": 125500,
  "status": "passed"
});
});