import { serialize, deserialize } from './dist/index.js';

const data = {
  date: new Date(),
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  bigint: BigInt(123),
  regexp: /test/g,
};

const serialized = serialize(data);
console.log('Serialized:', serialized);

const deserialized = deserialize(serialized);
console.log('Deserialized:', deserialized);
