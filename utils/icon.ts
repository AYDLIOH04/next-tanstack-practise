import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiRecoil,
  SiRedux,
  SiReact,
  SiNestjs,
  SiAngular,
  SiVuedotjs,
  SiMobx,
  SiJavascript,
} from 'react-icons/si';

export const getProgramIcon = (program: string): IconType => {
  const lowerCaseProgram = program.toLowerCase();

  switch (lowerCaseProgram) {
    case 'nextjs':
      return SiNextdotjs;
    case 'recoil':
      return SiRecoil;
    case 'redux':
      return SiRedux;
    case 'react':
      return SiReact;
    case 'nestjs':
      return SiNestjs;
    case 'angular':
      return SiAngular;
    case 'vue':
      return SiVuedotjs;
    case 'mobx':
      return SiMobx;
    default:
      return SiJavascript;
  }
};
