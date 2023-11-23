const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const tree = new MerkleTree(niceList);
console.log("Tree root is: ", tree.getRoot());
