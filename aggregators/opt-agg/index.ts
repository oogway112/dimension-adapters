import fetchURL from "../../utils/fetchURL";
import { FetchResult, SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";

const URL = "https://api.opt.finance/stat/vol";

const fetch = async (timestamp: number): Promise<FetchResult> => {
  const dailyVolume = (await fetchURL(`${URL}`)).data.total_24h;

  return {
    dailyVolume,
    timestamp,
};
};

const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.WEMIX]: {
      fetch,
      start:  1705017600
    },
  },
};

export default adapter;
