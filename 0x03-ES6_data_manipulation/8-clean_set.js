const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((state) => {
    if (typeof state === 'string' && state.startsWith(startString)) {
      strings.push(state.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
