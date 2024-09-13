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

  // handle errors with response
  if (!response.ok) {
    throw new Error(`Error with response. Response status: ${response.status}`);
  }

  const colors = await response.json();

  // filter by name (if name contains string, case insensitive)
  const result = colors.filter((color) => {
    if (name) {
      return color.name.toLowerCase().includes(name.toLowerCase());
    }
    return true;
  });

  return result;
};

// Leave this here
export default fetchColors;
