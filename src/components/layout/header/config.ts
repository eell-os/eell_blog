import { createElement as h } from 'react'
import type { ReactNode } from 'react'

import {
  FaSolidCircle,
  FaSolidCircleNotch,
  FaSolidComments,
  FaSolidDotCircle,
  FaSolidFeatherAlt,
  FaSolidHistory,
  FaSolidUserFriends,
  IcTwotoneSignpost,
  IonBook,
  MdiFlask,
  MdiLightbulbOn20,
  RMixPlanet,
} from '~/components/icons/menu-collection'

export interface IHeaderMenu {
  title: string
  path: string
  type?: string
  icon?: ReactNode
  subMenu?: IHeaderMenu[]
}
export const headerMenuConfig: IHeaderMenu[] = [
  {
    title: '首页',
    path: '/',
    type: 'Home',
    icon: h(FaSolidDotCircle),
    subMenu: [],
  },
  {
    title: '文章',
    path: '/posts',
    type: 'Post',
    subMenu: [],
    icon: h(IcTwotoneSignpost),
  },
  {
    title: '笔记',
    type: 'Note',
    path: '/notes',
    icon: h(FaSolidFeatherAlt),
  },

  {
    title: '时光',
    icon: h(FaSolidHistory),
    path: '/timeline',
    subMenu: [
      {
        title: '生活',
        icon: h(FaSolidFeatherAlt),
        path: '/timeline?type=note',
      },
      {
        title: '博文',
        icon: h(IonBook),
        path: '/timeline?type=post',
      },
      {
        title: '回忆',
        icon: h(FaSolidCircle),
        path: '/timeline?memory=1',
      },
      {
        title: '专栏',
        path: '/notes/topics',
        icon: h('i', {
          className: 'icon-[mingcute--align-bottom-fill] flex center',
        }),
      },
    ],
  },
  {
    title: '友链',
    icon: h(FaSolidUserFriends),
    path: '/friends',
  },

    {
    title: '网站',
    icon: h(RMixPlanet),
    path: '#',
    subMenu: [
      {
        title: '网盘',
        icon: h(RMixPlanet),
        path: 'https://pan.eell.pro',
      },
      {
        title: '图床',
        icon: h(RMixPlanet),
        path: 'https://image.eell.pro',
      },
      {
        title: '导航',
        icon: h(RMixPlanet),
        path: 'https://link.eell.pro',
      },
    ],
  },
  
  {
    title: '更多',
    icon: h(FaSolidCircleNotch),
    path: '#',
    subMenu: [
      {
        title: '思考',
        icon: h(MdiLightbulbOn20),
        path: '/thinking',
      },
      {
        title: '项目',
        icon: h(MdiFlask),
        path: '/projects',
      },
      {
        title: '一言',
        path: '/says',
        icon: h(FaSolidComments),
      },
    ],
  },
]
