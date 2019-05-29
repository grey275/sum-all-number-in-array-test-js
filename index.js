function sumItems(array) {
  if (typeof array === 'number') {
    return array;
  }
  return array.reduce((sum, element) => sum + sumItems(element), 0);
}

module.exports = sumItems;