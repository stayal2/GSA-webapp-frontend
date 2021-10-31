import React from 'react';

const ExperimentRow = ({ ambientTemperature, avgThicknessOfGrowth, basePressure, carbonSource, catalyst,
  crossSectionalArea, date, dewPoint, diameter, domainSize, growthCoverage, len, lenHeatedRegion, material,
  numLayers, shape, stddevGrowth, surfaceArea, thichness, tubeDiameter, tubeLen }) => {

  return (
    <tr>
      <td >{ambientTemperature}</td>
      <td >{avgThicknessOfGrowth}</td>
      <td >{basePressure}</td>
      <td >{carbonSource}</td>
      <td >{catalyst}</td>
      <td >{crossSectionalArea}</td>
      <td >{date}</td>
      <td >{dewPoint}</td>
      <td >{diameter}</td>
      <td >{domainSize}</td>
      <td >{growthCoverage}</td>
      <td >{len}</td>
      <td >{lenHeatedRegion}</td>
      <td >{material}</td>
      <td >{numLayers}</td>
      <td >{shape}</td>
      <td >{stddevGrowth}</td>
      <td >{surfaceArea}</td>
      <td >{thichness}</td>
      <td >{tubeDiameter}</td>
      <td >{tubeLen}</td>
    </tr>
  );
};

export default ExperimentRow;
