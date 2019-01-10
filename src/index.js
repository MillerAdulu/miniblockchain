import sha256 from 'sha256';

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
        );
    }
}

const createGenesisBlock = () => new Block(0, Date.now(), 'Genesis Block', '0');

const nextBlock = (lastBlock, data) => new Block(lastBlock.index + 1, Date.now(), data, lastBlock.hash);

const createBlockChain = num => {
    const blockchain = [createGenesisBlock()];

    let previousBlock = blockchain[0];

    for(let i = 1; i < num; i++) {
        const blockToAdd = nextBlock(previousBlock, `This is block #${i}`);
        blockchain.push(blockToAdd);
        previousBlock = blockToAdd;
    }

    console.log(blockchain)
}

// Define the number of blocks you want
createBlockChain(20);