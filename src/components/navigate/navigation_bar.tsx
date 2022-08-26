import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { myTheme } from '../../mytheme';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 308,
    //height: '1000px',
    height: '100vh',
    // boxSizing: 'border-box',
    // borderRight: '1px solid #A9A9A9',
    overflowY: 'auto',
    paddingTop: '20px',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        expandAriaLabel: 'Expand Home section',
        isExpanded: true,
      },
      {
        name: 'Make a Post',
        url: '/interest',
        isExpanded: true,
      },
      {
        name: 'Team',
        url: '/team',
        isExpanded: true,
      },
    ],
  },
];

export const NavigationBar: React.FunctionComponent = () => {

  return (
    <div className='bar'>
        <Nav
          ariaLabel="Nav basic example"
          styles={navStyles}
          groups={navLinkGroups}
          theme={myTheme}
        />
    </div>
  );
};
