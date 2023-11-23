const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const tree = new MerkleTree(niceList);
  const randomNumber = Math.floor(Math.random() * niceList.length);
  const leaf = niceList[randomNumber];
  const proof = tree.getProof(randomNumber);

  console.log(leaf);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: proof,
    leaf: leaf,
  });

  console.log({ gift });
}

main();
