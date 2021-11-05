export const buildExperimentQueryStr = (state) => {
  let queryStrings = [];
  // Experimental Conditions
  if (state.catalyst) {
    queryStrings.push(`sc=${state.catalyst}`);
  }
  if (state.tubeDiameter) {
    queryStrings.push(`ftd=${state.tdIneq}${state.tubeDiameter}`);
  }
  if (state.crossSectionalArea) {
    queryStrings.push(`fcsa=${state.csaIneq}${state.crossSectionalArea}`);
  }
  if (state.tubeLength) {
    queryStrings.push(`ftl=${state.tlIneq}${state.tubeLength}`);
  }
  if (state.basePressure) {
    queryStrings.push(`rbp=${state.bpIneq}${state.basePressure}`);
  }
  if (state.thickness) {
    queryStrings.push(`st=${state.thIneq}${state.thickness}`);
  }
  if (state.diameter) {
    queryStrings.push(`sd=${state.dmIneq}${state.diameter}`);
  }
  if (state.length) {
    queryStrings.push(`sl=${state.lenIneq}${state.length}`);
  }
  // Preparation
  if (state.prepName) {
    queryStrings.push(`psn=${state.prepName}`);
  }
  if (state.duration) {
    queryStrings.push(`psd=${state.durationIneq}${state.duration}`);
  }
  if (state.furnaceTemperature) {
    queryStrings.push(`psft=${state.furnaceTemperatureIneq}${state.furnaceTemperature}`);
  }
  if (state.furnacePressure) {
    queryStrings.push(`psfp=${state.furnacePressureIneq}${state.furnacePressure}`);
  }
  if (state.sampleLocation) {
    queryStrings.push(`pssl=${state.sampleLocationIneq}${state.sampleLocation}`);
  }
  if (state.heliumFlowRate) {
    queryStrings.push(`pshelfr=${state.heliumFlowRateIneq}${state.heliumFlowRate}`);
  }
  if (state.hydrogenFlowRate) {
    queryStrings.push(`pshydfr=${state.hydrogenFlowRateIneq}${state.hydrogenFlowRate}`);
  }
  if (state.carbonSource) {
    queryStrings.push(`rcs=${state.carbonSource}`);
  }
  if (state.carbonSourceFlowRate) {
    queryStrings.push(`pscsfr=${state.carbonSourceFlowRateIneq}${state.carbonSourceFlowRate}`);
  }
  if (state.argonFlowRate) {
    queryStrings.push(`psafr=${state.argonFlowRateIneq}${state.argonFlowRate}`);
  }
  if (state.coolingRate) {
    queryStrings.push(`pscr=${state.coolingRateIneq}${state.coolingRate}`);
  }
  // Properties
  if (state.growthCoverage) {
    queryStrings.push(`pgc=${state.growthCoverageIneq}${state.growthCoverage}`);
  }
  if (state.shape) {
    queryStrings.push(`ps=${state.shape}`);
  }
  if (state.averageThicknessOfGrowth) {
    queryStrings.push(`patog=${state.averageThicknessOfGrowthIneq}${state.averageThicknessOfGrowth}`);
  }
  if (state.stdDevOfGrowth) {
    queryStrings.push(`psdog=${state.stdDevOfGrowthIneq}${state.stdDevOfGrowth}`);
  }
  if (state.numberOfLayers) {
    queryStrings.push(`pnol=${state.numberOfLayersIneq}${state.numberOfLayers}`);
  }
  if (state.domainSize) {
    queryStrings.push(`pds=${state.domainSizeIneq}${state.domainSize}`);
  }
  // Provenance Information
  if (state.lastname) {
    queryStrings.push(`afn=${state.lastname}`);
  }
  if (state.firstname) {
    queryStrings.push(`aln=${state.firstname}`);
  }
  if (state.institution) {
    queryStrings.push(`ainst=${state.institution}`);
  }
  return queryStrings.join('&');
}
