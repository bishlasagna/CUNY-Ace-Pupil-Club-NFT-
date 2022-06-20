import { ThirdwebSDK } from '@3rdweb/sdk';
import ethers from 'ethers';

import dotenv from 'dotenv';
dotenv.config();

const sdk = new ThirdwebSDK(
  new ethers.Wallet(0x9D84a4a4dA6D1039725b5fD70b9516542D4c520a)
    process.env.PRIVATE_KEY,
    ethers.getDefaultProvider('https://rinkeby-light.eth.linkpool.io/')
  )
);

(async () => {
  try {
    const apps = await sdk.getApps();
    console.log('Your app address is:', apps[0].address);
  } catch (err) {
    console.error('Failed to get apps from the sdk', err);
    process.exit(1);
  }
})();

// We are exporting the initialised thirdweb SDK so that we can use it in our other scripts
export default sdk;
