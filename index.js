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

  // filters
  const result = colors.filter((color) => {
    // all colors whose name contains (includes) string, case insensitive
    if (name) {
      return color.name.toLowerCase().includes(name.toLowerCase());
    }
    // all colors whose hex code equals given hex code
    if (hex) {
      return color.hex === hex
    }
    // all complementary colors whose name contains string, case insensitive
    if (compName) {
      return color.comp.some(complementaryColor =>
        complementaryColor.name.toLowerCase().includes(compName.toLowerCase())
      );
    }
    // all complementary colors whose hex code equals given hex code
    if (compHex) {
      return color.comp.some(complementaryColor =>
        complementaryColor.hex.toLowerCase() === compHex.toLowerCase()
      );
    }
    return true;
  });

  return result;
};

// Leave this here
export default fetchColors;
