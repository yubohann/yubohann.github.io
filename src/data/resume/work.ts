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
    summary: `Independent research on multi-robot cooperative exploration and target search, with two first-author
    manuscripts in submission: a three-level semantic injection framework for multi-robot object navigation (Robotics
    and Autonomous Systems, Elsevier) and prediction-informed multi-agent MPC with uncertainty-aware world models
    (Engineering Applications of Artificial Intelligence). I designed and built a physics-grounded multi-agent search
    benchmark captured in Isaac Sim with a fleet of CF2X quadrotors, graph reinforcement learning and BC/DAgger
    imitation for gate traversal and formation flight, quality-diversity methods for HM3D-derived indoor exploration,
    and an aerial manipulator validated in high-fidelity simulation whose rigid-soft truss arm grasps by bending. I
    also reproduced and audited the Co-NavGPT2 vision-language navigation baseline in Habitat, with open-vocabulary
    detector diagnostics. The project code ships in the
    <a href='https://github.com/yubohann/MultiAgent-Robotics-Portfolio'>public portfolio repository</a>.`,
    highlights: [
      'Owned the research line end to end: task contracts, simulation capture, estimators and control, baselines, and evidence documentation.',
      'Built a reproducible evaluation system that keeps policy-visible observations strictly separate from scorer truth, with protocols, code, and result hashes bound together.',
      'Added an execution-time safety layer on top of learned coordination — kinematic limits, segment-level collision checks, and formation consistency — with 42 gate layouts × 10 seeds all collision-free.',
      'Scaled the world-model line from a real two-drone match to swarms of fifty, and transferred it to urban traffic signal control: digital-twin calibration error 0.0053 and 41.1% recovery of perfect-prediction gains.',
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
    summary: `Built and tuned Isaac Lab training environments for a multi-drone research line: PPO training across
    multiple seeds (about 90,000 sampled steps), formation-aware observations, and obstacle-avoidance experiments,
    monitored through 12 reward and constraint channels in TensorBoard.`,
    highlights: [
      'Integrated flight dynamics, randomized obstacle fields, and onboard sensor observations into a parallelizable training environment.',
      'Designed formation-aware observation and reward terms — formation keeping, inter-drone safety distance, and altitude limits — with collisions, out-of-bounds, and attitude loss as terminations; validated policies across obstacle densities.',
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
    seasons of ROBOCON (two national second prizes, and a national first prize for the team's bionic-legged entry).
    The public stack covers the Livox MID-360 and FAST-LIO2 pipeline, a Gazebo court simulation, ROS 2 integration
    for navigation, and the handoff to the embedded-control side.`,
    highlights: [
      'Defined a unified pose interface with triple quality gating (freshness, degeneration, jumps) across lidar-inertial localisation, mapping, and fixed-map localisation, so navigation and shooting share one trustworthy pose; validated in simulation first, then migrated to the real robot.',
      'Built the simulation-first autonomy stack: Gazebo court, LiDAR and RGB-D models, and a scripted scoring routine that smoke-tests locally.',
      'Modelled the ball trajectory with gravity, drag, and Magnus effects, calibrating the distance-to-launch-speed mapping with simulated annealing; handled on-court depth drift with triangulation fallback and fence re-anchoring.',
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
