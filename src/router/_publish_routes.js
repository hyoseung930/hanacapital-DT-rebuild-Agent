const routes = [
  // ui-guide
  {
    path: '/',
    name: '/',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide-index',
    name: '/guide-index',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/component',
    name: '/guide/component',
    component: () => import('@/views/uiGuide/GuideComponent.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/layout-001',
    name: '/guide/layout-001',
    component: () => import('@/views/uiGuide/GuideLayout001.vue'),
  },
  {
    path: '/guide/layout-002',
    name: '/guide/layout-002',
    component: () => import('@/views/uiGuide/GuideLayout002.vue'),
  },
  {
    path: '/guide/alert-001',
    name: '/guide/alert-001',
    component: () => import('@/views/uiGuide/GuideAlert001.vue'),
  },
  {
    path: '/guide/alert-002',
    name: '/guide/alert-002',
    component: () => import('@/views/uiGuide/GuideAlert002.vue'),
  },
  {
    path: '/guide/alert-003',
    name: '/guide/alert-003',
    component: () => import('@/views/uiGuide/GuideAlert003.vue'),
  },
  {
    path: '/guide/alert-004',
    name: '/guide/alert-004',
    component: () => import('@/views/uiGuide/GuideAlert004.vue'),
  },
  {
    path: '/guide/loading-001',
    name: '/guide/loading-001',
    component: () => import('@/views/uiGuide/GuideLoading001.vue'),
  },
  {
    path: '/guide/clause-001',
    name: '/guide/clause-001',
    component: () => import('@/views/uiGuide/GuideClause001.vue'),
  },
  {
    path: '/guide/agent-001',
    name: '/guide/agent-001',
    component: () => import('@/views/uiGuide/GuideAgent001.vue'),
  },
  {
    path: '/guide/agent-002',
    name: '/guide/agent-002',
    component: () => import('@/views/uiGuide/GuideAgent002.vue'),
  },
  {
    path: '/guide/agent-003',
    name: '/guide/agent-003',
    component: () => import('@/views/uiGuide/GuideAgent003.vue'),
  },
  {
    path: '/guide/agent-004',
    name: '/guide/agent-004',
    component: () => import('@/views/uiGuide/GuideAgent004.vue'),
  },
  {
    path: '/guide/agent-005',
    name: '/guide/agent-005',
    component: () => import('@/views/uiGuide/GuideAgent005.vue'),
  },

  // error
  {
    path: '/error/Common_P00_p013',
    name: '/error/Common_P00_p013',
    component: () => import('@/views/error/Common_P00_p013.vue'),
  },

  // agent
  {
    path: '/agent/Agent_P01_p001',
    name: '/agent/Agent_P01_p001',
    component: () => import('@/views/agent/Agent_P01_p001.vue'),
  },
  {
    path: '/agent/Agent_P02_p001',
    name: '/agent/Agent_P02_p001',
    component: () => import('@/views/agent/Agent_P02_p001.vue'),
  },
  {
    path: '/agent/Agent_P02_p002',
    name: '/agent/Agent_P02_p002',
    component: () => import('@/views/agent/Agent_P02_p002.vue'),
  },
  {
    path: '/agent/Agent_P02_p003',
    name: '/agent/Agent_P02_p003',
    component: () => import('@/views/agent/Agent_P02_p003.vue'),
  },
  {
    path: '/agent/Agent_P02_p004',
    name: '/agent/Agent_P02_p004',
    component: () => import('@/views/agent/Agent_P02_p004.vue'),
  },
  {
    path: '/agent/Agent_P02_p005',
    name: '/agent/Agent_P02_p005',
    component: () => import('@/views/agent/Agent_P02_p005.vue'),
  },
  {
    path: '/agent/Agent_P02_p006',
    name: '/agent/Agent_P02_p006',
    component: () => import('@/views/agent/Agent_P02_p006.vue'),
  },
  {
    path: '/agent/Agent_P02_p007',
    name: '/agent/Agent_P02_p007',
    component: () => import('@/views/agent/Agent_P02_p007.vue'),
  },
  {
    path: '/agent/Agent_P02_p008',
    name: '/agent/Agent_P02_p008',
    component: () => import('@/views/agent/Agent_P02_p008.vue'),
  },
  {
    path: '/agent/Agent_P02_p009',
    name: '/agent/Agent_P02_p009',
    component: () => import('@/views/agent/Agent_P02_p009.vue'),
  },
  {
    path: '/agent/Agent_P03_p001',
    name: '/agent/Agent_P03_p001',
    component: () => import('@/views/agent/Agent_P03_p001.vue'),
  },
  {
    path: '/agent/Agent_P03_p002',
    name: '/agent/Agent_P03_p002',
    component: () => import('@/views/agent/Agent_P03_p002.vue'),
  },
  {
    path: '/agent/Agent_P03_p003',
    name: '/agent/Agent_P03_p003',
    component: () => import('@/views/agent/Agent_P03_p003.vue'),
  },
  {
    path: '/agent/Agent_P03_p004',
    name: '/agent/Agent_P03_p004',
    component: () => import('@/views/agent/Agent_P03_p004.vue'),
  },
  {
    path: '/agent/Agent_P04_p001',
    name: '/agent/Agent_P04_p001',
    component: () => import('@/views/agent/Agent_P04_p001.vue'),
  },
  {
    path: '/agent/Agent_P04_p002',
    name: '/agent/Agent_P04_p002',
    component: () => import('@/views/agent/Agent_P04_p002.vue'),
  },
  {
    path: '/agent/Agent_P05_p001',
    name: '/agent/Agent_P05_p001',
    component: () => import('@/views/agent/Agent_P05_p001.vue'),
  },
  {
    path: '/agent/Agent_P05_p002',
    name: '/agent/Agent_P05_p002',
    component: () => import('@/views/agent/Agent_P05_p002.vue'),
  },
  {
    path: '/agent/Agent_P06_p001',
    name: '/agent/Agent_P06_p001',
    component: () => import('@/views/agent/Agent_P06_p001.vue'),
  },
  {
    path: '/agent/Agent_P06_p002',
    name: '/agent/Agent_P06_p002',
    component: () => import('@/views/agent/Agent_P06_p002.vue'),
  },
  {
    path: '/agent/Agent_P07_p001',
    name: '/agent/Agent_P07_p001',
    component: () => import('@/views/agent/Agent_P07_p001.vue'),
  },
  {
    path: '/agent/Agent_P07_p002',
    name: '/agent/Agent_P07_p002',
    component: () => import('@/views/agent/Agent_P07_p002.vue'),
  },
  {
    path: '/agent/Agent_P09_p001',
    name: '/agent/Agent_P09_p001',
    component: () => import('@/views/agent/Agent_P09_p001.vue'),
  },
  {
    path: '/agent/Agent_P09_p002',
    name: '/agent/Agent_P09_p002',
    component: () => import('@/views/agent/Agent_P09_p002.vue'),
  },
  {
    path: '/agent/Agent_P09_p003',
    name: '/agent/Agent_P09_p003',
    component: () => import('@/views/agent/Agent_P09_p003.vue'),
  },
  {
    path: '/agent/Agent_P09_p005',
    name: '/agent/Agent_P09_p005',
    component: () => import('@/views/agent/Agent_P09_p005.vue'),
  },
  {
    path: '/agent/Agent_P09_p006',
    name: '/agent/Agent_P09_p006',
    component: () => import('@/views/agent/Agent_P09_p006.vue'),
  },
  {
    path: '/agent/Agent_P10_p001',
    name: '/agent/Agent_P10_p001',
    component: () => import('@/views/agent/Agent_P10_p001.vue'),
  },
  {
    path: '/agent/Agent_P10_p002',
    name: '/agent/Agent_P10_p002',
    component: () => import('@/views/agent/Agent_P10_p002.vue'),
  },
  {
    path: '/agent/Agent_P10_p003',
    name: '/agent/Agent_P10_p003',
    component: () => import('@/views/agent/Agent_P10_p003.vue'),
  },
  {
    path: '/agent/Agent_P10_p004',
    name: '/agent/Agent_P10_p004',
    component: () => import('@/views/agent/Agent_P10_p004.vue'),
  },
];

export default routes;