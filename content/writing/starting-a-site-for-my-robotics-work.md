---
title: 'Starting a site for my robotics work'
date: '2026-10-14'
description: 'Why I moved from a README-only portfolio to a personal site, what lives here, and how I try to keep the evidence honest.'
image: /images/writing/starting-a-site/system-overview.webp
imageAlt: 'The AerialSoftArm platform: quadrotor base, truss soft arm, wrist camera, two-finger gripper, and part stand.'
---

For the past year, everything I built shipped into a single GitHub repository — [MultiAgent-Robotics-Portfolio](https://github.com/yubohann/MultiAgent-Robotics-Portfolio) — with one README per project, tests, and evidence notes. That structure worked well for code review and poorly for everything else: nobody browsing my work wants to read a diff to find out what a project does.

So this site is the human-readable layer on top. The repository stays as the code home; this is where the map lives.

## What you will find here

- [Projects](/projects/): the register of what I have built — multi-agent search benchmarks captured in Isaac Sim, graph reinforcement learning, world models, and a rigid-soft aerial manipulator that grasps by bending.
- [Resume](/resume/): the same information in the format that application portals expect, kept in sync with the project register.
- Writing: notes like this one. When I learn something during a project that does not fit a README — a debugging story, an evaluation practice, a simulation trick — it goes here.

![AerialSoftArm system overview](/images/writing/starting-a-site/system-overview.webp 'The AerialSoftArm platform: quadrotor base, truss soft arm, wrist camera, two-finger gripper, and part stand.')

## How I try to keep it honest

Robot projects attract impressive-sounding claims, and I would rather be the site that under-claims. Three habits carried over from the portfolio repository:

1. **Evidence boundaries.** Simulation results are labelled as simulation. A hardware demo is a hardware demo. The project READMEs name what ran and where.
2. **Traceable numbers.** Every measurement I quote comes from a run whose configuration, seed, and artifacts are recorded. If I cannot point at the run, the number does not ship.
3. **Month-resolution dates.** Project timelines here are activity windows, not launch announcements. When a date is approximate, it says so where it matters.

None of this is novel — it is just the discipline that makes results reviewable, and it is much easier to keep when the writing starts while the project is running instead of after.

## What is next

More of the same, with the occasional note in between. If you are working on anything adjacent — sim-to-real manipulation, multi-robot exploration, robot learning evaluation — my inbox is open: see the [contact page](/contact/).
