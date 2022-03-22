import chalk from 'chalk';
import config from '../config/cli.config.js';

export default function checkOs() {
    if (!config.supportedOS.includes(process.platform)) {
        unsupportedOSMessage();
        process.exit();
    }
}

function unsupportedOSMessage() {
    console.log(chalk.bgRed('Your operating system are not supported by CCLEAR =('));
    console.log(`Supported OS: ${chalk.green(config.supportedOS)}`);
    console.log(`Current OS: ${process.platform}`);
}