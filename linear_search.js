const friends = ["someone3", "someone4", "someone5", "someone4"];

for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  if (element == "someone3") {
    return i;
  }
}
