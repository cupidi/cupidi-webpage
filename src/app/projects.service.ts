import { Injectable } from '@angular/core';

export interface ProjectMember {
  name: string,
  role: string
}

export interface ProjectAction {
  icon: string,
  link: string
}

export interface Project {
  name: string,
  year: string,
  picture: string,
  description: string,
  projectMembers: ProjectMember[],
  projectActions?: ProjectAction[]
}

@Injectable()
export class ProjectsService {

  public projects: Project[] = [
    {
      name: 'Klonk',
      year: '2016',
      picture: 'assets/images/klonk.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
          icon: 'fa-youtube',
          link: 'https://youtu.be/nHrZXyP7ojk'
        }
      ]
    },
    {
      name: 'Puzzle Pilot',
      year: '2015',
      picture: 'assets/images/puzzlepilot.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
          icon: 'fa-facebook',
          link: 'https://facebook.com/puzzlepilotapp/'
        },
        {
          icon: 'fa-youtube',
          link: 'https://youtube.com/watch?v=ojwV119IgFk&t=3s'
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
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
          link: 'http://globalgamejam.org/2014/games/inspired'
        }
      ]
    },
    {
      name: 'Inspired GGJ',
      year: '2014',
      picture: 'assets/images/inspired.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
        }
      ]
    },
    {
      name: 'Mi se jade',
      year: '2017',
      picture: 'assets/images/misejade.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Front End Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Frond End Developer'
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
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
      name: 'UpVerb',
      year: '2017',
      picture: 'assets/images/upverb.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Full Stack Developer'
        },
        {
          name: 'Irena Ljubikj',
          role: 'Front End Developer'
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
      name: 'Dareio',
      year: '2017',
      picture: 'assets/images/dareio.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
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
      name: 'Eksterno',
      year: '2014',
      picture: 'assets/images/eksterno.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Front End Developer'
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
      name: 'Nederman',
      year: '2017',
      picture: 'assets/images/nederman.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Front End Developer'
        }
      ],
      projectActions: [
      ]
    },
    {
      name: 'Viacura Optimus',
      picture: 'assets/images/viacuraoptimus.png',
      year: '2016',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Ionic Developer'
        }
      ],
      projectActions: [
      ]
    },
    {
      name: 'Game of Sports',
      year: '2015',
      picture: 'assets/images/gameofspoorts.png',
      description: `Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
        posuere urna.Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus
        viverra, ex nulla cursus.`,
      projectMembers: [
        {
          name: 'Mario Ampov',
          role: 'Full Stack Developer'
        }
      ],
      projectActions: [
      ]
    }
  ];

  constructor() { }

}
