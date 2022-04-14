import type NFT from "../types/nft";

export const artNfts: NFT[] = [
  {
    id: 0,
    address: "",
    url: new URL(
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpJTIwZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    ),
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpJTIwZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author: "Europena",
    title: "Roses",
    description: "I trained my AI on images of rose paintings from museums",
    upvotes: 1,
  },
  {
    id: 1,
    address: "",
    url: new URL(
      "https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    ),
    image:
      "https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    author: "Dimitar",
    title: "NY Faces",
    description: "AI generated image from a dataset of magazine photos",
    upvotes: 1,
  },
  {
    id: 2,
    address: "",
    url: new URL(
      "https://images.unsplash.com/photo-1639614245569-bb156ca570c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
    ),
    image:
      "https://images.unsplash.com/photo-1639614245569-bb156ca570c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80",
    author: "Micha",
    title: "Idaho Wildlife",
    description:
      "This is what I got when I trained my AI artist using nature scenes from movies.",
    upvotes: 2,
  },
  {
    id: 3,
    address: "",
    url: new URL(
      "https://images.unsplash.com/photo-1647894335344-17e1f0a0c683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    ),
    image:
      "https://images.unsplash.com/photo-1647894335344-17e1f0a0c683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    author: "Merik",
    title: "Toys",
    description:
      "I took a hundred still photos of toy horses and this is what I created",
    upvotes: 0,
  },
];

export const ideasNFTs: NFT[] = [
  {
    id: 0,
    address: "",
    url: new URL("https://vitalik.ca/general/2022/01/26/soulbound.html"),
    image:
      "https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHZpZGVvJTIwZ2FtZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    author: "Vitalik",
    title: "Soulbound",
    description:
      "My blog post about incentives and a 'soulbound' approach to web3",
    upvotes: 0,
  },
  {
    id: 1,
    address: "",
    url: new URL("https://moxie.org/2022/01/07/web3-first-impressions.html"),
    image:
      "https://images.unsplash.com/photo-1515172128886-07c606bb4eb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlbW90ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    author: "Moxie",
    title: "Hyperscaling web3",
    description:
      "My thoughts about what we need to do for web3 to reach mass adoption",
    upvotes: 1,
  },
];
