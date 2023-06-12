const findTheOldest = function (people) {
  const oldestPerson = people.reduce((oldest, current) => {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    if (currentAge > oldestAge) {
      return current;
    } else {
      return oldest;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
