import React from 'react';
import { Dimensions } from 'react-native';

import PersonIcon1 from 'ui/assets/icons/person_1.svg';
import PersonIcon2 from 'ui/assets/icons/person_2.svg';
import PersonIcon3 from 'ui/assets/icons/person_3.svg';
import PersonIcon4 from 'ui/assets/icons/person_4.svg';
import PersonIcon5 from 'ui/assets/icons/person_5.svg';
import PersonIcon6 from 'ui/assets/icons/person_6.svg';
import PersonIcon7 from 'ui/assets/icons/person_7.svg';
import PersonIcon8 from 'ui/assets/icons/person_8.svg';
import PersonIcon9 from 'ui/assets/icons/person_9.svg';
import PersonIcon10 from 'ui/assets/icons/person_10.svg';
import PersonIcon11 from 'ui/assets/icons/person_11.svg';
import PersonIcon12 from 'ui/assets/icons/person_12.svg';
import PersonIcon13 from 'ui/assets/icons/person_13.svg';
import PersonIcon14 from 'ui/assets/icons/person_14.svg';

const { height, width } = Dimensions.get('window');
//844
//390
const OnBoardingData = [
  {
    question: 'In which country were you born?',
    icon: PersonIcon1,
    icon_zIndex: 1,
    iconHeight: 204,
    iconWidth: 120,
    type: 'select',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Spain',
        value: 'spain',
      },
      {
        id: '2',
        label: 'Hungary',
        value: 'hungary',
      },
      {
        id: '3',
        label: 'Rumania',
        value: 'rumania',
      },
      {
        id: '4',
        label: 'England',
        value: 'england',
      },
    ],
  },
  {
    question: 'Do you like pineapple in your pizza?',
    icon: PersonIcon2,
    icon_zIndex: -1,
    iconHeight: 174,
    iconWidth: 100,
    type: 'checkbox',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Yeah, of course!',
        value: true,
      },
      {
        id: '2',
        label: 'Nope, kill me!',
        value: false,
      },
    ],
  },
  {
    question: 'What is your role?',
    icon: PersonIcon3,
    icon_zIndex: 1,
    iconHeight: 174,
    iconWidth: 120,
    type: 'select',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Human Resources',
        value: 'human resources',
      },
      {
        id: '2',
        label: 'Fullstack developer',
        value: 'fullstack developer',
      },
      {
        id: '3',
        label: 'Backend',
        value: 'backend',
      },
      {
        id: '4',
        label: 'Frontend',
        value: 'frontend',
      },
      {
        id: '5',
        label: 'Ciber security',
        value: 'ciber security',
      },
    ],
  },
  {
    question: 'Among these colours, what are your favourites to wear?',
    icon: PersonIcon4,
    icon_zIndex: -1,
    iconHeight: 224,
    iconWidth: 80,
    type: 'select',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Black',
        value: 'black',
      },
      {
        id: '2',
        label: 'White',
        value: 'white',
      },
      {
        id: '3',
        label: 'Grey',
        value: 'grey',
      },
      {
        id: '4',
        label: 'Blue',
        value: 'blue',
      },
      {
        id: '5',
        label: 'Red',
        value: 'red',
      },
      {
        id: '6',
        label: 'Pink',
        value: 'pink',
      },
      {
        id: '7',
        label: 'Yellow',
        value: 'yellow',
      },
      {
        id: '8',
        label: 'Green',
        value: 'green',
      },
      {
        id: '9',
        label: 'Brown',
        value: 'brown',
      },
    ],
  },
  {
    question: 'What of this sports do you practice?',
    icon: PersonIcon5,
    icon_zIndex: -1,
    iconHeight: 154,
    iconWidth: 140,
    type: 'checkbox',
    multiple: true,
    options: [
      {
        id: '1',
        label: 'Football',
        value: 'football',
      },
      {
        id: '2',
        label: 'Rugby',
        value: 'rugby',
      },
      {
        id: '3',
        label: 'Boxing',
        value: 'boxing',
      },
      {
        id: '4',
        label: 'Padel',
        value: 'padel',
      },
      {
        id: '5',
        label: 'Tennis',
        value: 'tennis',
      },
      {
        id: '6',
        label: 'Swimming',
        value: 'swimming',
      },
    ],
  },
  {
    question: 'Do you like spicy food?',
    icon: PersonIcon6,
    icon_zIndex: -1,
    iconHeight: 159,
    iconWidth: 154,
    type: 'checkbox',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Yes, I\'m half mexican',
        value: true,
      },
      {
        id: '2',
        label: 'No, i would be instead',
        value: false,
      },
    ],
  },
  {
    question: 'Are you vegetarian or vegan?',
    icon: PersonIcon7,
    icon_zIndex: -1,
    iconHeight: 159,
    iconWidth: 110,
    type: 'checkbox',
    multiple: false,
    options: [
      {
        id: '1',
        label: 'Yes!',
        value: true,
      },
      {
        id: '2',
        label: 'Not at all!',
        value: false,
      },
    ],
  },
  {
    question: 'How many tatoos do you have?',
    icon: PersonIcon8,
    icon_zIndex: -1,
    iconHeight: 259,
    iconWidth: 110,
    type: 'text',
    multiple: false,
    options: [],
  },
  {
    question: 'In how many countries have you lived?',
    icon: PersonIcon9,
    icon_zIndex: -1,
    iconHeight: 244,
    iconWidth: 110,
    type: 'text',
    multiple: false,
    options: [],
  },
  {
    question: 'How many pets do you have?',
    icon: PersonIcon10,
    icon_zIndex: -1,
    iconHeight: 164,
    iconWidth: 100,
    type: 'text',
    multiple: false,
    options: [],
  },
  {
    question: 'How many brothers and sisters do you have?',
    icon: PersonIcon11,
    icon_zIndex: -1,
    iconHeight: 174,
    iconWidth: 100,
    type: 'text',
    multiple: false,
    options: [],
  },
  {
    question: 'What is you shoe size?',
    icon: PersonIcon12,
    icon_zIndex: -1,
    iconHeight: 224,
    iconWidth: 80,
    type: 'select',
    multiple: false,
    options: [
      {
        id: '1',
        label: '< 35',
        value: 'some value',
      },
      {
        id: '2',
        label: '35',
        value: 'some value',
      },
      {
        id: '3',
        label: '36',
        value: 'some value',
      },
      {
        id: '4',
        label: '37',
        value: 'some value',
      },
      {
        id: '5',
        label: '38',
        value: 'some value',
      },
      {
        id: '6',
        label: '39',
        value: 'some value',
      },
      {
        id: '7',
        label: '40',
        value: 'some value',
      },
      {
        id: '8',
        label: '41',
        value: 'some value',
      },
      {
        id: '9',
        label: '42',
        value: 'some value',
      },
      {
        id: '10',
        label: '43',
        value: 'some value',
      },
      {
        id: '11',
        label: '44',
        value: 'some value',
      },
      {
        id: '12',
        label: '45',
        value: 'some value',
      },
      {
        id: '13',
        label: '46',
        value: 'some value',
      },
      {
        id: '14',
        label: '47',
        value: 'some value',
      },
      {
        id: '15',
        label: '> 47',
        value: 'some value',
      },
    ],
  },
  {
    question: 'What is you favourite food?',
    icon: PersonIcon13,
    icon_zIndex: -1,
    iconHeight: 164,
    iconWidth: 120,
    type: 'checkbox',
    multiple: true,
    options: [
      {
        id: '1',
        label: 'Spanish',
        value: 'spanish',
      },
      {
        id: '2',
        label: 'Italian',
        value: 'italian',
      },
      {
        id: '3',
        label: 'Chinese food',
        value: 'chinese food',
      },
      {
        id: '4',
        label: 'Korean',
        value: 'korean',
      },
      {
        id: '5',
        label: 'Indian',
        value: 'indian',
      },
      {
        id: '6',
        label: 'Thai',
        value: 'thai',
      },
    ],
  },
  {
    question: 'Do you own any of this?',
    icon: PersonIcon14,
    icon_zIndex: -1,
    iconHeight: 164,
    iconWidth: 120,
    type: 'checkbox',
    multiple: true,
    options: [
      {
        id: '1',
        label: 'Car',
        value: 'car',
      },
      {
        id: '2',
        label: 'Bike',
        value: 'bike',
      },
      {
        id: '3',
        label: 'Motorbike',
        value: 'motorbike',
      },
      {
        id: '4',
        label: 'Roller skates',
        value: 'roller skates',
      },
      {
        id: '5',
        label: 'Plane',
        value: 'plane',
      },
      {
        id: '6',
        label: 'Submarine',
        value: 'submarine',
      },
    ],
  },
];

export { OnBoardingData };