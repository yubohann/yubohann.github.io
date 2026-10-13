/**
 * The register of things I have built.
 *
 * Two groups, both kept deliberately:
 *
 * - `shipped` — selected robotics and machine-learning projects I built,
 *   led, or contributed to, and can be pointed at.
 * - `archive` — coursework and earlier systems work. A register that deletes
 *   its own history is a brochure, so these stay, stepped down rather than
 *   removed.
 *
 * Every shipped entry declares the role in `src/data/resume/work.ts` that
 * backs its dates and numeric claims. Archive entries are maintained here
 * directly. Those checks establish internal consistency; factual claims and
 * public destinations still need primary-source and live-link review.
 *
 * Project dates are month-resolution activity windows recorded from the
 * portfolio history; refine them here if a more precise record appears.
 */
export type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  /** Role, venue, or one-line positioning. Rendered as a mono label. */
  subtitle?: string;
  /**
   * Public destination for the work. Entries without one are rendered as
   * visibly inert rather than as cards that look clickable and are not.
   */
  link?: string;
  /** Résumé role that backs a shipped entry's dates and numeric claims. */
  sourceWork?: string;
  /**
   * Screenshot, where one exists. Optional: the card and the register row are
   * both designed to read on type and rules alone, so a new entry does not
   * need art invented for it.
   */
  image?: string;
  /**
   * ISO date my work on the project started, or a one-off shipped.
   * This is project activity, not necessarily a public launch date.
   */
  date: string;
  /** ISO date project activity ended. Omitted on one-offs and live work. */
  endDate?: string;
  /**
   * The project is still active. Drives the amber `Present` reading and is
   * mutually exclusive with `endDate`.
   */
  ongoing?: boolean;
  desc: string;
  /** Technologies the résumé names for this work. Omitted when it names none. */
  tech?: string[];
  status: ProjectStatus;
}

/**
 * Hand-ordered, most recent activity first within each group. Live work leads,
 * then sorts by its own start date; finished work sorts by its end (or one-off)
 * date. `projects.test.ts` pins the complete comparator, including ties.
 */
