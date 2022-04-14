import { ReactNode } from "react";
import Layout_Web3 from "../../components/layout_web3";
import { contests } from "../../data/contests.data";
import { useRouter } from "next/router";
import { H1, H2, H3 } from "../../components/typography";
import Image from "next/image";
import NFT from "../../components/nft_card";
import { GrMoney } from "react-icons/gr";
import { BsFillPersonFill } from "react-icons/bs";

function EnterCard() {
  return (
    <div className="card w-96 bg-neutral text-neutral-content mx-auto my-3">
      <div className="card-body items-center text-center py-3">
        <h2 className="card-title">Enter Now!</h2>
        <p>Upload url to generate NFT</p>
        <input
          type="text"
          placeholder="https://"
          className="input text-black w-full max-w-xs"
        />
        <p>Pay entrance fee and submit project!</p>
        <button className="btn btn-accent mx-auto">Pay and Enter</button>
      </div>
    </div>
  );
}

const Contest = function () {
  const router = useRouter();
  const { contestId } = router.query;
  const contest = contests.find((contest) => {
    return contest.id == Number(contestId);
  });
  const backupImg =
    "https://images.unsplash.com/photo-1642952317900-fa90e2c89115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxzTUprVWZ2bkFyZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60";
  return (
    <>
      <H1>{contest?.title}</H1>
      <div className="relative mx-auto h-64 w-96">
        <Image
          layout="fill"
          className="position-center"
          src={contest?.banner.href || backupImg}
          alt=""
        />
      </div>

      <H2>Description:</H2>
      <p>{contest?.description}</p>
      <H2>Rules:</H2>
      {contest?.rules.split("\n").map((line, id) => {
        return <p key={id}>{line}</p>;
      })}
      <EnterCard />
      <H2>Project Gallary</H2>
      <p className="mt-5 flex">
        <strong>Current prize pool</strong> <GrMoney className="mx-2" /> $
        {contest?.prizePool}
      </p>
      <p className="mb-5 flex">
        <strong>Current winner</strong> <BsFillPersonFill className="mx-2" />{" "}
        {contest?.winner}
      </p>

      <div className="grid gap-32 grid-cols-3">
        {contest?.submissions.map((nft) => (
          <div key={nft.id} className="col-span-4 sm:col-span-2 md:col-span-1">
            <NFT {...nft} />
          </div>
        ))}
      </div>
    </>
  );
};

Contest.getLayout = function getLayout(page: ReactNode) {
  return <Layout_Web3>{page}</Layout_Web3>;
};

export default Contest;
