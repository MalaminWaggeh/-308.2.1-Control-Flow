const PI = 3.1415;
const initialRadius = 5;
const minSpacePerPlant = 0.8;

function calculateArea(radius) {
  return PI * radius * radius;
}

function simulatePlantGrowthWithoutPruning(weeks, initialPlantCount) {
  let currentRadius = initialRadius;
  let currentPlantCount = initialPlantCount;

  for (let week = 1; week <= weeks; week++) {
    currentPlantCount *= 2;
    currentRadius = Math.sqrt(calculateArea(currentRadius) / PI);
  }

  return {
    additionalSpace:
      calculateArea(initialRadius) - minSpacePerPlant * currentPlantCount,
    expandedRadius: currentRadius,
  };
}

try {
  const result = simulatePlantGrowthWithoutPruning(10, 100);

  if (result.additionalSpace > 0) {
    throw new Error(
      "Not enough space for 100 plants. Consider pruning or planting fewer plants."
    );
  }

  console.log(
    `Expanded garden radius: ${result.expandedRadius.toFixed(2)} meters`
  );
} catch (error) {
  console.error("Error:", error.message);
}
