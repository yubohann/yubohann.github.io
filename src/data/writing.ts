export interface WritingItem {
  title: string;
  url: string;
  date: string;
  description: string;
}

/**
 * External articles, shown alongside the on-site posts on /writing.
 *
 * Empty on purpose: everything I have published so far lives in this
 * repository as a local post or in a project README, and listing someone
 * else's articles here would misattribute them. Add rows here when an
 * external article exists.
 */
const data: WritingItem[] = [];

export default data;
