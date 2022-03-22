#!/usr/bin/env node

import inquirer from 'inquirer';
import { CliConfig } from '../lib/config/cli.config.js';
import { CheckPlatform } from '../lib/util/check-platform.js';

async function main() {
    const selectedCleaners: { cleaners: string[] } = await inquirer.prompt({
        name: 'cleaners',
        type: 'checkbox',
        message: 'What kind of cache do you want to clean?',
        choices: CliConfig.AvailableCleaners,
    });
    console.trace(selectedCleaners);
}

new CheckPlatform().start();
await main();
