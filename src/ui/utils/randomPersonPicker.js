import React from 'react';

import Person1 from 'ui/assets/svg/person_1.svg';
import Person2 from 'ui/assets/svg/person_2.svg';
import Person3 from 'ui/assets/svg/person_3.svg';
import Person4 from 'ui/assets/svg/person_4.svg';
import Person5 from 'ui/assets/svg/person_4.svg';

const PEOPLE_MAPPER = [
  <Person1 width={100} />,
  <Person2 width={100} />,
  <Person3 width={100} />,
  <Person4 width={100} />,
  <Person5 width={100} />,
];

export const randomPersonPicker = () =>
  PEOPLE_MAPPER[Math.floor(Math.random() * PEOPLE_MAPPER.length)];
