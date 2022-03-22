#!/usr/bin/env node

import { CheckPlatform } from '../lib/util/check-platform';

function main() {
    console.log('CLI working');
}

new CheckPlatform().start();
main();

