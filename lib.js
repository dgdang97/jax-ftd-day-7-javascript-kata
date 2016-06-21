/*
  TODO: Implement empty function bodies according to their requirements
*/

'use strict'

function createGrowthModel (lengthToWingspan, leavesEatenToWeight) {
  return {
    lengthToWingspan,
    leavesEatenToWeight
  }
}

/**
 * Given an array of growth models, this function finds their average and returns
 * this result as a new growth model object
 *
 * @param growthModels [Array<GrowthModel>] the growth models to average.
 *                                          If empty or undefined, return
 *                                          an undefined growth model
 *
 * @return a GrowthModel object
 */
function averageGrowthModel (growthModels) {
  if (growthModels.length > 0) {
    let sumGrowth = growthModels.reduce(
      (acc, sum) =>
        createGrowthModel(
            acc.lengthToWingspan + sum.lengthToWingspan,
            acc.leavesEatenToWeight + sum.leavesEatenToWeight
          ),
        createGrowthModel(0, 0))
    return createGrowthModel(
      sumGrowth.lengthToWingspan / growthModels.length,
      sumGrowth.leavesEatenToWeight / growthModels.length)
  } else {
    return undefined
  }
}

module.exports = {
  createGrowthModel,
  averageGrowthModel
}
