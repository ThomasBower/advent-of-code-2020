'use strict'

const parse = input =>
  input.split('\n').map(line => {
    const { groups } = /(?<i>\d+)-(?<j>\d+) (?<letter>\w): (?<password>\w+)/g
      .exec(line);
    return {
      ...groups,
      i: parseInt(groups.i),
      j: parseInt(groups.j),
    };
  });

const part1 = input =>
  parse(input).reduce((valid, { i, j, letter, password }) => (actual =>
    actual >= i && actual <= j ? valid + 1: valid)
    (password.split(letter).length - 1), 0);

const part2 = input => 
  parse(input).reduce((valid, { i, j, letter, password }) =>
    (password[i - 1] === letter) !== (password[j - 1] === letter)
      ? valid + 1 : valid, 0);

module.exports = { part1, part2 }
