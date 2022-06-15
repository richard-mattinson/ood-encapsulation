const SecretDiary = require('../src/secretDiary')
describe('diary', () => {
  let secretDiary;

  beforeEach(() => {
    secretDiary = new SecretDiary();
  });

  it("diary is locked by default", () => {
    // set up
    const expected = false;
    // execute
    const result = secretDiary.diaryUnlocked();
    // verify
    expect(result).toEqual(expected);
  });

  it("diary is locked", () => {
    // set up
    const expected = false;
    // execute
    secretDiary.lock()
    const result = secretDiary.diaryUnlocked();
    // verify
    expect(result).toEqual(expected);
  });

  it("diary is unlocked", () => {
    // set up
    const expected = true;
    // execute
    secretDiary.unlock();
    const result = secretDiary.diaryUnlocked();
    // verify
    expect(result).toEqual(expected);
  });

  it("diary rejects an entry when locked", () => {
    // set up
    const expected = "Diary is locked!";

    secretDiary.addEntry("Weed the garden");
    // execute
    const result = secretDiary.addEntry(expected);
    // verify
    expect(result).toEqual(expected);
  });

  it("diary accepts an entry when unlocked", () => {
    // set up
    const expected = ["I weeded the garden today"];

    secretDiary.unlock();
    // execute
    const result = secretDiary.addEntry("I weeded the garden today");
    // verify
    expect(result).toEqual(expected);
  });
  
  it("retrieve all diary entries", () => {
    // set up
    const expected = [
      "I weeded the garden today",
      "I'm hoping I can create a second class",
      "Sure glad I picked up a desk fan",
    ];
    secretDiary.unlock();
    // execute
    secretDiary.addEntry("I weeded the garden today");
    secretDiary.addEntry("I'm hoping I can create a second class");
    secretDiary.addEntry("Sure glad I picked up a desk fan");
    result = secretDiary.getEntries();
    // verify
    expect(result).toEqual(expected);
  })

  // it("diary is unlocked on request", () => {
  //   // set up
  //   // execute
  //   // verify
  // });



  // it("diary is locked on request", () => {
  //   // set up
  //   // execute
  //   // verify
  // });
})