// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class PumpFunEvent extends ethereum.Event {
  get params(): PumpFunEvent__Params {
    return new PumpFunEvent__Params(this);
  }
}

export class PumpFunEvent__Params {
  _event: PumpFunEvent;

  constructor(event: PumpFunEvent) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get isBuy(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get userETHChangeAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokenChangeAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get currentEthAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get currentTokenAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get currentTokenPrice(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class PumpFunTransfer extends ethereum.Event {
  get params(): PumpFunTransfer__Params {
    return new PumpFunTransfer__Params(this);
  }
}

export class PumpFunTransfer__Params {
  _event: PumpFunTransfer;

  constructor(event: PumpFunTransfer) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class events extends ethereum.SmartContract {
  static bind(address: Address): events {
    return new events("events", address);
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPumpToken(param0: Address): boolean {
    let result = super.call("isPumpToken", "isPumpToken(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isPumpToken(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPumpToken", "isPumpToken(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class EmitPumpFunEventsCall extends ethereum.Call {
  get inputs(): EmitPumpFunEventsCall__Inputs {
    return new EmitPumpFunEventsCall__Inputs(this);
  }

  get outputs(): EmitPumpFunEventsCall__Outputs {
    return new EmitPumpFunEventsCall__Outputs(this);
  }
}

export class EmitPumpFunEventsCall__Inputs {
  _call: EmitPumpFunEventsCall;

  constructor(call: EmitPumpFunEventsCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isBuy(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get ethChangeAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get tokenChangeAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get currentEthAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get currentTokenSold(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get currentTokenPrice(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class EmitPumpFunEventsCall__Outputs {
  _call: EmitPumpFunEventsCall;

  constructor(call: EmitPumpFunEventsCall) {
    this._call = call;
  }
}

export class EmitPumpFunTransferCall extends ethereum.Call {
  get inputs(): EmitPumpFunTransferCall__Inputs {
    return new EmitPumpFunTransferCall__Inputs(this);
  }

  get outputs(): EmitPumpFunTransferCall__Outputs {
    return new EmitPumpFunTransferCall__Outputs(this);
  }
}

export class EmitPumpFunTransferCall__Inputs {
  _call: EmitPumpFunTransferCall;

  constructor(call: EmitPumpFunTransferCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class EmitPumpFunTransferCall__Outputs {
  _call: EmitPumpFunTransferCall;

  constructor(call: EmitPumpFunTransferCall) {
    this._call = call;
  }
}
