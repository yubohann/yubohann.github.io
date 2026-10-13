/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  /**
   * Marks an open-ended role that ran alongside the primary career. Omitted
   * means full-time; `sortPositions` uses this to keep an enduring side role
   * from outranking every later full-time position.
   */
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Independent Research',
    position: 'Research Lead',
    url: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio',
    startDate: '2025-10-01',
    summary: `Independent research on multi-robot cooperative exploration and target search. I designed and built a
    physics-grounded multi-agent search benchmark captured in Isaac Sim with a fleet of CF2X quadrotors, graph
    reinforcement learning for gate traversal and formation flight, world-model and quality-diversity methods for
    HM3D-derived indoor exploration, and a sim-to-real aerial manipulator whose rigid-soft truss arm grasps by
    bending. A first-author manuscript on multi-robot exploration and geometry-constrained semantic allocation is in
    preparation. The project code ships in the
    <a href='https://github.com/yubohann/MultiAgent-Robotics-Portfolio'>public portfolio repository</a>.`,
    highlights: [
      'Owned the research line end to end: task contracts, simulation capture, estimators and control, baselines, and evidence documentation.',
      'Maintained eight public project snapshots with per-project READMEs, tests, and frozen protocols in one portfolio repository.',
      'Kept a CPU-only verification path for every benchmark and learning project so the work checks from a clean checkout.',
    ],
  },
  {
    name: 'Wuhan Yawei Electronic Technology',
    position: 'Algorithm Engineering Intern',
    // The company has no stable public site; the link points at the public
    // record of the work. Replace with the company's own domain if one exists.
    url: 'https://github.com/yubohann',
    startDate: '2026-05-01',
    endDate: '2026-07-31',
    summary: `Built and tuned Isaac Lab training environments for a multi-drone research line: PPO training,
    formation-aware observations, and obstacle-avoidance experiments.`,
    highlights: [
      'Integrated flight dynamics, obstacle fields, and camera observations into a training environment.',
      'Designed formation-aware observation and reward terms for multi-drone control; validated policies across difficulty levels.',
    ],
  },
  {
    name: 'RoboCup China 2025',
    position: 'Team Lead, Visual Challenge',
    url: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/robocup-cbg-wm',
    startDate: '2025-03-01',
    endDate: '2025-10-31',
    summary: `Led the visual-challenge entry at RoboCup China 2025 — national first prize and a third-place finals
    finish — and built the counterfactual-belief world-model research line that grew out of the competition effort.`,
    highlights: [
      'Built the simulated rule environment, replay pipeline, and risk-aware control experiments behind the entry.',
      'Turned the competition code into a documented research snapshot with tests and reproducible self-play evaluation.',
    ],
  },
  {
    name: 'ROBOCON Robotics Team',
    position: 'LiDAR and Perception Lead',
    url: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/robocon-mid360-autonomy-stack',
    startDate: '2023-09-01',
    endDate: '2025-10-31',
    summary: `LiDAR-inertial localisation and perception for a competition basketball robot, carried through two
    seasons of ROBOCON. The public stack covers the Livox MID-360 and FAST-LIO2 pipeline, a Gazebo court simulation,
    ROS 2 integration for navigation, and the handoff to the embedded-control side.`,
    highlights: [
      'Built the simulation-first autonomy stack: Gazebo court, LiDAR and RGB-D models, and a scripted scoring routine that smoke-tests locally.',
      'Integrated point-cloud registration, 2D projection, and occupancy mapping interfaces consumed by the navigation side.',
      'Coordinated the interface between the ROS 2 navigation stack and the embedded control layer during competition integration.',
    ],
  },
  {
    name: 'Mathematical Modeling Laboratory',
    position: 'Team Lead',
    url: 'https://www.hbut.edu.cn',
    startDate: '2024-09-01',
    endDate: '2025-06-30',
    summary: `Trained student teams in Python, MATLAB, and linear algebra for mathematical-modelling competitions.`,
    highlights: [
      'Ran working sessions on modelling workflow, data fitting, and competition-style problem decomposition.',
    ],
  },
];

export default work;
