import React, {useContext} from "react";
import {ExperimentContext} from "../pages/ExperimentView";
import DetailEnvironmentalCondition from "../components/DetailEnvironmentalCondition";
import DetailFurnace from "../components/DetailFurnace";
import DetailSubstrate from "../components/DetailSubstrate";
import DetailRecipe from "../components/DetailRecipe";
import DetailProperties from "../components/DetailProperties";

const ExperimentDetails = () => {
  return (
    <div className='border rounded p-5'>
      <h3 className='text-center text-3xl font-bold mr-2 mb-4'>Details</h3>
      <DetailEnvironmentalCondition/>
      <DetailFurnace/>
      <DetailSubstrate/>
      <DetailProperties/>
      <DetailRecipe/>
    </div>
  )
}

export default ExperimentDetails