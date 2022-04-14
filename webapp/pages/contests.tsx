import { ReactNode } from "react";
import Layout_Web3 from "../components/layout_web3";
import Contest from "../components/contest_card";
import Filter from "../components/filter";
import { contests } from "../data/contests.data";

const Contests = function () {
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        <p className="col-span-3 text-2xl font-bold">Contests</p>
        <div className="col-span-3 sm:col-span-1">
          <Filter />
        </div>

        <div className="col-span-3 sm:col-span-2">
          <div className="grid gap-24 md:gap-32 grid-cols-2">
            {contests.map((contest, id) => (
              <div key={id} className="col-span-2 md:col-span-1">
                <Contest {...contest} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Contests.getLayout = function getLayout(page: ReactNode) {
  return <Layout_Web3>{page}</Layout_Web3>;
};

export default Contests;
