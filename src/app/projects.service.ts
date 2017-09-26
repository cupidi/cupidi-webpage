import { Injectable } from '@angular/core';

export interface ProjectMember {
  name: string;
  role: string;
}

export interface ProjectAction {
  icon: string;
  link: string;
}

export interface Project {
  name: string;
  year: string;
  picture: string;
  description: string;
  projectMembers: ProjectMember[];
  projectActions?: ProjectAction[];
}

@Injectable()
export class ProjectsService {

  public projects: Project[] = [
    {
      name: 'Mi se jade',
      year: '2017',
      picture: 'assets/images/misejade.png',
      description: `The idea behind this project came while me and my friends were working together and we could not decide what to eat.
      This project is a web application that solves that problem and helps people find interesting meals near them.
      Currently it works only in Skopje, Macedonia.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Web Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Web Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX Designer'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://misejade.mk'
        }
      ]
    },
    {
      name: 'FitKit',
      year: '2017',
      picture: 'assets/images/fitkit.png',
      description: `Mobile application for people that do a lot of workouts. It allows you to pay only one subscription
      and workout everything, anywhere and anytime you choose, at the best gyms and studios near you.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Ionic Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Ionic Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX Designer'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-facebook',
          link: 'https://facebook.com/fitkitmk/'
        },
        {
          icon: 'fa-android',
          link: 'https://play.google.com/store/apps/details?id=mk.fitkit.app'
        },
        {
          icon: 'fa-apple',
          link: 'https://itunes.apple.com/us/app/fitkit-mk/id1237334836'
        }
      ]
    },
    {
      name: 'Dareio',
      year: '2017',
      picture: 'assets/images/dareio.png',
      description: `Location based dating mobile application that connects people with mutual interests and allows them to chat.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Ionic Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Ionic Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX Designer'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
      ]
    },
    {
      name: 'UpVerb',
      year: '2017',
      picture: 'assets/images/upverb.png',
      description: `Online language learning platform that connects students and teacher.
      The idea is to allow students to learn the language from native speaking teachers by having 1:1 video calls with them.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Web Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Web Developer'
        },
        {
          name: 'Marijan Petrovski',
          role: 'Project Manager'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://upverb.com'
        }
      ]
    },
    {
      name: 'Eksterno',
      year: '2014',
      picture: 'assets/images/eksterno.png',
      description: `Small, free time project that was inspired by the changes in the educational system in Macedonia that
      introduced new testing for high school students. Web and mobile quiz with funny questions written
      by the Macedonian twitter community.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Web Developer'
        },
        {
          name: 'Ivan Velickovski',
          role: 'Mobile Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'UI/UX Designer'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://eksterno.mk/'
        },
        {
          icon: 'fa-facebook',
          link: 'https://facebook.com/eksternoapp/'
        },
        {
          icon: 'fa-android',
          link: 'https://play.google.com/store/apps/details?id=mk.eksterno2'
        },
        {
          icon: 'fa-apple',
          link: 'https://itunes.apple.com/mk/app/eksterno/id1015920718'
        }
      ]
    },
    {
      name: 'Klonk',
      year: '2016-Present',
      picture: 'assets/images/klonk.png',
      description: `Free time project that me and my friends are working on. This mobile game is an endless runner that takes place
      in a kind of a voxel world, where you are trying to outrun the antagonist. You can challenge your friends, collect coins
      and unlock new characters.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'UI & Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Branding & Visual Identity'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://bigfatsparrow.com'
        },
        {
          icon: 'fa-youtube',
          link: 'https://youtu.be/nHrZXyP7ojk'
        }
      ]
    },
    {
      name: 'Puzzle Pilot',
      year: '2015',
      picture: 'assets/images/puzzlepilot.png',
      description: `This is my first game that made it to the stores. It is a mobile puzzle game that me and a group of friends
      did in our free time. The game has a galaxy exploration theme combined with a gameplay that
      challenges your color matching abilities.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'UI Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        },
        {
          name: 'Kristina Mancheva',
          role: 'Game Design'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://bigfatsparrow.com/puzzlepilot/'
        },
        {
          icon: 'fa-youtube',
          link: 'https://youtube.com/watch?v=ojwV119IgFk&t=3s'
        },
        {
          icon: 'fa-facebook',
          link: 'https://facebook.com/puzzlepilotapp/'
        },
        {
          icon: 'fa-android',
          link: 'https://play.google.com/store/apps/details?id=com.vm.puzzlepilot'
        },
        {
          icon: 'fa-apple',
          link: 'https://itunes.apple.com/us/app/puzzle-pilot/id966311595'
        },
        {
          icon: 'fa-amazon',
          link: 'https://amazon.com/dp/B06XYSKJMZ/'
        }
      ]
    },
    {
      name: 'Rite of passage GGJ',
      year: '2016',
      picture: 'assets/images/riteofpassage.png',
      description: `Prototype for the Global Game Jam 2016 with the theme "Ritual". In this game, you play a young boy who
      is sent on a journey to earn his rite of passage and become a warrior. The game is a 2D platformer with an interesting plane
      switching mechanics.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'UI & Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'https://globalgamejam.org/2016/games/rite-passage-7'
        },
        {
          icon: 'fa-youtube',
          link: 'https://youtu.be/3jqr_JwfzBE?t=4s'
        }
      ]
    },
    {
      name: 'Inspired GGJ',
      year: '2014',
      picture: 'assets/images/inspired.png',
      description: `Prototype for the Global Game Jam 2016 with the theme "Not everything is what it seems". The evil has taken all the
      confidence of our hero and your job is to help him take it back. The world is full of difficult puzzles but there are characters
      that will inspire you to see that they are not as difficult as they seem. This game is a puzzle platformer.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Game Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Game Developer'
        },
        {
          name: 'Ilija Vankov',
          role: 'Game Developer'
        },
        {
          name: 'Vladimir Vasilevski',
          role: 'Game Artist'
        }
      ],
      projectActions: [
        {
          icon: 'fa-globe',
          link: 'http://globalgamejam.org/2014/games/inspired'
        },
        {
          icon: 'fa-youtube',
          link: 'https://www.youtube.com/watch?v=_WKBZATzTts'
        }
      ]
    }
  ];

  constructor() { }

}