const data: Project[] = [
  {
    title: 'AerialSoftArm',
    subtitle: 'Independent research · sim-to-real aerial manipulation',
    link: 'https://github.com/yubohann/AerialSoftArm',
    sourceWork: 'Independent Research',
    image: '/images/projects/aerial-soft-arm.webp',
    date: '2026-09-01',
    ongoing: true,
    desc: 'A quadrotor carrying a rigid-soft truss arm that grasps by bending: the base freezes after a coarse pose, a bend-Jacobian visual servo owns the final centimetres, and two fingers must sustain contact before the part is lifted. Ships with MuJoCo hardware models, a keyboard operation panel, and a calibration export for the real rig.',
    tech: ['Isaac Lab', 'MuJoCo', 'Visual servoing', 'Sim-to-real'],
    status: 'shipped',
  },
  {
    title: 'Prediction-Informed Multi-Agent MPC',
    subtitle: 'Independent research · first-author paper in submission',
    sourceWork: 'Independent Research',
    date: '2025-10-01',
    ongoing: true,
    desc: 'Decision-focused learning and uncertainty-aware world models for adversarial multi-robot play: object-centric beliefs, a probabilistic ensemble that predicts rule risks beyond state, and a three-layer decision stack — flow-based candidate generation, CVaR-MPC screening, and a rule shield. Scales from a real two-drone match to swarms of fifty, and transfers to urban traffic signal control (digital-twin calibration error 0.0053, recovering 41.1% of perfect-prediction gains).',
    tech: ['World models', 'MPC', 'CVaR'],
    status: 'shipped',
  },
  {
    title: 'AeroCityBench',
    subtitle: 'Independent research · benchmark infrastructure',
    link: 'https://github.com/yubohann/AeroCityBench',
    sourceWork: 'Independent Research',
    image: '/images/projects/aerocity-bench.webp',
    date: '2026-02-01',
    endDate: '2026-09-30',
    desc: 'An open, physics-grounded benchmark for multi-UAV target search under urban topology, target-process, and fleet-resilience shifts: procedural cities, a public task contract, scorer-private target truth, and confirmation that requires a legal observation in flight.',
    tech: ['Multi-UAV', 'Procedural generation', 'Benchmark design'],
    status: 'shipped',
  },
  {
    title: 'AeroGate Graph',
    subtitle: 'Independent research · graph reinforcement learning',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/aerogate-graph',
    sourceWork: 'Independent Research',
    date: '2025-12-01',
    endDate: '2026-09-30',
    desc: 'A fixed-altitude drone-racing environment with single-agent, variable-fleet, and dynamic gate-density tasks: graph observations, A-star routing, virtual-structure formation, and an execution-time safety layer — kinematic limits, segment-level collision checks, formation consistency — that held zero collisions across 42 gate layouts × 10 seeds.',
    tech: ['Graph RL', 'Formation control', 'Safety shields'],
    status: 'shipped',
  },
  {
    title: 'FraudGraph',
    subtitle: 'Independent research · machine-learning engineering',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/fraudgraph-ml-engineering',
    sourceWork: 'Independent Research',
    date: '2026-04-01',
    endDate: '2026-09-30',
    desc: 'Research code behind a hybrid graph-and-sequence fraud-detection workflow: graph, relation-sequence, and event-sequence views feeding a multimodal classifier, with protocol scripts for smoke tests, ablations, tuning, and reporting.',
    tech: ['PyTorch', 'Graph learning', 'ML engineering'],
    status: 'shipped',
  },
  {
    title: 'HM3D Realised-QD',
    subtitle: 'Independent research · exploration and quality-diversity',
    link: 'https://github.com/yubohann/hm3d-realised-qd',
    sourceWork: 'Independent Research',
    image: '/images/projects/hm3d-realised-qd.webp',
    date: '2026-03-01',
    endDate: '2026-09-30',
    desc: 'Outcome-grounded quality-diversity and reinforcement learning for multi-UAV exploration in HM3D-derived scenes: a shared belief, team plans chosen from a common candidate pool, and behavioural diversity that comes only from execution receipts.',
    tech: ['Quality-diversity', 'Habitat', 'Reinforcement learning'],
    status: 'shipped',
  },
  {
    title: 'Rivermark',
    subtitle: 'Independent research · benchmark infrastructure',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/rivermark',
    sourceWork: 'Independent Research',
    image: '/images/projects/rivermark.webp',
    date: '2025-10-01',
    endDate: '2026-09-30',
    desc: 'A physics-grounded benchmark toolchain for multi-agent three-dimensional search, built on native Isaac Sim captures of a fleet of CF2X quadrotors in a procedural City-Lite scene. Episodes bind scene, protocol, runtime, and source revision to identity contracts, and target truth stays scorer-side.',
    tech: ['Isaac Sim', 'Benchmark design', 'Multi-agent systems'],
    status: 'shipped',
  },
  {
    title: 'Robocon MID-360 Autonomy Stack',
    subtitle: 'LiDAR and perception lead · ROBOCON',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/robocon-mid360-autonomy-stack',
    sourceWork: 'ROBOCON Robotics Team',
    image: '/images/projects/robocon-mid360-autonomy-stack.webp',
    date: '2024-06-01',
    endDate: '2025-10-31',
    desc: 'A simulation-first ROS 2 autonomy stack for a competition basketball robot — Livox MID-360 and FAST-LIO2 localisation, a Gazebo court simulation, navigation interfaces, and the embedded-control handoff.',
    tech: ['ROS 2', 'FAST-LIO2', 'Gazebo', 'Point cloud'],
    status: 'shipped',
  },
  {
    title: 'RoboCup CBG-WM',
    subtitle: 'Team lead · RoboCup China 2025',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/robocup-cbg-wm',
    sourceWork: 'RoboCup China 2025',
    image: '/images/projects/robocup-cbg-wm.webp',
    date: '2025-03-01',
    endDate: '2025-10-31',
    desc: 'World models and risk-aware control for adversarial multi-robot navigation, grown from the visual-challenge entry at RoboCup China 2025: counterfactual belief graphs, replayable simulated matches, and a rule environment that tests control stacks under competition constraints.',
    tech: ['World models', 'Multi-robot navigation', 'Simulation'],
    status: 'shipped',
  },
  {
    title: 'ROS 2 Notes',
    subtitle: 'Engineering handbook',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/ros2-systematic-learning-notes',
    date: '2025-06-01',
    endDate: '2026-09-30',
    desc: 'A structured ROS 2 engineering handbook: eighteen chapters from workspaces, topics, and QoS through TF2, Nav2, MoveIt 2, DDS, embedded deployment, and fault tolerance.',
    tech: ['ROS 2', 'Technical writing'],
    status: 'archive',
  },
  {
    title: 'Streaming Lakehouse Labs',
    subtitle: 'Coursework · stream-batch systems',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/streaming-lakehouse',
    date: '2026-06-01',
    endDate: '2026-07-31',
    desc: 'A modern lakehouse, seven streaming challenges, a real-time recommender, and a short-video review lab.',
    tech: ['Kafka', 'Flink', 'Paimon', 'Spark'],
    status: 'archive',
  },
  {
    title: 'KernelVision',
    subtitle: 'Coursework · computer vision',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/KernelVision',
    date: '2026-03-01',
    endDate: '2026-06-30',
    desc: 'Four computer-vision experiments from spatial filtering to a CIFAR-10 CNN, with animated demos.',
    tech: ['OpenCV', 'PyTorch'],
    status: 'archive',
  },
  {
    title: 'SmartCity GIS Labs',
    subtitle: 'Coursework · spatial analysis',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/SmartCity-GIS-Labs',
    date: '2026-03-01',
    endDate: '2026-06-30',
    desc: 'Smart-city modelling in ArcGIS: scan vectorisation, rubbersheet adjustment, topology repair, vector spatial analysis, and gas-network emergency tracing.',
    tech: ['ArcGIS', 'Spatial analysis'],
    status: 'archive',
  },
  {
    title: 'Spatiotemporal HPC Labs',
    subtitle: 'Coursework · high-performance computing',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/Spatiotemporal-HPC-Labs',
    date: '2026-03-01',
    endDate: '2026-06-30',
    desc: 'Four high-performance computing labs: integral computation, matrix algebra with least-squares fitting, MPI distributed-memory versions, and OpenMP image warping.',
    tech: ['C++17', 'OpenMPI', 'OpenMP'],
    status: 'archive',
  },
  {
    title: 'Supermarket Management System',
    subtitle: 'Coursework · database systems',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/supermarket-management-system',
    date: '2026-03-01',
    endDate: '2026-06-30',
    desc: 'A Flask store-management application with tests, analysis reports, and defence material.',
    tech: ['Flask', 'SQLAlchemy', 'pytest'],
    status: 'archive',
  },
  {
    title: 'Machine Learning Coursework',
    subtitle: 'Coursework · classical algorithms',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/machine-learning',
    date: '2025-09-01',
    endDate: '2026-01-31',
    desc: 'Ten classical algorithms written from scratch plus a PCA, LDA, kNN, and ID3 pipeline.',
    tech: ['NumPy', 'scikit-learn', 'Python'],
    status: 'archive',
  },
  {
    title: 'YOLO26 + VisDrone Detection',
    subtitle: 'Coursework · object detection',
    link: 'https://github.com/yubohann/MultiAgent-Robotics-Portfolio/tree/main/coursework/yolo26-visdrone-detection',
    date: '2025-09-01',
    endDate: '2025-12-31',
    desc: 'Drone detection from VisDrone subset preparation to training, validation, and ONNX export.',
    tech: ['Ultralytics YOLO', 'ONNX'],
    status: 'archive',
  },
];

export default data;

/** The register: selected work, most recent first. */
export const shipped = data.filter((project) => project.status === 'shipped');

/**
 * The homepage preview: flagship entries that have artwork, in register
 * order. Curated by title rather than sliced from `shipped` so adding a new
 * flagship does not silently push one of these off the homepage.
 */
const FEATURED_TITLES = ['AerialSoftArm', 'Rivermark', 'AeroCityBench'];

export const featured = FEATURED_TITLES.map((title) =>
  data.find((project) => project.title === title),
).filter((project): project is Project => Boolean(project?.image));

/** Coursework and earlier systems work, most recent first. */
export const archive = data.filter((project) => project.status === 'archive');
