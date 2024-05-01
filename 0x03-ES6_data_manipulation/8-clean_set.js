export default function cleanSet(set, startString) {
  const newSet = new Set();
  let res = '';

  if (startString === '') {
    return '';
  }

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newSet.add(value.slice(startString.length));
    }
  });

  newSet.forEach((value) => {
    res += value;
    res += '-';
  });

  return res.slice(0, res.length - 1);
}
