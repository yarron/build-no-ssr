/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import config from '@/constants/config';
import TronWeb from 'tronweb';

const { HttpProvider } = TronWeb.providers;
const fullNode = new HttpProvider(config.fullHost);
const solidityNode = new HttpProvider(config.fullHost);
const eventServer = new HttpProvider(config.fullHost);

export const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, process.env.REACT_APP_PRIVATE_KEY_SHASTA);

const TronContext = createContext<Partial<any>>({
  tronWeb,
  contract: null,
});

export default TronContext;
