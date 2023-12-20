// Code your solution here
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  const driversArray = ["John", "faith", "Jack", "allan"];
  const driverObjects = [
    { name: "John", hometown: "New York" },
    { name: "faith", hometown: "Los Angeles" },
    { name: "Jack", hometown: "Chicago" },
    { name: "allan", hometown: "Miami" }
  ];
  
  console.log(findMatching(driversArray, "faith")); 
  console.log(fuzzyMatch(driversArray, "ja")); 
  console.log(matchName(driverObjects, "faith"));  