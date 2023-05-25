import { Team } from "../index";

describe("Team", () => {
  let team;
  let warrior;
  let mage;
  let archer;

  beforeEach(() => {
    team = new Team();
    warrior = { name: "Warrior" };
    mage = { name: "Mage" };
    archer = { name: "Archer" };
  });

  it("should add a member to the team", () => {
    team.add(warrior);
    const expected = [{ name: "Warrior" }];
    expect(team.toArray()).toEqual(expected);
  });

  it("should add all members to the team", () => {
    team.addAll(warrior, mage, archer);
    const expected = [
      { name: "Warrior" },
      { name: "Mage" },
      { name: "Archer" },
    ];
    expect(team.toArray()).toEqual(expected);
  });

  it("should not allow double additions to the team", () => {
    team.add(warrior);
    expect(() => team.add(warrior)).toThrow();
  });

  it("should not allow duplicate entries to be added to the team", () => {
    team.addAll(warrior, mage);
    expect(() => team.addAll(mage, archer)).toThrow();
  });
});
