import Image from "next/image";
import type NFT from "../types/nft";
import { BiUpvote } from "react-icons/bi";

const NftCard = function (props: NFT) {
  const backupImg =
    "https://images.unsplash.com/photo-1642952317900-fa90e2c89115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxzTUprVWZ2bkFyZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60";
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="relative h-48">
          <Image
            className="object-cover"
            layout="fill"
            src={props.image || backupImg}
            alt=" "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>
            <strong>Author: </strong>
            {props.author}
          </p>
          <p>{props.description}</p>
          <p className="flex justify-items-end w-100">
            {props.upvotes} <BiUpvote />
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

const NftModal = function (props: NFT) {
  return (
    <>
      <label
        htmlFor="my-modal-6"
        className="after:absolute after:inset-0  modal-button"
      />
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="py-4">
            <strong>Author: </strong>
            {props.author}
          </p>
          <p className="py-4">
            <strong>URL: </strong>
            <a href={props.url.href} className="border-b-2" target="#">
              View Project
            </a>
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Upvote <BiUpvote />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default function NFT({ ...props }: NFT) {
  console.log("NFT called");
  return (
    <>
      <div className="relative ">
        <NftCard {...props} />
        <NftModal {...props} />
      </div>
    </>
  );
}
