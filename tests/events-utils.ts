import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PumpFunEvent, PumpFunTransfer } from "../generated/events/events"

export function createPumpFunEventEvent(
  token: Address,
  account: Address,
  isBuy: boolean,
  userETHChangeAmount: BigInt,
  tokenChangeAmount: BigInt,
  currentEthAmount: BigInt,
  currentTokenAmount: BigInt,
  currentTokenPrice: BigInt
): PumpFunEvent {
  let pumpFunEventEvent = changetype<PumpFunEvent>(newMockEvent())

  pumpFunEventEvent.parameters = new Array()

  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam("isBuy", ethereum.Value.fromBoolean(isBuy))
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam(
      "userETHChangeAmount",
      ethereum.Value.fromUnsignedBigInt(userETHChangeAmount)
    )
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenChangeAmount",
      ethereum.Value.fromUnsignedBigInt(tokenChangeAmount)
    )
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam(
      "currentEthAmount",
      ethereum.Value.fromUnsignedBigInt(currentEthAmount)
    )
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam(
      "currentTokenAmount",
      ethereum.Value.fromUnsignedBigInt(currentTokenAmount)
    )
  )
  pumpFunEventEvent.parameters.push(
    new ethereum.EventParam(
      "currentTokenPrice",
      ethereum.Value.fromUnsignedBigInt(currentTokenPrice)
    )
  )

  return pumpFunEventEvent
}

export function createPumpFunTransferEvent(
  token: Address,
  from: Address,
  to: Address,
  amount: BigInt
): PumpFunTransfer {
  let pumpFunTransferEvent = changetype<PumpFunTransfer>(newMockEvent())

  pumpFunTransferEvent.parameters = new Array()

  pumpFunTransferEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  pumpFunTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  pumpFunTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  pumpFunTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return pumpFunTransferEvent
}
