function hash(key, arrayLen) {
  const PRIME = 31;
  return key
    .split("")
    .slice(0, Math.min(key.length, 100))
    .reduce((acc, char, i) => {
      acc = (acc * PRIME + (char.charCodeAt(0) - 96)) % arrayLen;
      return acc;
    }, 0);
}


class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const PRIME = 31;
    return key
      .split("")
      .slice(0, Math.min(key.length, 100))
      .reduce((acc, char, i) => {
        acc = (acc * PRIME + (char.charCodeAt(0) - 96)) % this.keyMap.length;
        return acc;
      }, 0);
  }

  // Handle collisions via separate chaining
  set(key, value) {
    let idx = this._hash(key);
    let unique = true;
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    for(let item in this.keyMap[idx]) {
      if(item[0] === key) {
        unique = false;
        item[1] = value;
        break;
      }
    }
    if(unique) this.keyMap[idx].push([key, value]);
    return idx;
  }

  get(key) {
    let idx = this._hash(key);
    let lst =
      this.keyMap[idx] && this.keyMap[idx].filter((item) => item[0] === key);
    return lst && lst[0][1];
  }

  _extract(type = "keys") {
    let idx = type === "keys" ? 0 : 1;
    let lst = [];
    for (let item of this.keyMap) {
      if (!item) continue;
      for (let subitem of item) {
        lst.push(subitem[idx]);
      }
    }
    return lst;
  }

  keys() {
    return this._extract("keys");
  }

  values(noRepeat = true) {
    let values = this._extract("values")
    return noRepeat ? Array.from(new Set(values)) : values;
  }
}

let ht = new HashTable();
console.log(ht.set("helloworld", "world!!!"));
console.log(ht.set("helloyou", "you!!!!"));
console.log(ht.set("hellome", "me!!!!"));
console.log(ht.set("hellous", "us!!!!"));
console.log(ht.set("hellojohn", "john!!!!"));
console.log(ht.set("hellojohn", "johndoe!!!!"));
console.log(ht.set("hellojohndoe", "johndoe!!!!"));
console.log(ht.set("hellojane", "jane!!!!"));

console.log(ht.get("helloworld"));
console.log(ht.get("helloyou"));
console.log(ht.get("hellome"));
console.log(ht.get("hellous"));
console.log(ht.get("hellojohn"));
console.log(ht.get("hellojane"));

console.log(JSON.stringify(ht.keyMap));
console.log(ht.keys());
console.log(ht.values());
