import { ChainId } from '@biconomy-devx/core-types'

export const NODE_CLIENT_URL = 'https://sdk-backend.prod.biconomy.io/v1'

export const RPC_PROVIDER_URLS: { [key in ChainId]?: string } = {
  [ChainId.MAINNET]: 'https://rpc.ankr.com/eth',
  [ChainId.GOERLI]: 'https://rpc.ankr.com/eth_goerli',
  [ChainId.POLYGON_MUMBAI]: 'https://rpc.ankr.com/polygon_mumbai',
  [ChainId.POLYGON_MAINNET]: 'https://rpc.ankr.com/polygon',
  [ChainId.BSC_TESTNET]: 'https://endpoints.omniatech.io/v1/bsc/testnet/public',
  [ChainId.BSC_MAINNET]: 'https://rpc.ankr.com/bsc',
  [ChainId.POLYGON_ZKEVM_TESTNET]: 'https://rpc.public.zkevm-test.net',
  [ChainId.POLYGON_ZKEVM_MAINNET]: 'https://rpc.ankr.com/polygon_zkevm',
  [ChainId.ARBITRUM_GOERLI_TESTNET]: 'https://goerli-rollup.arbitrum.io/rpc',
  [ChainId.ARBITRUM_ONE_MAINNET]: 'https://rpc.ankr.com/arbitrum',
  [ChainId.ARBITRUM_NOVA_MAINNET]: 'https://nova.arbitrum.io/rpc'
}
