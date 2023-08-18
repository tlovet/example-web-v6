import type { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name LayoutSettings
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  // navTheme: dark | light | realDark
  // 需同步修改app.ts、@/components/RightContent/ThemeSwitch.ts中的navTheme
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  title: 'Ant Design Pro',
  // 导航模式: side-侧边菜单布局 | top-顶部菜单布局 | mix-混合菜单布局
  layout: 'mix',
  // Fixed-定宽，top时生效 | Fluid-流式
  contentWidth: 'Fluid',
  // 固定Header
  fixedHeader: true,
  // 固定侧边菜单
  fixSiderbar: true,
  // 自动分割菜单
  splitMenus: false,
  // 侧边菜单类型: sub-经典模式 | group-分组模式
  siderMenuType: 'sub',
  // 色弱模式
  colorWeak: false,
  // 未知功能
  pwa: false,
  // 改为使用本地文件，在/src/app.ts的layout中配置
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    // header: {
    //   colorBgHeader: '#292f33',
    //   colorHeaderTitle: '#fff',
    //   colorTextMenu: '#dfdfdf',
    //   colorTextMenuSecondary: '#dfdfdf',
    //   colorTextMenuSelected: '#fff',
    //   colorBgMenuItemSelected: '#22272b',
    //   colorTextMenuActive: 'rgba(255,255,255,0.85)',
    //   colorTextRightActionsItem: '#dfdfdf',
    // },
    // // colorTextAppListIconHover: '#fff',
    // // colorTextAppListIcon: '#dfdfdf',
    // sider: {
    //   colorMenuBackground: '#fff',
    //   colorMenuItemDivider: '#dfdfdf',
    //   colorBgMenuItemHover: '#f6f6f6',
    //   colorTextMenu: '#595959',
    //   colorTextMenuSelected: '#242424',
    //   colorTextMenuActive: '#242424',
    // },
  },
};

export default Settings;
