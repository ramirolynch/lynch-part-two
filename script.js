let energy = 0;
let happiness = 0;

let name = prompt("What is the name of your pet?");

for (let i = 0; i < 6; i++) {
  
let activity = prompt("feed, pet or walk?");

if (activity === "feed") {
   energy += 2;
} 
else if (activity === "pet") {
  happiness += 1;
}
  
else if (activity === "walk" && energy > 0) {
  happiness += 2;
  energy -= 1;
}
else 
{
alert("Not enough energy to enjoy a walk");
};
  
};

alert(name + " has " + happiness + " happiness and " + energy + " energy levels.");




