import { Rulesets } from '../../../spectral';
import publiccode, { PUBLICCODE_URI } from './publiccode';

const rulesets: Rulesets = {
  [PUBLICCODE_URI]: publiccode,
};

export default rulesets;
