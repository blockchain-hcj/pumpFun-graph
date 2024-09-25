import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PumpFunEvent } from "../generated/schema"
import { PumpFunEvent as PumpFunEventEvent } from "../generated/events/events"
import { handlePumpFunEvent } from "../src/events"
import { createPumpFunEventEvent } from "./events-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let isBuy = "boolean Not implemented"
    let userETHChangeAmount = BigInt.fromI32(234)
    let tokenChangeAmount = BigInt.fromI32(234)
    let currentEthAmount = BigInt.fromI32(234)
    let currentTokenAmount = BigInt.fromI32(234)
    let currentTokenPrice = BigInt.fromI32(234)
    let newPumpFunEventEvent = createPumpFunEventEvent(
      token,
      account,
      isBuy,
      userETHChangeAmount,
      tokenChangeAmount,
      currentEthAmount,
      currentTokenAmount,
      currentTokenPrice
    )
    handlePumpFunEvent(newPumpFunEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PumpFunEvent created and stored", () => {
    assert.entityCount("PumpFunEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isBuy",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userETHChangeAmount",
      "234"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenChangeAmount",
      "234"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentEthAmount",
      "234"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentTokenAmount",
      "234"
    )
    assert.fieldEquals(
      "PumpFunEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "currentTokenPrice",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
