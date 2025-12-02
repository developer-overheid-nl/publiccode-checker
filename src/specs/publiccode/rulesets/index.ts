import { Rulesets } from '../../../spectral';
import publiccode, { PUBLICCODE_GIT_URI } from './publiccode';

const rulesets: Rulesets = {
  [PUBLICCODE_GIT_URI]: publiccode,
};

export default rulesets;
