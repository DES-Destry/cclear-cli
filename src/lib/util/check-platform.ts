import chalk from "chalk";
import { CliConfig } from "../config/cli.config.js";

export class CheckPlatform {
    public start(): void {
        if (!CliConfig.SupportedPlatforms.includes(CliConfig.CurrentPlatform)) {
            this.showMessage();
            process.exit();
        }
    }

    private showMessage(): void {
        console.log(
            chalk.bgRed("Your operating system are not supported by CCLEAR =(")
        );
        console.log(`Supported OS: ${chalk.green(CliConfig.SupportedPlatforms)}`);
        console.log(`Current OS: ${CliConfig.CurrentPlatform}`);
    }
}
