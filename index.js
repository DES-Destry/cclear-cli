#!/usr/bin/env node

import chalk from 'chalk'

// TODO: make win32 and linux versions
const supportedOS = ['darwin'];
const currentOS = process.platform;

if (!supportedOS.includes(currentOS)) {
    unsupportedOS();
} else {
    await executeCli();
}


async function executeCli() {
    console.log('CLI working');
}

function unsupportedOS() {
    console.log(chalk.bgRed('Your operating system are not supported =('));
    console.log(`Supported OS: ${chalk.green(supportedOS)}`);
    console.log(`Current OS: ${currentOS}`);
}