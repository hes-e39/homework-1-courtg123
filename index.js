import fetch from 'node-fetch';
// Recommend using node-fetch for those familiar with JS fetch

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */
const fetchColors = async ({ name, hex, compName, compHex }) => {
  const response = await fetch(COLORS);

  const colors = await response.json();

  // return colors, no filters yet
  return colors;

  //throw Error('Not implemented');
};

// testing if colors returned
fetchColors({}).then(colors => {
  console.log(colors);
});

// Leave this here
export default fetchColors;
