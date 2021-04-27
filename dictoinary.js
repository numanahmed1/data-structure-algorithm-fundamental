class Dictionary {
  constructor() {
    this.dictionary = {};
  }
  add(key, value) {
    this.dictionary[key] = value;
  }
  get(key) {
    return this.dictionary[key];
  }
}

const phoneBook = new Dictionary();
phoneBook.add("Fahiyan", "01734343343");
phoneBook.add("Sayed", "0173434334444");
phoneBook.add("Sarwar", "017343433555");
console.log(phoneBook.dictionary);
const sayed = phoneBook.get("Sayed");
console.log(sayed);
