import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faHelicopter,
  faPlane,
  faWineBottle,
  faWineGlassAlt,
  faUtensils,
  faGraduationCap,
  faSchool,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faArrowDown, faLaptopCode,
  faDrawPolygon, faEdit, faEdit,
  faBullhorn, faMapMarkerAlt, faPhone,
  faPaperPlane, faHelicopter, faPlane,
  faWineBottle, faWineGlassAlt, faUtensils,
  faGraduationCap, faSchool, faCalendarCheck);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;