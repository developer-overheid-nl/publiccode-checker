import type { RulesetDefinition } from '@stoplight/spectral-core';
import remoteSchema from '../../../functions/remoteSchema';
import publiccodeSchema from '../publiccode_schema.json';

export const PUBLICCODE_GIT_URI = 'https://github.com/publiccodeyml/publiccode.yml';
export const PUBLICCODE_DOCS_URL = 'https://yml.publiccode.tools/schema.core.html#key-';

const publiccode: RulesetDefinition = {
  description: 'Publiccode ruleset for validating publiccode.yml files.',
  rules: {
    '/schema': {
      given: "$",
      message:
        '{{error}}',
      severity: 'error',
      documentationUrl: PUBLICCODE_GIT_URI,
      then: {
        function: remoteSchema,
        functionOptions: {
          schema: publiccodeSchema
        },
      },
    },
  },
};

export default publiccode;
