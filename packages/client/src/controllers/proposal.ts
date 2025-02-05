import { Logger } from "pino";
import { Store } from "@walletconnect/core";
import { ICore, ProposalTypes } from "@walletconnect/types";

import { CLIENT_STORAGE_PREFIX, PROPOSAL_CONTEXT } from "../constants";

export class Proposal extends Store<number, ProposalTypes.Struct> {
  constructor(public core: ICore, public logger: Logger) {
    super(core, logger, PROPOSAL_CONTEXT, CLIENT_STORAGE_PREFIX);
  }
}
