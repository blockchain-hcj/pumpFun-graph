import {
  PumpFunEvent as PumpFunEventEvent,
  PumpFunTransfer as PumpFunTransferEvent
} from "../generated/events/events"
import { PumpFunEvent, PumpFunTransfer } from "../generated/schema"


import { BigInt, BigDecimal, Address, ethereum  } from "@graphprotocol/graph-ts"
import { PriceCandle } from "../generated/schema"



export function handlePumpFunTransfer(event: PumpFunTransferEvent): void {
  let entity = new PumpFunTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}



function getMax(a: BigInt, b: BigInt): BigInt {
  return a > b ? a : b;
}

function getMin(a: BigInt, b: BigInt): BigInt {
  return a < b ? a : b;
}

function timestampToPeriodStart(timestamp: BigInt, period: string): BigInt {
  let seconds = periodToSeconds(period)
  return timestamp / seconds * seconds
}

function periodToSeconds(period: string): BigInt {
  let seconds: BigInt
  if (period == "5m") {
    seconds = BigInt.fromI32(5 * 60)
  } else if (period == "15m") {
    seconds = BigInt.fromI32(15 * 60)
  } else if (period == "1h") {
    seconds = BigInt.fromI32(60 * 60)
  } else if (period == "4h") {
    seconds = BigInt.fromI32(4 * 60 * 60)
  } else if (period == "1d") {
    seconds = BigInt.fromI32(24 * 60 * 60)
  } else {
    throw new Error("Invalid period")
  }
  return seconds
}

function getId(token: Address, period: string, periodStart: BigInt, event: ethereum.Event): string {
  if (period == "any") {
    return token.toHexString() + ":" + period + ":" + event.transaction.hash.toHexString() 
  }
  return token.toHexString() + ":" + period + ":" + periodStart.toString()
}

function updateCandle(event: PumpFunEventEvent, period: string): void {
  let periodStart = timestampToPeriodStart(event.block.timestamp, period)
  let id = getId(event.params.token, period, periodStart, event)
  let entity = PriceCandle.load(id)

  if (entity == null) {
    let prevId = getId(event.params.token, period, periodStart - periodToSeconds(period), event)
    let prevEntity = PriceCandle.load(prevId)
    
    entity = new PriceCandle(id)
    
    entity.period = period
    
    if (prevEntity == null) {
      entity.open = event.params.currentTokenPrice
    } else {
      entity.open = prevEntity.close
    }
    entity.close = event.params.currentTokenPrice
    entity.high = getMax(entity.open, entity.close)
    entity.low = getMin(entity.open, entity.close)
    entity.timestamp = periodStart.toI32()
    entity.token = event.params.token.toHexString()
  } else {
    entity.high = getMax(entity.high, event.params.currentTokenPrice);
    entity.low = getMin(entity.low, event.params.currentTokenPrice)
    entity.close = event.params.currentTokenPrice
  }
  entity.save()
}

export function handlePumpFunEvent(event: PumpFunEventEvent): void {
  updateCandle(event, "5m")
  updateCandle(event, "15m")
  updateCandle(event, "1h")
  updateCandle(event, "4h")
  updateCandle(event, "1d")
}
