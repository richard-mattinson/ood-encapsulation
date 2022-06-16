/* 
- Initially the SecretDiary class is locked, meaning addEntry(entry) and getEntries() should throw an error.
- When the user calls unlock(), addEntry() and getEntries() should work as desired.
- When the user calls lock() again addEntry() and getEntries() throw errors. */

class SecretDiary {
  constructor() {
    this.entries = [];
    this.unlocked = false;
  }

  getEntries() {
        if (this.diaryUnlocked() === false) {
      return "Diary is locked!";
        } else {
        return this.entries;
    }
  }

  lock() {
    this.unlocked = false;
  }

  unlock() {
    this.unlocked = true;
  }

  diaryUnlocked() {
    return this.unlocked;
  }

  addEntry(entry) {
    if (this.diaryUnlocked() === false) {
      return "Diary is locked!";
    } else {
      this.entries.push(entry);
      return this.entries
    }
  }
}

module.exports = SecretDiary;
