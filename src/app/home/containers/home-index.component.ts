import { Component, OnInit } from '@angular/core';
import { appLayout } from '../../app.config';

import { UiCard, UiService } from '@kikstart/ui';
import { UiLink } from '@kikstart/ui';
import { UiBrand } from '@kikstart/ui';

@Component({
  template: `
    <ui-hero [brand]="brand" [description]="brand.description" [link]="link" [cards]="cards"></ui-hero>
  `,
})
export class HomeIndexComponent implements OnInit {
  brand: UiBrand = { ...appLayout.brand, size: 'lg' };
  link: UiLink = {
    path: '/demo',
    label: "Look at some demo's",
    iconAfter: 'ml-2 fa fa-angle-double-right',
  };
  cards: UiCard[] = [
    {
      title: 'Documentation',
      content: `Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi. Quisque justo
      nunc, sollicitudin euismod euismod at, tincidunt ut tellus. Vivamus rhoncus mattis varius.`,
      links: [
        {
          label: 'Get Started',
          path: '/docs',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
    {
      title: 'Blog',
      content: `Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi. Quisque justo
      nunc, sollicitudin euismod euismod at, tincidunt ut tellus. Vivamus rhoncus mattis varius.`,
      links: [
        {
          label: 'View Posts',
          path: '/blog',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
    {
      title: 'Style Guides',
      content: `Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam a maximus mi. Quisque justo
      nunc, sollicitudin euismod euismod at, tincidunt ut tellus. Vivamus rhoncus mattis varius.`,
      links: [
        {
          label: 'Learn More',
          path: '/style-guides',
          iconAfter: 'ml-2 fa fa-angle-double-right',
        },
      ],
    },
  ];
  constructor(private ui: UiService) {}

  ngOnInit() {
    this.ui.setMetaData({ title: 'Home' });
  }
}
