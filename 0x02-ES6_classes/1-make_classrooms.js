import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  let res = [];
  res.push(new ClassRoom(19));
  res.push(new ClassRoom(20));
  res.push(new ClassRoom(34));
  return res;
}
