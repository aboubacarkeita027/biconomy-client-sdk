import { ethers, BigNumber } from 'ethers'
import { ChainId } from '@biconomy/core-types'


export type Bundlerconfig = {
    bundlerUrl: string,
    epAddress: string,
    dappApiKey: string,
    userOpReceiptIntervals?: { [key in ChainId]?: number }
}

export type UserOpReceipt = {
  userOpHash: string,
  entryPoint: string,
  sender: string,
  nonce: number,
  paymaster: string,
  actualGasCost: BigNumber,
  actualGasUsed: BigNumber,
  success: boolean,
  reason: string,
  logs:  Array<ethers.providers.Log>, // The logs generated by this UserOperation (not including logs of other UserOperations in the same bundle)
  receipt: ethers.providers.TransactionReceipt
}

export type GetUserOperationResponse = {
  statusCode: number,
  message: string,
  result: UserOpReceipt
}


export type SendUserOperationResponse = {
  statusCode: number,
  message: string,
  result: string
}

export type UserOpResponse = {
  userOpHash: string,
  wait(confirmations?: number): Promise<UserOpReceipt>
}


export type GetUserOpGasFieldsResponse = {
  statusCode: number,
  message: string,
  result: UserOpGasFieldsResponse
}

export type UserOpGasFieldsResponse = {
    preVerificationGas: string
    verificationGasLimit: string
    callGasLimit: string
    maxPriorityFeePerGas: string
    maxFeePerGas: string
}
