export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Hubei University of Technology',
    degree: 'B.Eng. Computer Science and Technology',
    link: 'https://www.hbut.edu.cn',
    year: 2027,
  },
  {
    school: 'Zhejiang University',
    degree: 'Micro-major in Artificial Intelligence (9 credits, 98/100)',
    link: 'https://www.zju.edu.cn',
    year: 2026,
  },
];

export default degrees;
