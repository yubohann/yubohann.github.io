import type { StatDeclaration } from '@/lib/readings';
import { CURRENT_CITY } from '@/lib/telemetry';

/**
 * Both rows are `source: 'profile'`: they are facts typed into
 * `src/data/profile.json`, not counted from anything. The age readout is
 * computed rather than typed, but the datum it is computed from — the birth
 * instant — is still a profile entry, and that is what the mark is telling the
 * reader.
 *
 * `age` declares a key and no value. The element is supplied by
 * `src/components/Stats/Personal.tsx`, because the reading the server can
 * render depends on when the build ran and only the renderer knows that.
 */
const data: StatDeclaration[] = [
  {
    key: 'age',
    label: 'Current age',
    source: 'profile',
  },
  {
    key: 'location',
    label: 'Current city',
    value: CURRENT_CITY,
    source: 'profile',
  },
];

export default data;
