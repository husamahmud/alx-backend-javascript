import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  let res = [];
  const sized = [19, 20, 34];

  for (let i = 0; i < 3; i++) res.push(new ClassRoom(sized[i]));

  return res;
}

console.log(initializeRooms());
