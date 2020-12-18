import React, { useEffect, useState } from 'react';
import { useAddress } from "./web3Context";
import { multicall, } from '../utils/contracts';
import { NFT_ADDR } from '../abis/address';
import NFTABI from '../abis/NFTABI.json';

const defaultVal = {
    nftdata: [],
    totalitems: [],
    mintedCount: 0,
}

export const NFTDataContext = React.createContext(defaultVal)

export default function useNFTData() {
    return React.useContext(NFTDataContext);
}

let nftid = null, loadnft = false;
export function NFTDataProvider({ children }) {

    const account = useAddress();
    const [nftdata, setNFTData] = useState([]);
    const [mintedCount, setMintedCount] = useState(0);
    const [totalitems, setTotalItems] = useState([]);

    async function fetchNFTData() {
        loadnft = true;
        try {
            let calls = [
                {
                    address: NFT_ADDR,
                    name: 'getNumMinted',
                }
            ]
            if (account) {
                calls.push({
                    address: NFT_ADDR,
                    name: 'tokenOfOwner',
                    params: [account]
                })
            }
            const result = await multicall(NFTABI, calls);
            const mintedCount = result[0][0] / 1;
            let temp = [];
            for (let i = 0; i < mintedCount; i++)
                temp.push(i);
            setTotalItems(temp);

            let _items = [], items = [];
            if (account)
                _items = result[1][0];
            for (let i = 0; i < _items.length; i++) {
                items[i] = parseInt(_items[i]) - 1;
            }
            setMintedCount(mintedCount);
            setNFTData(items);
        }
        catch (error) {
            console.log(error);
        }
        loadnft = false;
    }

    useEffect(() => {
        if (nftid) clearInterval(nftid)
        nftid = setInterval(function () {
            if (!loadnft)
                fetchNFTData();
        }, 500)
    }, [account])

    return <NFTDataContext.Provider value={{ nftdata, totalitems, mintedCount }} children={children} />;
}