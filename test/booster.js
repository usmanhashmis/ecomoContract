const { assert } = require("chai");
const {ethers}=require("hardhat")

describe("Booster", async ()=> {
    let booster;
    let myContract;
    let owner;
    let acc1;
    let acc2;
    let acc3;
    const sendVal=10000;
    const gasVal=3000000;

    beforeEach(async()=>{
        [owner, acc1, acc2, acc3 ] = await ethers.getSigners()
        booster = await ethers.getContractFactory("Booster", owner)
        myContract = await booster.deploy()
        await myContract.deployed()
        
    })

    it.only("test receive function", async function () {
        const blnc=await myContract.checkBalance();
        console.log(blnc)
        await myContract.fund({value:sendVal})
        blnc=await myContract.checkBalance();
        assert.equal(blnc.toSring(),sendVal.toString())
    });

    it("test withdraw function", async function () {
      
    });

    

    
  });