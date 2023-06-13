const findTheOldest = function (people) {
  const dateobj = new Date();
  const currentYear = dateobj.getFullYear();

  const oldestPerson = people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);

    if (currentAge > oldestAge) {
      return current;
    } else {
      return oldest;
    }
  });

  return oldestPerson;
};

const getAge = function (person) {
  const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
  return yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
