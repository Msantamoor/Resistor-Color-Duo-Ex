//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const values = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
  const decoded = []
  decoded.push(values.indexOf(colors[0]))
  decoded.push(values.indexOf(colors[1]))
  return parseInt(decoded.join(''))

};
