function moveLastElemOf(fromArray, toArray) {
  const updatedFromArray = [...fromArray];
  const poppedItem = updatedFromArray.pop();
  const updatedToArray = [...toArray, poppedItem];

  return [updatedFromArray, updatedToArray];
}

export { moveLastElemOf };
