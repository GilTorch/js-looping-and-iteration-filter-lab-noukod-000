// Code your solution in this file
function findMatching(array,name){
  return array.filter(function(element){
    return element.toLowerCase()==name.toLowerCase();
  })
}
function fuzzyMatch(array,letters){
  return array.filter((element)=>element.startsWith(letters));
}

function matchName(drivers,name){
  return drivers.filter((element)=>return element.name===name);
}
