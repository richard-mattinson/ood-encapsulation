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

  fit("diary rejects an entry when locked", () => {
    // set up
    const expected = "Diary is locked!";

    secretDiary.addEntry("Weed the garden");
    // execute
    const result = secretDiary.addEntry(expected);
    // verify
    expect(result).toEqual(expected);
  });

  // it("diary is unlocked on request", () => {
  //   // set up
  //   // execute
  //   // verify
  // });

  // it("diary accepts an entry when unlocked", () => {
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