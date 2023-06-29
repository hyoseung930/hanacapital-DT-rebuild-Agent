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
    path: '/business/LM_P01_l001',
    name: '/business/LM_P01_l001',
    component: () => import('@/views/business/LM_P01_l001.vue'),
  },
  {
    path: '/business/LM_P02_p001',
    name: '/business/LM_P02_p001',
    component: () => import('@/views/business/LM_P02_p001.vue'),
  },
  {
    path: '/business/LM_P03_p001',
    name: '/business/LM_P03_p001',
    component: () => import('@/views/business/LM_P03_p001.vue'),
  },
  {
    path: '/business/LM_P05_p001',
    name: '/business/LM_P05_p001',
    component: () => import('@/views/business/LM_P05_p001.vue'),
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
  // agent
  {
    path: '/agent/Agent_P01_l001',
    name: '/agent/Agent_P01_l001',
    component: () => import('@/views/agent/Agent_P01_l001.vue'),
  },
  {
    path: '/agent/Agent_P01_p001',
    name: '/agent/Agent_P01_p001',
    component: () => import('@/views/agent/Agent_P01_p001.vue'),
  },
  {
    path: '/agent/Agent_P02_l002',
    name: '/agent/Agent_P02_l002',
    component: () => import('@/views/agent/Agent_P02_l002.vue'),
  },
  {
    path: '/agent/Agent_P02_l003',
    name: '/agent/Agent_P02_l003',
    component: () => import('@/views/agent/Agent_P02_l003.vue'),
  },
  {
    path: '/agent/Agent_P02_l004',
    name: '/agent/Agent_P02_l004',
    component: () => import('@/views/agent/Agent_P02_l004.vue'),
  },
  {
    path: '/agent/Agent_P02_l005',
    name: '/agent/Agent_P02_l005',
    component: () => import('@/views/agent/Agent_P02_l005.vue'),
  },
  {
    path: '/agent/Agent_P02_l006',
    name: '/agent/Agent_P02_l006',
    component: () => import('@/views/agent/Agent_P02_l006.vue'),
  },
  {
    path: '/agent/Agent_P02_l007',
    name: '/agent/Agent_P02_l007',
    component: () => import('@/views/agent/Agent_P02_l007.vue'),
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
    path: '/agent/Agent_P00_l002',
    name: '/agent/Agent_P00_l002',
    component: () => import('@/views/agent/Agent_P00_l002.vue'),
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
  {
    path: '/agent/Agent_P03_l001',
    name: '/agent/Agent_P03_l001',
    component: () => import('@/views/agent/Agent_P03_l001.vue'),
  },
  {
    path: '/agent/Agent_P03_l002',
    name: '/agent/Agent_P03_l002',
    component: () => import('@/views/agent/Agent_P03_l002.vue'),
  },
  {
    path: '/agent/Agent_P03_l003',
    name: '/agent/Agent_P03_l003',
    component: () => import('@/views/agent/Agent_P03_l003.vue'),
  },
  {
    path: '/agent/Agent_P03_l004',
    name: '/agent/Agent_P03_l004',
    component: () => import('@/views/agent/Agent_P03_l004.vue'),
  },
  {
    path: '/agent/Agent_P00_l003',
    name: '/agent/Agent_P00_l003',
    component: () => import('@/views/agent/Agent_P00_l003.vue'),
  },
  {
    path: '/agent/Agent_P00_l004',
    name: '/agent/Agent_P00_l004',
    component: () => import('@/views/agent/Agent_P00_l004.vue'),
  },
  {
    path: '/agent/Agent_P00_l005',
    name: '/agent/Agent_P00_l005',
    component: () => import('@/views/agent/Agent_P00_l005.vue'),
  },
  {
    path: '/agent/Agent_P00_l006',
    name: '/agent/Agent_P00_l006',
    component: () => import('@/views/agent/Agent_P00_l006.vue'),
  },
  {
    path: '/agent/Agent_P00_l007',
    name: '/agent/Agent_P00_l007',
    component: () => import('@/views/agent/Agent_P00_l007.vue'),
  },
  {
    path: '/agent/Agent_P00_l008',
    name: '/agent/Agent_P00_l008',
    component: () => import('@/views/agent/Agent_P00_l008.vue'),
  },
  {
    path: '/agent/Agent_P00_l009',
    name: '/agent/Agent_P00_l009',
    component: () => import('@/views/agent/Agent_P00_l009.vue'),
  },
  {
    path: '/agent/Agent_P00_l010',
    name: '/agent/Agent_P00_l010',
    component: () => import('@/views/agent/Agent_P00_l010.vue'),
  },
  {
    path: '/agent/Agent_P00_l011',
    name: '/agent/Agent_P00_l011',
    component: () => import('@/views/agent/Agent_P00_l011.vue'),
  },
  {
    path: '/agent/Agent_P00_l012',
    name: '/agent/Agent_P00_l012',
    component: () => import('@/views/agent/Agent_P00_l012.vue'),
  },
];

export default routes;
