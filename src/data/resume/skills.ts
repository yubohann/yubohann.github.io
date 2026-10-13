export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Robot Learning'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Robotics'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  // Robot Learning
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Robot Learning'],
  },
  {
    title: 'Stable-Baselines3',
    competency: 4,
    category: ['Robot Learning'],
  },
  {
    title: 'Reinforcement Learning',
    competency: 4,
    category: ['Robot Learning'],
  },
  {
    title: 'PPO',
    competency: 4,
    category: ['Robot Learning'],
  },
  {
    title: 'SAC',
    competency: 3,
    category: ['Robot Learning'],
  },
  {
    title: 'Quality-Diversity (MAP-Elites)',
    competency: 3,
    category: ['Robot Learning'],
  },
  // Robotics
  {
    title: 'ROS 2',
    competency: 4,
    category: ['Robotics'],
  },
  {
    title: 'Isaac Sim',
    competency: 4,
    category: ['Robotics'],
  },
  {
    title: 'Isaac Lab',
    competency: 4,
    category: ['Robotics'],
  },
  {
    title: 'MuJoCo',
    competency: 4,
    category: ['Robotics'],
  },
  {
    title: 'Gazebo',
    competency: 3,
    category: ['Robotics'],
  },
  {
    title: 'Nav2',
    competency: 3,
    category: ['Robotics'],
  },
  {
    title: 'MoveIt 2',
    competency: 3,
    category: ['Robotics'],
  },
  // Perception
  {
    title: 'LiDAR',
    competency: 4,
    category: ['Perception'],
  },
  {
    title: 'IMU',
    competency: 4,
    category: ['Perception'],
  },
  {
    title: 'RGB-D',
    competency: 3,
    category: ['Perception'],
  },
  {
    title: 'YOLO',
    competency: 3,
    category: ['Perception'],
  },
  {
    title: 'AprilTag',
    competency: 3,
    category: ['Perception'],
  },
  {
    title: 'PCL',
    competency: 3,
    category: ['Perception'],
  },
  // Infrastructure
  {
    title: 'Linux',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'CI',
    competency: 3,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * The distinct category names, sorted, so the filter row and the group order
 * both fall out of the skill list itself.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({ name: category }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
