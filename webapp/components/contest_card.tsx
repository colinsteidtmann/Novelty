import Image from "next/image";
import Link from "next/link";
import type Contest from "../types/contest";
import { GrMoney } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";

const Contest = function (props: Contest) {
  const backupImg =
    "https://images.unsplash.com/photo-1642952317900-fa90e2c89115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxzTUprVWZ2bkFyZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60";
  return (
    <>
      <Link href={`/contests/${props.id}`}>
        <a>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <Image
                className="object-cover"
                layout="fill"
                src={props.banner.href || backupImg}
                alt=" "
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              <p>
                <strong>Start: </strong>
                {props.start.toDateString()}
              </p>
              <p>
                <strong>End: </strong>
                {props.end.toDateString()}
              </p>
              <p>
                <strong>Entrance Fee: </strong>${props.entranceFee}
              </p>
              <p className="mt-5 flex">
                Current prize pool <GrMoney className="mx-2" /> $
                {props.prizePool}
              </p>
              <p className="flex">
                Number of submissions <BsFillPeopleFill className="mx-2" />{" "}
                {props.submissions.length}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Contest;
