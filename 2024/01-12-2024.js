// Source: https://adventofcode.com/2024/day/1
//
// A Historian is lost. Check the places a Historian might be in.
//
// 1. As each location is checked, mark it on their list with a star.
// 2. The Chief Historian must be in one of the first fifty places -> get fifty stars
// 3. Collect stars by solving puzzles.
// 4. Two puzzles will be made available on each day in the Advent calendar;
//    the second puzzle is unlocked when you complete the first.
// 5. Each puzzle grants one star.
//
// Problem:
// --------
// The list of locations to check is currently empty.
// First check should be the Chief Historian's office.
// A lists of historically significant locations is discovered in the office.
// Locations sorted by "location ID".
// Two groups (two lists of locations).
// Example:
//   3   4
//   4   3
//   2   5
//   1   3
//   3   9
//   3   3
//
// Task:
// Maybe the lists are only off by a small amount! To find out, pair up the numbers and measure how far apart they are.
// Pair up the smallest number in the left list with the smallest number in the right list, then the second-smallest
// left number with the second-smallest right number, and so on.
// Within each pair, figure out how far apart the two numbers are; you'll need to add up all of those distances.
// For example, if you pair up a 3 from the left list with a 7 from the right list, the distance apart is 4; if you
// pair up a 9 with a 3, the distance apart is 6.
