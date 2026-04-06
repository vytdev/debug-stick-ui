/**
 * Configs.
 */

export default {
  /**
   * The folder containing static files needed by the add-on.
   */
  staticSrc: 'BP',

  /**
   * Where to place output .mcpack files.
   */
  distDir: 'dist',

  /**
   * Pack filename format.
   */
  outFileFmt: 'debug-stick-ui.{version}.mcpack',

  /**
   * Pack name.
   */
  packName: 'Debug Stick UI',

  /**
   * The current version.
   */
  packVersion: '26.10.1',

  /**
   * Minimum Minecraft version required.
   */
  minMcVersion: '1.26.10',

  /**
   * Script entry point.
   */
  scriptEntry: 'scripts/index.js',

  /**
   * Pack description.
   */
  packDescription: [
    '§7v{version} ({shCommit}) MCBE {minMcVer}+§r',
    '',
    'A UI-based variant of the §aDebug Stick§r add-on, by §bvytdev§r',
    'Use §e/give @s vyt:debug_stick_ui§r to get the §6Debug Stick UI§r.',
    '',
    'Report bugs here: §bhttps://github.com/vytdev/debug-stick-ui/§r',
    'Copyright (c) 2023-2026 Vincent Yanzee J. Tan',
    'Licensed under the MIT License.',
  ].join('\n'),

  /**
   * Dependencies.
   */
  dependencies: {
    '@minecraft/server': '2.6.0',
    '@minecraft/server-ui': '2.0.0',
  }
};
