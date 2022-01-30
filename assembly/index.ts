import 'wasi';
export { Protobuf } from 'as-proto';
export { System } from './systemCalls';
export { chain } from './proto/chain';
export { common } from './proto/common';
export { protocol } from './proto/protocol';
export { system_call_id } from './proto/system_call_ids';
export * from './util';

// export this declare for intellisense purpose
export declare function entry_point(entryPointIndex: String, description: String, readOnly: String): void;