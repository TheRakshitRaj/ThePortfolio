import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiCplusplus,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiVercel
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Brand colors
const colors = {
  js: '#F7DF1E',
  ts: '#3178C6',
  html: '#E34F26',
  css: '#1572B6',
  react: '#61DAFB',
  node: '#5FA04E',
  bootstrap: '#7952B3',
  tailwind: '#06B6D4',
  cpp: '#00599C',
  nextjs: '#111111',
  git: '#F05032',
  github: '#181717',
  vscode: '#007ACC',
  figma: '#F24E1E',
  postman: '#FF6C37',
  mongodb: '#47A248',
  firebase: '#FFCA28',
  vercel: '#000000'
};

export const IconJS = ({ size = 28 }) => (
  <SiJavascript size={size} color={colors.js} />
);

export const IconTS = ({ size = 28 }) => (
  <SiTypescript size={size} color={colors.ts} />
);

export const IconHTML = ({ size = 28 }) => (
  <SiHtml5 size={size} color={colors.html} />
);

export const IconCSS = ({ size = 28 }) => (
  <SiCss size={size} color={colors.css} />
);

export const IconReact = ({ size = 28 }) => (
  <SiReact size={size} color={colors.react} />
);

export const IconNode = ({ size = 28 }) => (
  <SiNodedotjs size={size} color={colors.node} />
);

export const IconBootstrap = ({ size = 28 }) => (
  <SiBootstrap size={size} color={colors.bootstrap} />
);

export const IconTailwind = ({ size = 28 }) => (
  <SiTailwindcss size={size} color={colors.tailwind} />
);

export const IconCpp = ({ size = 28 }) => (
  <SiCplusplus size={size} color={colors.cpp} />
);

export const IconNextjs = ({ size = 28 }) => (
  <SiNextdotjs size={size} color={colors.nextjs} />
);

export const IconGit = ({ size = 28 }) => (
  <SiGit size={size} color={colors.git} />
);

export const IconGitHub = ({ size = 28 }) => (
  <SiGithub size={size} color={colors.github} />
);

export const IconVSCode = ({ size = 28 }) => (
  <VscVscode size={size} color={colors.vscode} />
);

export const IconFigma = ({ size = 28 }) => (
  <SiFigma size={size} color={colors.figma} />
);

export const IconPostman = ({ size = 28 }) => (
  <SiPostman size={size} color={colors.postman} />
);

export const IconMongoDB = ({ size = 28 }) => (
  <SiMongodb size={size} color={colors.mongodb} />
);

export const IconFirebase = ({ size = 28 }) => (
  <SiFirebase size={size} color={colors.firebase} />
);

export const IconVercel = ({ size = 28 }) => (
  <SiVercel size={size} color={colors.vercel} />
);
