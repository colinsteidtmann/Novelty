import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Dapp, Dapp__factory } from "../typechain";

chai.use(solidity);
const { expect } = chai;

describe("Dapp", () => {
  let dappAddress: string;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();
    const dappFactory = new Dapp__factory(deployer);
    const dappContract = await dappFactory.deploy();
    dappAddress = dappContract.address;
  });
  describe("Create", async () => {
    it("Should create a contest", async () => {
      const [deployer, user] = await ethers.getSigners();
      const dappInstance = new Dapp__factory(deployer).attach(dappAddress);
      const secondsSinceEpoch = Math.round(Date.now() / 1000);
      // const toMint = ethers.utils.parseEther("1");

      await dappInstance.createContest("0", "0", secondsSinceEpoch, secondsSinceEpoch + 60, { from: deployer.address });
      expect(await dappInstance.numContests()).to.eq(1);
    });
  });
  describe("Enter", async () => {
    let dappInstance: Dapp;
    beforeEach(async () => {
      const [deployer, user] = await ethers.getSigners();
      dappInstance = new Dapp__factory(deployer).attach(dappAddress);
      const secondsSinceEpoch = Math.round(Date.now() / 1000);

      await dappInstance.createContest("0", "0", secondsSinceEpoch, secondsSinceEpoch + 60, { from: deployer.address });
    });
    it("Should enter a contest", async () => {
      const [deployer, user] = await ethers.getSigners();
      const nftURL = "https://remix.ethereum.org";
      const entranceFee = 100;
      // const toMint = ethers.utils.parseEther("1");
      await dappInstance.connect(user).enterContest(1, nftURL, { from: user.address, value: entranceFee });
      expect(await dappInstance.numContests()).to.eq(1);
      expect(await dappInstance.userContests(user.address, 0)).to.eq(1);
      const Contest = await dappInstance.contests(1);
      console.log("startTime: %s", Contest.startTime);
      const NFT = await dappInstance.getContestSubmissions(1, 1);
      expect(NFT.creator).to.eq(user.address);
      expect(NFT.URL).to.eq(nftURL);
    });
  });
});
