/* eslint-disable global-require */
import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Web3ContextProvider } from "./hooks/web3Context";
import { NFTDataProvider } from "./hooks/useNFTData";
import App from "./App";


export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Web3ContextProvider>
        <NFTDataProvider >
          <BrowserRouter basename={"/#"}>
            <App />
          </BrowserRouter>
        </NFTDataProvider >
      </Web3ContextProvider>
    );
  }
}
