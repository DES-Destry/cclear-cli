export class CliConfig {
    // TODO: make win32 and linux versions
    public static readonly SupportedPlatforms = ['darwin'];
    public static readonly CurrentPlatform = process.platform;

    public static readonly AvailableCleaners = ['System', 'Docker', 'Nuget', 'Npm', 'VSCode'];
}
