const cleanSet = (set, startString) => {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  }
  return result ? result.slice(0, -1) : '';
};

export default cleanSet;
