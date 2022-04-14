import NFT from "./nft";

export enum Category {
    ART = 0,
    IDEAS,
    INVENTIONS,
    PUBLIC_GOODS,
}

export type Contest = {
    id: number;
    category: Category;
    start: Date;
    end: Date;
    title: string;
    description: string;
    rules: string;
    submissions: NFT[];
    banner: URL;
    entranceFee: number;
    prizePool: number;
    winner: string;
};

export default Contest;