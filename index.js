dogList = document.querySelector("#dogList")


function wakeDog(dogName, dogBreed) {
    let wake = `Wake ${dogName} the ${dogBreed}`
    console.log(wake);
    return wake
  } 
  function leashDog(dogName, dogBreed) {
      let leash = `Leash ${dogName} the ${dogBreed}`
    console.log(leash);
    return leash
  } 
  function walkToPark(dogName, dogBreed) {
      let walk = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walk);
    return walk
  } 
  function throwFrisbee(dogName, dogBreed) {
    let throwFris = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwFris)
    return throwFris
    }   
function walkHome(dogName, dogBreed) {
    let walkHome = `Walk home with ${dogName} the ${dogBreed}`
  console.log(walkHome);
  return walkHome
}   
function unleashDog(dogName, dogBreed) {
    let unleash = `Unleash ${dogName} the ${dogBreed}`
  console.log(unleash);
  return unleash
} 

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    return routine.map(x => x(dogName, dogBreed))
}

