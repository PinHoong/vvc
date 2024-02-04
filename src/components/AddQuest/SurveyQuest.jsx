import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

function SurveyQuest() {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(sender.data["Through which gate do you exit from work?"]);
    const payload = {
      body: sender.data,
    };
    fetch(
      "https://rg6t6otdnf.execute-api.ap-southeast-1.amazonaws.com/dev/foodChoice",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response:", data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error if needed
      });
  });
  return <Survey model={survey} />;
}

export default SurveyQuest;
