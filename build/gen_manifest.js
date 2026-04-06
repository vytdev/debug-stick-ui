import config from '../config.js';
import { runtimeConfigTable as subTab } from './gen_config.js';
import { formatString } from './utils.js';


/**
 * These stay constant.
 */
const PACK_UUID = '485e02d9-87e6-4505-a210-041d4778e026';
const MODULE_DATA_UUID = '735e32f9-73d7-4946-89d4-8b4422822328';
const MODULE_SCRIPT_UUID = 'c688182b-4950-477d-8b06-71807fe513bc';


/**
 * Generate the manifest file from a template.
 * @returns The generated manifest object.
 */
export function genManifest() {
  return {
    format_version: 3,

    header: {
      name:                 formatString(config.packName, subTab),
      description:          formatString(config.packDescription, subTab),
      version:              config.packVersion,
      min_engine_version:   config.minMcVersion,
      uuid:                 PACK_UUID,
    },

    modules: [
      {
        description:        'behaviour',
        type:               'data',
        version:            '1.0.0',
        uuid:               MODULE_DATA_UUID,
      },
      {
        description:        'scripting',
        type:               'script',
        language:           'javascript',
        version:            '1.0.0',
        uuid:               MODULE_SCRIPT_UUID,
        entry:              config.scriptEntry,
      }
    ],

    dependencies: Object.entries(config.dependencies)
        .map(([k, v]) => ({ module_name: k, version: v })),

    metadata: {
      authors:              [ 'VYT' ],
      license:              'MIT',
      url:                  'https://github.com/vytdev/debug-stick-ui',
    },
  }
}


/**
 * Pretty JSON-stringify the given manifest object.
 * @param manifest The manifest object.
 * @returns String.
 */
export function stringifyManifest(manifest) {
  return JSON.stringify(manifest, null, 2);
}
