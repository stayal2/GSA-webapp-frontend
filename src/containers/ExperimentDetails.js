import React from "react";
import DetailEnvironmentalCondition from "../components/DetailEnvironmentalCondition";
import DetailFurnace from "../components/DetailFurnace";
import DetailSubstrate from "../components/DetailSubstrate";
import DetailRecipe from "../components/DetailRecipe";
import DetailProperties from "../components/DetailProperties";
import DetailAuthors from "../components/DetailAuthors";

const ExperimentDetails = () => {
  return (
    <>
      <DetailAuthors/>
      <DetailEnvironmentalCondition/>
      <DetailFurnace/>
      <DetailSubstrate/>
      <DetailProperties/>
      <DetailRecipe/>
    </>
  )
}

export default ExperimentDetails