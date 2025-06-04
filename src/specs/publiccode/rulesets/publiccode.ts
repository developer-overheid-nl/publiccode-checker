import type { RulesetDefinition } from '@stoplight/spectral-core';
import remoteSchema from '../../../functions/remoteSchema';

export const PUBLICCODE_URI = 'https://github.com/publiccodeyml/publiccode.yml';

const publiccode: RulesetDefinition = {
  description: 'Publiccode ruleset for validating publiccode.yml files.',
  rules: {
    '/schema': {
      given: "$",
      message:
        '{{error}}',
      severity: 'error',
      documentationUrl: PUBLICCODE_URI,
      then: {
        function: remoteSchema,
        functionOptions: {
          schema: {
            "$ref": "https://json.schemastore.org/publiccode.json",
          }
        },
      },
    },
  },
};

export default publiccode;
