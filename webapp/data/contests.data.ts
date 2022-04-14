import type { Contest } from "../types/contest";
import { Category } from "../types/contest";
import { artNfts, ideasNFTs } from "./nfts.data";
export const contests: Contest[] = [
  {
    id: 0,
    category: Category.ART,
    start: new Date("2022-04-14"),
    end: new Date("2022-04-18"),
    title: "OpenSea AI Art Contest",
    description:
      "We want to see who can create the best digital art using AI. Be creative and see what your algorithms can produce! Your submitted work will be cenmented as an NFT in the Novelty contract. Own your art forever!",
    rules:
      " 1. Particpate by paying the entrance fee and submitting a url of your image \n 2. Submissions must be made before the start and end date. \n 3. Before the end date, you must upvote another submission. \n 4. After the end date, the participant with the most upvotes is the winner and can claim the prize pool any time they wish. \n-\n- Submitting a project on the Novelty dapp generates a unique token for it and cements it on the Novelty smart contract. \n- The Novelty smart contract autonomously executes and handles all contest functionality.",
    submissions: artNfts,
    banner: new URL(
      "https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ),
    entranceFee: 50,
    prizePool: 200,
    winner: "Micha",
  },
  {
    id: 1,
    category: Category.IDEAS,
    start: new Date("2022-04-15"),
    end: new Date("2022-04-28"),
    title: "General Ideas Contest",
    description:
      "What's your amazing idea? It could be anything: an improvement the government can make, a new way of viewing something in economics, or even a contrary take on popular opinion. Just write it down and tell us what you think! Don't worry about someone 'stealing' it, as everybody will see you cemented it on Novelty smart contract first!",
    rules:
      " 1. Particpate by paying the entrance fee and submitting a url containing your idea \n 2. Submissions must be made before the start and end date. \n 3. Before the end date, you must upvote another submission. \n 4. After the end date, the participant with the most upvotes is the winner and can claim the prize pool any time they wish. \n-\n- Submitting a project on the Novelty dapp generates a unique token for it and cements it on the Novelty smart contract. \n- The Novelty smart contract autonomously executes and handles all contest functionality.",
    submissions: ideasNFTs,
    banner: new URL(
      "https://images.unsplash.com/photo-1495291916458-c12f594151e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aWRlYXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    entranceFee: 80,
    prizePool: 160,
    winner: "Moxie",
  },
  {
    id: 2,
    category: Category.INVENTIONS,
    start: new Date("2022-05-01"),
    end: new Date("2022-05-07"),
    title: "Web3 Inventions Contest",
    description:
      "Invent something amazing in web3! It could be anyting. Maybe a new hardware wallet? Or a special server to host nft images? We want to see it! Whether it's a good or bad invention, you'll own the Novelty generated NFT to prove that you came up with it first!",
    rules:
      " 1. Particpate by paying the entrance fee and submitting a url containing your invention \n 2. Submissions must be made before the start and end date. \n 3. Before the end date, you must upvote another submission. \n 4. After the end date, the participant with the most upvotes is the winner and can claim the prize pool any time they wish.\n-\n- Submitting a project on the Novelty dapp generates a unique token for it and cements it on the Novelty smart contract. \n- The Novelty smart contract autonomously executes and handles all contest functionality.",
    submissions: [],
    banner: new URL(
      "https://images.unsplash.com/photo-1642403711737-8e89f8d92b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYjN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    ),
    entranceFee: 500,
    prizePool: 0,
    winner: "Waiting for participants",
  },
  {
    id: 3,
    category: Category.PUBLIC_GOODS,
    start: new Date("2022-05-01"),
    end: new Date("2022-05-07"),
    title: "Make The World Better",
    description:
      "Submit any public good that makes the world better for all. An invention, software, idea, photo, anything that helps humanity. Receive future karma and kudos by showcasing the Novelty generated NFT representing your work. ",
    rules:
      " 1. Particpate by paying the entrance fee and submitting a url containing your invention \n 2. Submissions must be made before the start and end date. \n 3. Before the end date, you must upvote another submission. \n 4. After the end date, the participant with the most upvotes is the winner and can claim the prize pool any time they wish. \n-\n- Submitting a project on the Novelty dapp generates a unique token for it and cements it on the Novelty smart contract. \n- The Novelty smart contract autonomously executes and handles all contest functionality.",
    submissions: [],
    banner: new URL(
      "https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVibGljJTIwZ29vZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    entranceFee: 25,
    prizePool: 0,
    winner: "Waiting for participants",
  },
];
