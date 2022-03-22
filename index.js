#!/usr/bin/env node

import checkOs from './core/os/checkOs.js';

checkOs();
await main();

async function main() {
    console.log('CLI working');
}
