export const buildExperimentQueryStr = (state) => {
  let queryStrings = [];
  if (state.carbonSource) {
    queryStrings.push(`rcs=${state.carbonSource}`);
  }
  if (state.basePressure) {
    queryStrings.push(`rbp=${state.bpIneq}${state.basePressure}`);
  }
  if (state.catalyst) {
    queryStrings.push(`sc=${state.catalyst}`);
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
  if (state.surfaceArea) {
    queryStrings.push(`ssa=${state.saIneq}${state.surfaceArea}`);
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
  if (state.lengthOfHeatedRegion) {
    queryStrings.push(`flhr=${state.lhrIneq}${state.lengthOfHeatedRegion}`);
  }
  return queryStrings.join('&');
}
