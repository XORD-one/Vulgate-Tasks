const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')


const leaves = ['a', 'b', '0x1CA510447B07DcF686339Ea6E647DC8049CdFf2f'].map(x => keccak256(x))
const tree = new MerkleTree(leaves, keccak256, {sortPairs: true})
const root = tree.getHexRoot()
const leaf = keccak256('0x1CA510447B07DcF686339Ea6E647DC8049CdFf2f')
const proof = tree.getHexProof(leaf)
const isVerified = tree.verify(proof, leaf, root)   //true

const objectToExport = {
    root,
    leaf,
    proof,
}

module.exports=objectToExport