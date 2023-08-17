import type { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name Settings
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
    header: {
      colorBgHeader: '#292f33',
      colorHeaderTitle: '#fff',
      colorTextMenu: '#dfdfdf',
      colorTextMenuSecondary: '#dfdfdf',
      colorTextMenuSelected: '#fff',
      colorBgMenuItemSelected: '#22272b',
      colorTextMenuActive: 'rgba(255,255,255,0.85)',
      colorTextRightActionsItem: '#dfdfdf',
    },
    colorTextAppListIconHover: '#fff',
    colorTextAppListIcon: '#dfdfdf',
    sider: {
      colorMenuBackground: '#fff',
      colorMenuItemDivider: '#dfdfdf',
      colorBgMenuItemHover: '#f6f6f6',
      colorTextMenu: '#595959',
      colorTextMenuSelected: '#242424',
      colorTextMenuActive: '#242424',
    },
  },
};

export default Settings;
