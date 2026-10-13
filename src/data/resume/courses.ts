export interface Course {
  title: string;
  /**
   * Display index for the course list. The university does not publish
   * per-course pages or stable public course codes, so the number is a
   * catalogue position rather than an external identifier.
   */
  number: string;
  /**
   * The link resolves to the university's public site, which is the stable
   * record for the course; replace it with a course page if one appears.
   */
  link: string;
  /**
   * Must match a `Degree.school` in `src/data/resume/degrees.ts` exactly.
   * `src/lib/resumeJson.ts` files coursework under the education entry with
   * this name, and it compares the two strings whole — a shortened form here
   * would silently drop the courses from `/resume.json`.
   */
  university: string;
}

const courses: Course[] = [
  {
    title: 'C Programming',
    number: '01',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Advanced Mathematics',
    number: '02',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Linear Algebra',
    number: '03',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Artificial Intelligence',
    number: '04',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Computer Vision',
    number: '05',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Database Systems',
    number: '06',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
  {
    title: 'Operating Systems',
    number: '07',
    link: 'https://www.hbut.edu.cn',
    university: 'Hubei University of Technology',
  },
];

export default courses;
