// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driver){
    return driver.toLowerCase() == string.toLowerCase()
  });
};

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver){
    first = "${driver[0]} + ${driver[1]}"
    second = "${string[0]} + ${string[1]}"
    return
  });
};
