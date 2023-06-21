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
    path: '/guide/search-workplace-001',
    name: '/guide/search-workplace-001',
    component: () => import('@/views/uiGuide/GuideSearchWorkplace001.vue'),
  },
  {
    path: '/guide/search-address-001',
    name: '/guide/search-address-001',
    component: () => import('@/views/uiGuide/GuideSearchAddress001.vue'),
  },
  {
    path: '/guide/loan-calculator-001',
    name: '/guide/loan-calculator-001',
    component: () => import('@/views/uiGuide/GuideLoanCalculator001.vue'),
  },
  {
    path: '/guide/guide-001',
    name: '/guide/guide-001',
    component: () => import('@/views/uiGuide/GuideGuide001.vue'),
  },
  {
    path: '/guide/customer-001',
    name: '/guide/customer-001',
    component: () => import('@/views/uiGuide/GuideCustomer001.vue'),
  },
  {
    path: '/guide/sign-001',
    name: '/guide/sign-001',
    component: () => import('@/views/uiGuide/GuideSign001.vue'),
  },
  {
    path: '/guide/personal-loan-001',
    name: '/guide/personal-loan-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoan001.vue'),
  },
  {
    path: '/guide/personal-loan-002',
    name: '/guide/personal-loan-002',
    component: () => import('@/views/uiGuide/GuidePersonalLoan002.vue'),
  },
  {
    path: '/guide/personal-loan-003',
    name: '/guide/personal-loan-003',
    component: () => import('@/views/uiGuide/GuidePersonalLoan003.vue'),
  },
  {
    path: '/guide/personal-loan-004',
    name: '/guide/personal-loan-004',
    component: () => import('@/views/uiGuide/GuidePersonalLoan004.vue'),
  },
  {
    path: '/guide/personal-loan-005',
    name: '/guide/personal-loan-005',
    component: () => import('@/views/uiGuide/GuidePersonalLoan005.vue'),
  },
  {
    path: '/guide/personal-loan-006',
    name: '/guide/personal-loan-006',
    component: () => import('@/views/uiGuide/GuidePersonalLoan006.vue'),
  },
  {
    path: '/guide/online-branch-001',
    name: '/guide/online-branch-001',
    component: () => import('@/views/uiGuide/GuideOnlineBranch001.vue'),
  },
  {
    path: '/guide/online-branch-002',
    name: '/guide/online-branch-002',
    component: () => import('@/views/uiGuide/GuideOnlineBranch002.vue'),
  },
  {
    path: '/guide/online-branch-003',
    name: '/guide/online-branch-003',
    component: () => import('@/views/uiGuide/GuideOnlineBranch003.vue'),
  },
  {
    path: '/guide/online-branch-004',
    name: '/guide/online-branch-004',
    component: () => import('@/views/uiGuide/GuideOnlineBranch004.vue'),
  },
  {
    path: '/guide/additional-service-001',
    name: '/guide/additional-service-001',
    component: () => import('@/views/uiGuide/GuideAdditionalService001.vue'),
  },
  {
    path: '/guide/inventory-finance-001',
    name: '/guide/inventory-finance-001',
    component: () => import('@/views/uiGuide/GuideInventoryFinance001.vue'),
  },
  {
    path: '/guide/inventory-finance-002',
    name: '/guide/inventory-finance-002',
    component: () => import('@/views/uiGuide/GuideInventoryFinance002.vue'),
  },
  {
    path: '/guide/inventory-finance-003',
    name: '/guide/inventory-finance-003',
    component: () => import('@/views/uiGuide/GuideInventoryFinance003.vue'),
  },
  {
    path: '/guide/lm-blog-001',
    name: '/guide/lm-blog-001',
    component: () => import('@/views/uiGuide/GuideLmBlog001.vue'),
  },
  {
    path: '/guide/lm-blog-002',
    name: '/guide/lm-blog-002',
    component: () => import('@/views/uiGuide/GuideLmBlog002.vue'),
  },
  {
    path: '/guide/lm-blog-personal-001',
    name: '/guide/lm-blog-personal-001',
    component: () => import('@/views/uiGuide/GuideLmBlogPersonal001.vue'),
  },
  {
    path: '/guide/lm-blog-personal-002',
    name: '/guide/lm-blog-personal-002',
    component: () => import('@/views/uiGuide/GuideLmBlogPersonal002.vue'),
  },
  {
    path: '/guide/lm-blog-personal-003',
    name: '/guide/lm-blog-personal-003',
    component: () => import('@/views/uiGuide/GuideLmBlogPersonal003.vue'),
  },
  {
    path: '/guide/auto-001',
    name: '/guide/auto-001',
    component: () => import('@/views/uiGuide/GuideAuto001.vue'),
  },
  {
    path: '/guide/auto-002',
    name: '/guide/auto-002',
    component: () => import('@/views/uiGuide/GuideAuto002.vue'),
  },
  {
    path: '/guide/auto-003',
    name: '/guide/auto-003',
    component: () => import('@/views/uiGuide/GuideAuto003.vue'),
  },
  {
    path: '/guide/auto-004',
    name: '/guide/auto-004',
    component: () => import('@/views/uiGuide/GuideAuto004.vue'),
  },
  {
    path: '/guide/main-001',
    name: '/guide/main-001',
    component: () => import('@/views/uiGuide/GuideMain001.vue'),
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

  // main
  {
    path: '/main/home',
    name: '/main/home',
    component: () => import('@/views/main/MainHome.vue'),
  },

  // identification
  {
    path: '/identification/Common_P00_p003',
    name: '/identification/Common_P00_p003',
    component: () => import('@/views/identification/Common_P00_p003.vue'),
  },

  // redirect
  {
    path: '/redirect/Common_P00_p012',
    name: '/redirect/Common_P00_p012',
    component: () => import('@/views/redirect/Common_P00_p012.vue'),
  },

  // error
  {
    path: '/error/Common_P00_p013',
    name: '/error/Common_P00_p013',
    component: () => import('@/views/error/Common_P00_p013.vue'),
  },

  // customer
  {
    path: '/customer/Customer_P00_p001',
    name: '/customer/Customer_P00_p001',
    component: () => import('@/views/customer/Customer_P00_p001.vue'),
  },
  {
    path: '/customer/Customer_P03_p001',
    name: '/customer/Customer_P03_p001',
    component: () => import('@/views/customer/Customer_P03_p001.vue'),
  },
  {
    path: '/customer/Customer_P03_p002',
    name: '/customer/Customer_P03_p002',
    component: () => import('@/views/customer/Customer_P03_p002.vue'),
  },
  {
    path: '/customer/Customer_P04_p001',
    name: '/customer/Customer_P04_p001',
    component: () => import('@/views/customer/Customer_P04_p001.vue'),
  },
  {
    path: '/customer/Customer_P04_p002',
    name: '/customer/Customer_P04_p002',
    component: () => import('@/views/customer/Customer_P04_p002.vue'),
  },
  {
    path: '/customer/Customer_P11_p001',
    name: '/customer/Customer_P11_p001',
    component: () => import('@/views/customer/Customer_P11_p001.vue'),
  },
  {
    path: '/customer/Customer_P01_p001',
    name: '/customer/Customer_P01_p001',
    component: () => import('@/views/customer/Customer_P01_p001.vue'),
  },
  {
    path: '/customer/Customer_P02_p001',
    name: '/customer/Customer_P02_p001',
    component: () => import('@/views/customer/Customer_P02_p001.vue'),
  },
  {
    path: '/customer/Customer_P02_p002',
    name: '/customer/Customer_P02_p002',
    component: () => import('@/views/customer/Customer_P02_p002.vue'),
  },
  {
    path: '/customer/Customer_P02_p003',
    name: '/customer/Customer_P02_p003',
    component: () => import('@/views/customer/Customer_P02_p003.vue'),
  },
  {
    path: '/customer/Customer_P12_p001',
    name: '/customer/Customer_P12_p001',
    component: () => import('@/views/customer/Customer_P12_p001.vue'),
  },
  {
    path: '/customer/Customer_P05_p001',
    name: '/customer/Customer_P05_p001',
    component: () => import('@/views/customer/Customer_P05_p001.vue'),
  },
  {
    path: '/customer/Customer_P13_p001',
    name: '/customer/Customer_P13_p001',
    component: () => import('@/views/customer/Customer_P13_p001.vue'),
  },
  {
    path: '/customer/Customer_P07_p001',
    name: '/customer/Customer_P07_p001',
    component: () => import('@/views/customer/Customer_P07_p001.vue'),
  },
  {
    path: '/customer/Customer_P17_p001',
    name: '/customer/Customer_P17_p001',
    component: () => import('@/views/customer/Customer_P17_p001.vue'),
  },
  {
    path: '/customer/Customer_P17_p002',
    name: '/customer/Customer_P17_p002',
    component: () => import('@/views/customer/Customer_P17_p002.vue'),
  },
  {
    path: '/customer/Customer_P08_p001',
    name: '/customer/Customer_P08_p001',
    component: () => import('@/views/customer/Customer_P08_p001.vue'),
  },
  {
    path: '/customer/Customer_P14_p001',
    name: '/customer/Customer_P14_p001',
    component: () => import('@/views/customer/Customer_P14_p001.vue'),
  },
  {
    path: '/customer/Customer_P14_p002',
    name: '/customer/Customer_P14_p002',
    component: () => import('@/views/customer/Customer_P14_p002.vue'),
  },
  {
    path: '/customer/Customer_P14_p003',
    name: '/customer/Customer_P14_p003',
    component: () => import('@/views/customer/Customer_P14_p003.vue'),
  },
  {
    path: '/customer/Customer_P14_p004',
    name: '/customer/Customer_P14_p004',
    component: () => import('@/views/customer/Customer_P14_p004.vue'),
  },
  {
    path: '/customer/Customer_P14_p006',
    name: '/customer/Customer_P14_p006',
    component: () => import('@/views/customer/Customer_P14_p006.vue'),
  },
  {
    path: '/customer/Customer_P09_p001',
    name: '/customer/Customer_P09_p001',
    component: () => import('@/views/customer/Customer_P09_p001.vue'),
  },
  {
    path: '/customer/Customer_P09_p002',
    name: '/customer/Customer_P09_p002',
    component: () => import('@/views/customer/Customer_P09_p002.vue'),
  },
  {
    path: '/customer/Customer_P09_p003',
    name: '/customer/Customer_P09_p003',
    component: () => import('@/views/customer/Customer_P09_p003.vue'),
  },
  {
    path: '/customer/Customer_P09_p004',
    name: '/customer/Customer_P09_p004',
    component: () => import('@/views/customer/Customer_P09_p004.vue'),
  },
  {
    path: '/customer/Customer_P09_p005',
    name: '/customer/Customer_P09_p005',
    component: () => import('@/views/customer/Customer_P09_p005.vue'),
  },
  {
    path: '/customer/Customer_P09_p006',
    name: '/customer/Customer_P09_p006',
    component: () => import('@/views/customer/Customer_P09_p006.vue'),
  },
  {
    path: '/customer/Customer_P09_p007',
    name: '/customer/Customer_P09_p007',
    component: () => import('@/views/customer/Customer_P09_p007.vue'),
  },
  {
    path: '/customer/Customer_P09_p008',
    name: '/customer/Customer_P09_p008',
    component: () => import('@/views/customer/Customer_P09_p008.vue'),
  },
  {
    path: '/customer/Customer_P09_p009',
    name: '/customer/Customer_P09_p009',
    component: () => import('@/views/customer/Customer_P09_p009.vue'),
  },
  {
    path: '/customer/Customer_P15_p001',
    name: '/customer/Customer_P15_p001',
    component: () => import('@/views/customer/Customer_P15_p001.vue'),
  },
  {
    path: '/customer/Customer_P15_p002',
    name: '/customer/Customer_P15_p002',
    component: () => import('@/views/customer/Customer_P15_p002.vue'),
  },
  {
    path: '/customer/Customer_P16_p001',
    name: '/customer/Customer_P16_p001',
    component: () => import('@/views/customer/Customer_P16_p001.vue'),
  },
  {
    path: '/customer/Customer_P16_p002',
    name: '/customer/Customer_P16_p002',
    component: () => import('@/views/customer/Customer_P16_p002.vue'),
  },
  {
    path: '/customer/Customer_P16_p003',
    name: '/customer/Customer_P16_p003',
    component: () => import('@/views/customer/Customer_P16_p003.vue'),
  },

  // additional-service
  {
    path: '/additional-service/My_P02_p001',
    name: '/additional-service/My_P02_p001',
    component: () => import('@/views/additionalService/My_P02_p001.vue'),
  },
  {
    path: '/additional-service/My_P02_p002',
    name: '/additional-service/My_P02_p002',
    component: () => import('@/views/additionalService/My_P02_p002.vue'),
  },
  {
    path: '/additional-service/My_P05_p011',
    name: '/additional-service/My_P05_p011',
    component: () => import('@/views/additionalService/My_P05_p011.vue'),
  },
  {
    path: '/additional-service/My_P05_p012',
    name: '/additional-service/My_P05_p012',
    component: () => import('@/views/additionalService/My_P05_p012.vue'),
  },
  {
    path: '/additional-service/My_P05_p013',
    name: '/additional-service/My_P05_p013',
    component: () => import('@/views/additionalService/My_P05_p013.vue'),
  },
  {
    path: '/additional-service/My_P06_p011',
    name: '/additional-service/My_P06_p011',
    component: () => import('@/views/additionalService/My_P06_p011.vue'),
  },
  {
    path: '/additional-service/My_P06_p012',
    name: '/additional-service/My_P06_p012',
    component: () => import('@/views/additionalService/My_P06_p012.vue'),
  },
  {
    path: '/additional-service/My_P06_p013',
    name: '/additional-service/My_P06_p013',
    component: () => import('@/views/additionalService/My_P06_p013.vue'),
  },
  {
    path: '/additional-service/Etc_P01_p001',
    name: '/additional-service/Etc_P01_p001',
    component: () => import('@/views/additionalService/Etc_P01_p001.vue'),
  },
  {
    path: '/additional-service/Etc_P01_p002',
    name: '/additional-service/Etc_P01_p002',
    component: () => import('@/views/additionalService/Etc_P01_p002.vue'),
  },

  // sign
  {
    path: '/sign/Member_P01_p001',
    name: '/sign/Member_P01_p001',
    component: () => import('@/views/sign/Member_P01_p001.vue'),
  },
  {
    path: '/sign/Member_P01_p002',
    name: '/sign/Member_P01_p002',
    component: () => import('@/views/sign/Member_P01_p002.vue'),
  },
  {
    path: '/sign/Member_P03_p001',
    name: '/sign/Member_P03_p001',
    component: () => import('@/views/sign/Member_P03_p001.vue'),
  },
  {
    path: '/sign/Member_P03_p002',
    name: '/sign/Member_P03_p002',
    component: () => import('@/views/sign/Member_P03_p002.vue'),
  },
  {
    path: '/sign/Member_P03_p003',
    name: '/sign/Member_P03_p003',
    component: () => import('@/views/sign/Member_P03_p003.vue'),
  },
  {
    path: '/sign/Member_P04_p001',
    name: '/sign/Member_P04_p001',
    component: () => import('@/views/sign/Member_P04_p001.vue'),
  },
  {
    path: '/sign/Member_P04_p002',
    name: '/sign/Member_P04_p002',
    component: () => import('@/views/sign/Member_P04_p002.vue'),
  },
  {
    path: '/sign/Member_P04_p003',
    name: '/sign/Member_P04_p003',
    component: () => import('@/views/sign/Member_P04_p003.vue'),
  },
  {
    path: '/sign/Member_P05_p001',
    name: '/sign/Member_P05_p001',
    component: () => import('@/views/sign/Member_P05_p001.vue'),
  },
  {
    path: '/sign/Member_P05_p002',
    name: '/sign/Member_P05_p002',
    component: () => import('@/views/sign/Member_P05_p002.vue'),
  },
  {
    path: '/sign/Member_P05_p005',
    name: '/sign/Member_P05_p005',
    component: () => import('@/views/sign/Member_P05_p005.vue'),
  },
  {
    path: '/sign/Member_P05_p006',
    name: '/sign/Member_P05_p006',
    component: () => import('@/views/sign/Member_P05_p006.vue'),
  },

  // inventory-finance
  {
    path: '/inventory-finance/IF_P02_p001',
    name: '/inventory-finance/IF_P02_p001',
    component: () => import('@/views/inventoryFinance/IF_P02_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p002',
    name: '/inventory-finance/IF_P02_p002',
    component: () => import('@/views/inventoryFinance/IF_P02_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p004',
    name: '/inventory-finance/IF_P02_p004',
    component: () => import('@/views/inventoryFinance/IF_P02_p004.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p005',
    name: '/inventory-finance/IF_P02_p005',
    component: () => import('@/views/inventoryFinance/IF_P02_p005.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p001',
    name: '/inventory-finance/IF_P03_p001',
    component: () => import('@/views/inventoryFinance/IF_P03_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p002',
    name: '/inventory-finance/IF_P03_p002',
    component: () => import('@/views/inventoryFinance/IF_P03_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P02_p007',
    name: '/inventory-finance/IF_P02_p007',
    component: () => import('@/views/inventoryFinance/IF_P02_p007.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p003',
    name: '/inventory-finance/IF_P03_p003',
    component: () => import('@/views/inventoryFinance/IF_P03_p003.vue'),
  },
  {
    path: '/inventory-finance/IF_P03_p008',
    name: '/inventory-finance/IF_P03_p008',
    component: () => import('@/views/inventoryFinance/IF_P03_p008.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p001',
    name: '/inventory-finance/IF_P04_p001',
    component: () => import('@/views/inventoryFinance/IF_P04_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p002',
    name: '/inventory-finance/IF_P04_p002',
    component: () => import('@/views/inventoryFinance/IF_P04_p002.vue'),
  },
  {
    path: '/inventory-finance/IF_P04_p003',
    name: '/inventory-finance/IF_P04_p003',
    component: () => import('@/views/inventoryFinance/IF_P04_p003.vue'),
  },
  {
    path: '/inventory-finance/IF_P05_p001',
    name: '/inventory-finance/IF_P05_p001',
    component: () => import('@/views/inventoryFinance/IF_P05_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P06_p001',
    name: '/inventory-finance/IF_P06_p001',
    component: () => import('@/views/inventoryFinance/IF_P06_p001.vue'),
  },
  {
    path: '/inventory-finance/IF_P08_p001',
    name: '/inventory-finance/IF_P08_p001',
    component: () => import('@/views/inventoryFinance/IF_P08_p001.vue'),
  },

  // lm-blog
  {
    path: '/lm-blog/LM_P01_p001',
    name: '/lm-blog/LM_P01_p001',
    component: () => import('@/views/lmBlog/LM_P01_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P01_p002',
    name: '/lm-blog/LM_P01_p002',
    component: () => import('@/views/lmBlog/LM_P01_p002.vue'),
  },
  {
    path: '/lm-blog/LM_P02_p001',
    name: '/lm-blog/LM_P02_p001',
    component: () => import('@/views/lmBlog/LM_P02_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P03_p001',
    name: '/lm-blog/LM_P03_p001',
    component: () => import('@/views/lmBlog/LM_P03_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P04_p001',
    name: '/lm-blog/LM_P04_p001',
    component: () => import('@/views/lmBlog/LM_P04_p001.vue'),
  },
  {
    path: '/lm-blog/LM_P05_p001',
    name: '/lm-blog/LM_P05_p001',
    component: () => import('@/views/lmBlog/LM_P05_p001.vue'),
  },

  // lm-blog-personal
  {
    path: '/lm-blog-personal/LM_P07_p001',
    name: '/lm-blog-personal/LM_P07_p001',
    component: () => import('@/views/lmBlogPersonal/LM_P07_p001.vue'),
  },
  {
    path: '/lm-blog-personal/LM_P07_p002',
    name: '/lm-blog-personal/LM_P07_p002',
    component: () => import('@/views/lmBlogPersonal/LM_P07_p002.vue'),
  },

  // online-branch
  {
    path: '/online-branch/MI_P00_p001',
    name: '/online-branch/MI_P00_p001',
    component: () => import('@/views/onlineBranch/MI_P00_p001.vue'),
  },
  {
    path: '/online-branch/MI_P00_p002',
    name: '/online-branch/MI_P00_p002',
    component: () => import('@/views/onlineBranch/MI_P00_p002.vue'),
  },
  {
    path: '/online-branch/MI_P00_p003',
    name: '/online-branch/MI_P00_p003',
    component: () => import('@/views/onlineBranch/MI_P00_p003.vue'),
  },
  {
    path: '/online-branch/MI_P00_p004',
    name: '/online-branch/MI_P00_p004',
    component: () => import('@/views/onlineBranch/MI_P00_p004.vue'),
  },
  {
    path: '/online-branch/MI_P00_p005',
    name: '/online-branch/MI_P00_p005',
    component: () => import('@/views/onlineBranch/MI_P00_p005.vue'),
  },
  {
    path: '/online-branch/MI_P00_p006',
    name: '/online-branch/MI_P00_p006',
    component: () => import('@/views/onlineBranch/MI_P00_p006.vue'),
  },
  {
    path: '/online-branch/MI_P00_p007',
    name: '/online-branch/MI_P00_p007',
    component: () => import('@/views/onlineBranch/MI_P00_p007.vue'),
  },
  {
    path: '/online-branch/MI_P00_p008',
    name: '/online-branch/MI_P00_p008',
    component: () => import('@/views/onlineBranch/MI_P00_p008.vue'),
  },
  {
    path: '/online-branch/MI_P00_p009',
    name: '/online-branch/MI_P00_p009',
    component: () => import('@/views/onlineBranch/MI_P00_p009.vue'),
  },
  {
    path: '/online-branch/MI_P00_p010',
    name: '/online-branch/MI_P00_p010',
    component: () => import('@/views/onlineBranch/MI_P00_p010.vue'),
  },
  {
    path: '/online-branch/MI_P00_p011',
    name: '/online-branch/MI_P00_p011',
    component: () => import('@/views/onlineBranch/MI_P00_p011.vue'),
  },
  {
    path: '/online-branch/MI_P00_p012',
    name: '/online-branch/MI_P00_p012',
    component: () => import('@/views/onlineBranch/MI_P00_p012.vue'),
  },
  {
    path: '/online-branch/My_p04_p001',
    name: '/online-branch/My_p04_p001',
    component: () => import('@/views/onlineBranch/My_p04_p001.vue'),
  },
  {
    path: '/online-branch/My_p04_p002',
    name: '/online-branch/My_p04_p002',
    component: () => import('@/views/onlineBranch/My_p04_p002.vue'),
  },
  {
    path: '/online-branch/My_p04_p003',
    name: '/online-branch/My_p04_p003',
    component: () => import('@/views/onlineBranch/My_p04_p003.vue'),
  },
  {
    path: '/online-branch/MI_P00_p013',
    name: '/online-branch/MI_P00_p013',
    component: () => import('@/views/onlineBranch/MI_P00_p013.vue'),
  },
  {
    path: '/online-branch/MI_P00_p014',
    name: '/online-branch/MI_P00_p014',
    component: () => import('@/views/onlineBranch/MI_P00_p014.vue'),
  },
  {
    path: '/online-branch/MI_P00_p015',
    name: '/online-branch/MI_P00_p015',
    component: () => import('@/views/onlineBranch/MI_P00_p015.vue'),
  },
  {
    path: '/online-branch/MI_P00_p018',
    name: '/online-branch/MI_P00_p018',
    component: () => import('@/views/onlineBranch/MI_P00_p018.vue'),
  },
  {
    path: '/online-branch/MI_P00_p016',
    name: '/online-branch/MI_P00_p016',
    component: () => import('@/views/onlineBranch/MI_P00_p016.vue'),
  },
  {
    path: '/online-branch/My_p05_p001',
    name: '/online-branch/My_p05_p001',
    component: () => import('@/views/onlineBranch/My_p05_p001.vue'),
  },
  {
    path: '/online-branch/My_p05_p002',
    name: '/online-branch/My_p05_p002',
    component: () => import('@/views/onlineBranch/My_p05_p002.vue'),
  },
  {
    path: '/online-branch/My_p05_p003',
    name: '/online-branch/My_p05_p003',
    component: () => import('@/views/onlineBranch/My_p05_p003.vue'),
  },
  {
    path: '/online-branch/My_p05_p004',
    name: '/online-branch/My_p05_p004',
    component: () => import('@/views/onlineBranch/My_p05_p004.vue'),
  },
  {
    path: '/online-branch/My_p05_p005',
    name: '/online-branch/My_p05_p005',
    component: () => import('@/views/onlineBranch/My_p05_p005.vue'),
  },
  {
    path: '/online-branch/My_p06_p001',
    name: '/online-branch/My_p06_p001',
    component: () => import('@/views/onlineBranch/My_p06_p001.vue'),
  },
  {
    path: '/online-branch/My_p06_p002',
    name: '/online-branch/My_p06_p002',
    component: () => import('@/views/onlineBranch/My_p06_p002.vue'),
  },
  {
    path: '/online-branch/My_p06_p004',
    name: '/online-branch/My_p06_p004',
    component: () => import('@/views/onlineBranch/My_p06_p004.vue'),
  },
  {
    path: '/online-branch/My_P08_p001',
    name: '/online-branch/My_P08_p001',
    component: () => import('@/views/onlineBranch/My_P08_p001.vue'),
  },
  {
    path: '/online-branch/My_P08_p003',
    name: '/online-branch/My_P08_p003',
    component: () => import('@/views/onlineBranch/My_P08_p003.vue'),
  },
  {
    path: '/online-branch/My_P08_p005',
    name: '/online-branch/My_P08_p005',
    component: () => import('@/views/onlineBranch/My_P08_p005.vue'),
  },
  {
    path: '/online-branch/My_P08_p006',
    name: '/online-branch/My_P08_p006',
    component: () => import('@/views/onlineBranch/My_P08_p006.vue'),
  },
  {
    path: '/online-branch/My_P08_p007',
    name: '/online-branch/My_P08_p007',
    component: () => import('@/views/onlineBranch/My_P08_p007.vue'),
  },
  {
    path: '/online-branch/My_P08_p008',
    name: '/online-branch/My_P08_p008',
    component: () => import('@/views/onlineBranch/My_P08_p008.vue'),
  },
  {
    path: '/online-branch/My_P08_p009',
    name: '/online-branch/My_P08_p009',
    component: () => import('@/views/onlineBranch/My_P08_p009.vue'),
  },
  {
    path: '/online-branch/My_P08_p010',
    name: '/online-branch/My_P08_p010',
    component: () => import('@/views/onlineBranch/My_P08_p010.vue'),
  },
  {
    path: '/online-branch/My_P08_p011',
    name: '/online-branch/My_P08_p011',
    component: () => import('@/views/onlineBranch/My_P08_p011.vue'),
  },
  {
    path: '/online-branch/My_P08_p012',
    name: '/online-branch/My_P08_p012',
    component: () => import('@/views/onlineBranch/My_P08_p012.vue'),
  },
  {
    path: '/online-branch/My_P08_p013',
    name: '/online-branch/My_P08_p013',
    component: () => import('@/views/onlineBranch/My_P08_p013.vue'),
  },
  {
    path: '/online-branch/My_P08_p014',
    name: '/online-branch/My_P08_p014',
    component: () => import('@/views/onlineBranch/My_P08_p014.vue'),
  },
  {
    path: '/online-branch/My_P08_p015',
    name: '/online-branch/My_P08_p015',
    component: () => import('@/views/onlineBranch/My_P08_p015.vue'),
  },
  {
    path: '/online-branch/My_P08_p016',
    name: '/online-branch/My_P08_p016',
    component: () => import('@/views/onlineBranch/My_P08_p016.vue'),
  },
  {
    path: '/online-branch/My_P08_p017',
    name: '/online-branch/My_P08_p017',
    component: () => import('@/views/onlineBranch/My_P08_p017.vue'),
  },
  {
    path: '/online-branch/My_P08_p018',
    name: '/online-branch/My_P08_p018',
    component: () => import('@/views/onlineBranch/My_P08_p018.vue'),
  },
  {
    path: '/online-branch/My_P08_p019',
    name: '/online-branch/My_P08_p019',
    component: () => import('@/views/onlineBranch/My_P08_p019.vue'),
  },
  {
    path: '/online-branch/My_P08_p020',
    name: '/online-branch/My_P08_p020',
    component: () => import('@/views/onlineBranch/My_P08_p020.vue'),
  },
  {
    path: '/online-branch/My_P08_p021',
    name: '/online-branch/My_P08_p021',
    component: () => import('@/views/onlineBranch/My_P08_p021.vue'),
  },
  {
    path: '/online-branch/My_P08_p022',
    name: '/online-branch/My_P08_p022',
    component: () => import('@/views/onlineBranch/My_P08_p022.vue'),
  },
  {
    path: '/online-branch/My_P08_p023',
    name: '/online-branch/My_P08_p023',
    component: () => import('@/views/onlineBranch/My_P08_p023.vue'),
  },
  {
    path: '/online-branch/My_P08_p024',
    name: '/online-branch/My_P08_p024',
    component: () => import('@/views/onlineBranch/My_P08_p024.vue'),
  },
  {
    path: '/online-branch/My_P08_p025',
    name: '/online-branch/My_P08_p025',
    component: () => import('@/views/onlineBranch/My_P08_p025.vue'),
  },
  {
    path: '/online-branch/My_P08_p026',
    name: '/online-branch/My_P08_p026',
    component: () => import('@/views/onlineBranch/My_P08_p026.vue'),
  },
  {
    path: '/online-branch/My_P08_p027',
    name: '/online-branch/My_P08_p027',
    component: () => import('@/views/onlineBranch/My_P08_p027.vue'),
  },
  {
    path: '/online-branch/My_P08_p028',
    name: '/online-branch/My_P08_p028',
    component: () => import('@/views/onlineBranch/My_P08_p028.vue'),
  },
  {
    path: '/online-branch/My_P08_p029',
    name: '/online-branch/My_P08_p029',
    component: () => import('@/views/onlineBranch/My_P08_p029.vue'),
  },
  {
    path: '/online-branch/My_P08_p030',
    name: '/online-branch/My_P08_p030',
    component: () => import('@/views/onlineBranch/My_P08_p030.vue'),
  },
  {
    path: '/online-branch/My_P08_p031',
    name: '/online-branch/My_P08_p031',
    component: () => import('@/views/onlineBranch/My_P08_p031.vue'),
  },
  {
    path: '/online-branch/MI_P02_p005',
    name: '/online-branch/MI_P02_p005',
    component: () => import('@/views/onlineBranch/MI_P02_p005.vue'),
  },
  {
    path: '/online-branch/MI_P01_p001',
    name: '/online-branch/MI_P01_p001',
    component: () => import('@/views/onlineBranch/MI_P01_p001.vue'),
  },
  {
    path: '/online-branch/MI_P01_p002',
    name: '/online-branch/MI_P01_p002',
    component: () => import('@/views/onlineBranch/MI_P01_p002.vue'),
  },
  {
    path: '/online-branch/MI_P01_p003',
    name: '/online-branch/MI_P01_p003',
    component: () => import('@/views/onlineBranch/MI_P01_p003.vue'),
  },
  {
    path: '/online-branch/MI_P01_p004',
    name: '/online-branch/MI_P01_p004',
    component: () => import('@/views/onlineBranch/MI_P01_p004.vue'),
  },
  {
    path: '/online-branch/MI_P01_p005',
    name: '/online-branch/MI_P01_p005',
    component: () => import('@/views/onlineBranch/MI_P01_p005.vue'),
  },
  {
    path: '/online-branch/MI_P01_p006',
    name: '/online-branch/MI_P01_p006',
    component: () => import('@/views/onlineBranch/MI_P01_p006.vue'),
  },
  {
    path: '/online-branch/MI_P01_p007',
    name: '/online-branch/MI_P01_p007',
    component: () => import('@/views/onlineBranch/MI_P01_p007.vue'),
  },
  {
    path: '/online-branch/MI_P01_p008',
    name: '/online-branch/MI_P01_p008',
    component: () => import('@/views/onlineBranch/MI_P01_p008.vue'),
  },
  {
    path: '/online-branch/MI_P01_p009',
    name: '/online-branch/MI_P01_p009',
    component: () => import('@/views/onlineBranch/MI_P01_p009.vue'),
  },
  {
    path: '/online-branch/MI_P01_p010',
    name: '/online-branch/MI_P01_p010',
    component: () => import('@/views/onlineBranch/MI_P01_p010.vue'),
  },
  {
    path: '/online-branch/MI_P01_p011',
    name: '/online-branch/MI_P01_p011',
    component: () => import('@/views/onlineBranch/MI_P01_p011.vue'),
  },
  {
    path: '/online-branch/MI_P01_p012',
    name: '/online-branch/MI_P01_p012',
    component: () => import('@/views/onlineBranch/MI_P01_p012.vue'),
  },
  {
    path: '/online-branch/MI_P06_p001',
    name: '/online-branch/MI_P06_p001',
    component: () => import('@/views/onlineBranch/MI_P06_p001.vue'),
  },
  {
    path: '/online-branch/MI_P07_p001',
    name: '/online-branch/MI_P07_p001',
    component: () => import('@/views/onlineBranch/MI_P07_p001.vue'),
  },

  // personal-loan
  {
    path: '/personal-loan/PF_P01_p002',
    name: '/personal-loan/PF_P01_p002',
    component: () => import('@/views/personalLoan/PF_P01_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p003',
    name: '/personal-loan/PF_P01_p003',
    component: () => import('@/views/personalLoan/PF_P01_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p004',
    name: '/personal-loan/PF_P01_p004',
    component: () => import('@/views/personalLoan/PF_P01_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p007',
    name: '/personal-loan/PF_P01_p007',
    component: () => import('@/views/personalLoan/PF_P01_p007.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p008',
    name: '/personal-loan/PF_P01_p008',
    component: () => import('@/views/personalLoan/PF_P01_p008.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p005',
    name: '/personal-loan/PF_P01_p005',
    component: () => import('@/views/personalLoan/PF_P01_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_001',
    name: '/personal-loan/PF_P01_p006_001',
    component: () => import('@/views/personalLoan/PF_P01_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_002',
    name: '/personal-loan/PF_P01_p006_002',
    component: () => import('@/views/personalLoan/PF_P01_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p006_003',
    name: '/personal-loan/PF_P01_p006_003',
    component: () => import('@/views/personalLoan/PF_P01_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_001',
    name: '/personal-loan/PF_P01_p009_001',
    component: () => import('@/views/personalLoan/PF_P01_p009_001.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_002',
    name: '/personal-loan/PF_P01_p009_002',
    component: () => import('@/views/personalLoan/PF_P01_p009_002.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p009_003',
    name: '/personal-loan/PF_P01_p009_003',
    component: () => import('@/views/personalLoan/PF_P01_p009_003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p010',
    name: '/personal-loan/PF_P01_p010',
    component: () => import('@/views/personalLoan/PF_P01_p010.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p002',
    name: '/personal-loan/PF_P02_p002',
    component: () => import('@/views/personalLoan/PF_P02_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p003',
    name: '/personal-loan/PF_P02_p003',
    component: () => import('@/views/personalLoan/PF_P02_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p004',
    name: '/personal-loan/PF_P02_p004',
    component: () => import('@/views/personalLoan/PF_P02_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p005',
    name: '/personal-loan/PF_P02_p005',
    component: () => import('@/views/personalLoan/PF_P02_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_001',
    name: '/personal-loan/PF_P02_p006_001',
    component: () => import('@/views/personalLoan/PF_P02_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_002',
    name: '/personal-loan/PF_P02_p006_002',
    component: () => import('@/views/personalLoan/PF_P02_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p006_003',
    name: '/personal-loan/PF_P02_p006_003',
    component: () => import('@/views/personalLoan/PF_P02_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p002',
    name: '/personal-loan/PF_P04_p002',
    component: () => import('@/views/personalLoan/PF_P04_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p003',
    name: '/personal-loan/PF_P04_p003',
    component: () => import('@/views/personalLoan/PF_P04_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p004',
    name: '/personal-loan/PF_P04_p004',
    component: () => import('@/views/personalLoan/PF_P04_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p005',
    name: '/personal-loan/PF_P04_p005',
    component: () => import('@/views/personalLoan/PF_P04_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p006',
    name: '/personal-loan/PF_P04_p006',
    component: () => import('@/views/personalLoan/PF_P04_p006.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p002',
    name: '/personal-loan/PF_P05_p002',
    component: () => import('@/views/personalLoan/PF_P05_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p003',
    name: '/personal-loan/PF_P05_p003',
    component: () => import('@/views/personalLoan/PF_P05_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p004',
    name: '/personal-loan/PF_P05_p004',
    component: () => import('@/views/personalLoan/PF_P05_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p005',
    name: '/personal-loan/PF_P05_p005',
    component: () => import('@/views/personalLoan/PF_P05_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_001',
    name: '/personal-loan/PF_P05_p006_001',
    component: () => import('@/views/personalLoan/PF_P05_p006_001.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_002',
    name: '/personal-loan/PF_P05_p006_002',
    component: () => import('@/views/personalLoan/PF_P05_p006_002.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p006_003',
    name: '/personal-loan/PF_P05_p006_003',
    component: () => import('@/views/personalLoan/PF_P05_p006_003.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p001',
    name: '/personal-loan/PF_P07_p001',
    component: () => import('@/views/personalLoan/PF_P07_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p002',
    name: '/personal-loan/PF_P07_p002',
    component: () => import('@/views/personalLoan/PF_P07_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p003',
    name: '/personal-loan/PF_P07_p003',
    component: () => import('@/views/personalLoan/PF_P07_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p004',
    name: '/personal-loan/PF_P07_p004',
    component: () => import('@/views/personalLoan/PF_P07_p004.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p005',
    name: '/personal-loan/PF_P07_p005',
    component: () => import('@/views/personalLoan/PF_P07_p005.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p006',
    name: '/personal-loan/PF_P07_p006',
    component: () => import('@/views/personalLoan/PF_P07_p006.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p007',
    name: '/personal-loan/PF_P07_p007',
    component: () => import('@/views/personalLoan/PF_P07_p007.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p008',
    name: '/personal-loan/PF_P07_p008',
    component: () => import('@/views/personalLoan/PF_P07_p008.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p009',
    name: '/personal-loan/PF_P07_p009',
    component: () => import('@/views/personalLoan/PF_P07_p009.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p010',
    name: '/personal-loan/PF_P07_p010',
    component: () => import('@/views/personalLoan/PF_P07_p010.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p011',
    name: '/personal-loan/PF_P07_p011',
    component: () => import('@/views/personalLoan/PF_P07_p011.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p012',
    name: '/personal-loan/PF_P07_p012',
    component: () => import('@/views/personalLoan/PF_P07_p012.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p013',
    name: '/personal-loan/PF_P07_p013',
    component: () => import('@/views/personalLoan/PF_P07_p013.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p002',
    name: '/personal-loan/PF_P09_p002',
    component: () => import('@/views/personalLoan/PF_P09_p002.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p003',
    name: '/personal-loan/PF_P09_p003',
    component: () => import('@/views/personalLoan/PF_P09_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p004',
    name: '/personal-loan/PF_P09_p004',
    component: () => import('@/views/personalLoan/PF_P09_p004.vue'),
  },
  {
    path: '/personal-loan/Main_P01_p003',
    name: '/personal-loan/Main_P01_p003',
    component: () => import('@/views/personalLoan/Main_P01_p003.vue'),
  },
  {
    path: '/personal-loan/PF_P01_p001',
    name: '/personal-loan/PF_P01_p001',
    component: () => import('@/views/personalLoan/PF_P01_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P02_p001',
    name: '/personal-loan/PF_P02_p001',
    component: () => import('@/views/personalLoan/PF_P02_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P03_p001',
    name: '/personal-loan/PF_P03_p001',
    component: () => import('@/views/personalLoan/PF_P03_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P04_p001',
    name: '/personal-loan/PF_P04_p001',
    component: () => import('@/views/personalLoan/PF_P04_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P05_p001',
    name: '/personal-loan/PF_P05_p001',
    component: () => import('@/views/personalLoan/PF_P05_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P07_p000',
    name: '/personal-loan/PF_P07_p000',
    component: () => import('@/views/personalLoan/PF_P07_p000.vue'),
  },
  {
    path: '/personal-loan/PF_P09_p001',
    name: '/personal-loan/PF_P09_p001',
    component: () => import('@/views/personalLoan/PF_P09_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P10_p001',
    name: '/personal-loan/PF_P10_p001',
    component: () => import('@/views/personalLoan/PF_P10_p001.vue'),
  },
  {
    path: '/personal-loan/PF_P06_p001',
    name: '/personal-loan/PF_P06_p001',
    component: () => import('@/views/personalLoan/PF_P06_p001.vue'),
  },

  // auto
  {
    path: '/auto/AF_P01_p002',
    name: '/auto/AF_P01_p002',
    component: () => import('@/views/auto/AF_P01_p002.vue'),
  },
  {
    path: '/auto/AF_P01_p004',
    name: '/auto/AF_P01_p004',
    component: () => import('@/views/auto/AF_P01_p004.vue'),
  },
  {
    path: '/auto/AF_P02_p002',
    name: '/auto/AF_P02_p002',
    component: () => import('@/views/auto/AF_P02_p002.vue'),
  },
  {
    path: '/auto/AF_P02_p004',
    name: '/auto/AF_P02_p004',
    component: () => import('@/views/auto/AF_P02_p004.vue'),
  },
  {
    path: '/auto/AF_P06_p002',
    name: '/auto/AF_P06_p002',
    component: () => import('@/views/auto/AF_P06_p002.vue'),
  },
  {
    path: '/auto/AF_P06_p003',
    name: '/auto/AF_P06_p003',
    component: () => import('@/views/auto/AF_P06_p003.vue'),
  },
  {
    path: '/auto/AF_P06_p004_001',
    name: '/auto/AF_P06_p004_001',
    component: () => import('@/views/auto/AF_P06_p004_001.vue'),
  },
  {
    path: '/auto/AF_P06_p004_002',
    name: '/auto/AF_P06_p004_002',
    component: () => import('@/views/auto/AF_P06_p004_002.vue'),
  },
  {
    path: '/auto/AF_P06_p004_003',
    name: '/auto/AF_P06_p004_003',
    component: () => import('@/views/auto/AF_P06_p004_003.vue'),
  },
  {
    path: '/auto/AF_P06_p004_004',
    name: '/auto/AF_P06_p004_004',
    component: () => import('@/views/auto/AF_P06_p004_004.vue'),
  },
  {
    path: '/auto/AF_P06_p005',
    name: '/auto/AF_P06_p005',
    component: () => import('@/views/auto/AF_P06_p005.vue'),
  },
  {
    path: '/auto/AF_P06_p006',
    name: '/auto/AF_P06_p006',
    component: () => import('@/views/auto/AF_P06_p006.vue'),
  },
  {
    path: '/auto/AF_P06_p007',
    name: '/auto/AF_P06_p007',
    component: () => import('@/views/auto/AF_P06_p007.vue'),
  },
  {
    path: '/auto/AF_P07_p002',
    name: '/auto/AF_P07_p002',
    component: () => import('@/views/auto/AF_P07_p002.vue'),
  },
  {
    path: '/auto/AF_P07_p003',
    name: '/auto/AF_P07_p003',
    component: () => import('@/views/auto/AF_P07_p003.vue'),
  },
  {
    path: '/auto/AF_P07_p004',
    name: '/auto/AF_P07_p004',
    component: () => import('@/views/auto/AF_P07_p004.vue'),
  },
  {
    path: '/auto/AF_P07_p005',
    name: '/auto/AF_P07_p005',
    component: () => import('@/views/auto/AF_P07_p005.vue'),
  },
  {
    path: '/auto/AF_P07_p013',
    name: '/auto/AF_P07_p013',
    component: () => import('@/views/auto/AF_P07_p013.vue'),
  },
  {
    path: '/auto/AF_P07_p006',
    name: '/auto/AF_P07_p006',
    component: () => import('@/views/auto/AF_P07_p006.vue'),
  },
  {
    path: '/auto/AF_P07_p007',
    name: '/auto/AF_P07_p007',
    component: () => import('@/views/auto/AF_P07_p007.vue'),
  },
  {
    path: '/auto/AF_P07_p008',
    name: '/auto/AF_P07_p008',
    component: () => import('@/views/auto/AF_P07_p008.vue'),
  },
  {
    path: '/auto/AF_P07_p009',
    name: '/auto/AF_P07_p009',
    component: () => import('@/views/auto/AF_P07_p009.vue'),
  },
  {
    path: '/auto/AF_P07_p010',
    name: '/auto/AF_P07_p010',
    component: () => import('@/views/auto/AF_P07_p010.vue'),
  },
  {
    path: '/auto/AF_P07_p011',
    name: '/auto/AF_P07_p011',
    component: () => import('@/views/auto/AF_P07_p011.vue'),
  },
  {
    path: '/auto/AF_P07_p012',
    name: '/auto/AF_P07_p012',
    component: () => import('@/views/auto/AF_P07_p012.vue'),
  },
  {
    path: '/auto/Main_P01_p002',
    name: '/auto/Main_P01_p002',
    component: () => import('@/views/auto/Main_P01_p002.vue'),
  },
  {
    path: '/auto/AF_P01_p001',
    name: '/auto/AF_P01_p001',
    component: () => import('@/views/auto/AF_P01_p001.vue'),
  },
  {
    path: '/auto/AF_P02_p001',
    name: '/auto/AF_P02_p001',
    component: () => import('@/views/auto/AF_P02_p001.vue'),
  },
  {
    path: '/auto/AF_P03_p001',
    name: '/auto/AF_P03_p001',
    component: () => import('@/views/auto/AF_P03_p001.vue'),
  },
  {
    path: '/auto/AF_P04_p001',
    name: '/auto/AF_P04_p001',
    component: () => import('@/views/auto/AF_P04_p001.vue'),
  },
  {
    path: '/auto/AF_P05_p001',
    name: '/auto/AF_P05_p001',
    component: () => import('@/views/auto/AF_P05_p001.vue'),
  },
  {
    path: '/auto/AF_P06_p001',
    name: '/auto/AF_P06_p001',
    component: () => import('@/views/auto/AF_P06_p001.vue'),
  },
  {
    path: '/auto/AF_P07_p001',
    name: '/auto/AF_P07_p001',
    component: () => import('@/views/auto/AF_P07_p001.vue'),
  },

  // membership
  {
    path: '/membership/MI_P03_p001',
    name: '/membership/MI_P03_p001',
    component: () => import('@/views/membership/MI_P03_p001.vue'),
  },
  {
    path: '/membership/MI_P03_p002',
    name: '/membership/MI_P03_p002',
    component: () => import('@/views/membership/MI_P03_p002.vue'),
  },
  {
    path: '/membership/MI_P03_p003',
    name: '/membership/MI_P03_p003',
    component: () => import('@/views/membership/MI_P03_p003.vue'),
  },
  {
    path: '/membership/MI_P03_p007',
    name: '/membership/MI_P03_p007',
    component: () => import('@/views/membership/MI_P03_p007.vue'),
  },
  {
    path: '/membership/MI_P03_p004',
    name: '/membership/MI_P03_p004',
    component: () => import('@/views/membership/MI_P03_p004.vue'),
  },
  {
    path: '/membership/MI_P03_p005',
    name: '/membership/MI_P03_p005',
    component: () => import('@/views/membership/MI_P03_p005.vue'),
  },
  {
    path: '/membership/MI_P03_p006',
    name: '/membership/MI_P03_p006',
    component: () => import('@/views/membership/MI_P03_p006.vue'),
  },

  // hana-money
  {
    path: '/hana-money/MI_P02_p001',
    name: '/hana-money/MI_P02_p001',
    component: () => import('@/views/hanaMoney/MI_P02_p001.vue'),
  },
  {
    path: '/hana-money/MI_P02_p002',
    name: '/hana-money/MI_P02_p002',
    component: () => import('@/views/hanaMoney/MI_P02_p002.vue'),
  },
  {
    path: '/hana-money/MI_P02_p004',
    name: '/hana-money/MI_P02_p004',
    component: () => import('@/views/hanaMoney/MI_P02_p004.vue'),
  },
  {
    path: '/hana-money/MI_P02_p003',
    name: '/hana-money/MI_P02_p003',
    component: () => import('@/views/hanaMoney/MI_P02_p003.vue'),
  },

  // business
  {
    path: '/business/BF_P00_main',
    name: '/business/BF_P00_main',
    component: () => import('@/views/business/BF_P00_main.vue'),
  },
  {
    path: '/business/BF_P03_p001',
    name: '/business/BF_P03_p001',
    component: () => import('@/views/business/BF_P03_p001.vue'),
  },
  {
    path: '/business/BF_P01_p001',
    name: '/business/BF_P01_p001',
    component: () => import('@/views/business/BF_P01_p001.vue'),
  },
  {
    path: '/business/BF_P02_p001',
    name: '/business/BF_P02_p001',
    component: () => import('@/views/business/BF_P02_p001.vue'),
  },

  // company
  {
    path: '/company/Company_P01_p001',
    name: '/company/Company_P01_p001',
    component: () => import('@/views/company/Company_P01_p001.vue'),
  },
  {
    path: '/company/Company_P01_p002',
    name: '/company/Company_P01_p002',
    component: () => import('@/views/company/Company_P01_p002.vue'),
  },
  {
    path: '/company/Company_P01_p003',
    name: '/company/Company_P01_p003',
    component: () => import('@/views/company/Company_P01_p003.vue'),
  },
  {
    path: '/company/Company_P01_p004',
    name: '/company/Company_P01_p004',
    component: () => import('@/views/company/Company_P01_p004.vue'),
  },
  {
    path: '/company/Company_P01_p005',
    name: '/company/Company_P01_p005',
    component: () => import('@/views/company/Company_P01_p005.vue'),
  },
  {
    path: '/company/Company_P01_p006',
    name: '/company/Company_P01_p006',
    component: () => import('@/views/company/Company_P01_p006.vue'),
  },
  {
    path: '/company/Company_P01_p007',
    name: '/company/Company_P01_p007',
    component: () => import('@/views/company/Company_P01_p007.vue'),
  },
  {
    path: '/company/Company_P01_p008',
    name: '/company/Company_P01_p008',
    component: () => import('@/views/company/Company_P01_p008.vue'),
  },
  {
    path: '/company/Company_P01_p009',
    name: '/company/Company_P01_p009',
    component: () => import('@/views/company/Company_P01_p009.vue'),
  },
  {
    path: '/company/Company_P02_p001',
    name: '/company/Company_P02_p001',
    component: () => import('@/views/company/Company_P02_p001.vue'),
  },
  {
    path: '/company/Company_P02_p002',
    name: '/company/Company_P02_p002',
    component: () => import('@/views/company/Company_P02_p002.vue'),
  },
  {
    path: '/company/Company_P02_p003',
    name: '/company/Company_P02_p003',
    component: () => import('@/views/company/Company_P02_p003.vue'),
  },
  {
    path: '/company/Company_P02_p004',
    name: '/company/Company_P02_p004',
    component: () => import('@/views/company/Company_P02_p004.vue'),
  },
  {
    path: '/company/Company_P03_p001',
    name: '/company/Company_P03_p001',
    component: () => import('@/views/company/Company_P03_p001.vue'),
  },
  {
    path: '/company/Company_P03_p002',
    name: '/company/Company_P03_p002',
    component: () => import('@/views/company/Company_P03_p002.vue'),
  },
  {
    path: '/company/Company_P03_p003',
    name: '/company/Company_P03_p003',
    component: () => import('@/views/company/Company_P03_p003.vue'),
  },
  {
    path: '/company/Company_P03_p004',
    name: '/company/Company_P03_p004',
    component: () => import('@/views/company/Company_P03_p004.vue'),
  },
  {
    path: '/company/Company_P04_p001',
    name: '/company/Company_P04_p001',
    component: () => import('@/views/company/Company_P04_p001.vue'),
  },
  {
    path: '/company/Company_P04_p002',
    name: '/company/Company_P04_p002',
    component: () => import('@/views/company/Company_P04_p002.vue'),
  },
  {
    path: '/company/Company_P04_p003',
    name: '/company/Company_P04_p003',
    component: () => import('@/views/company/Company_P04_p003.vue'),
  },
  {
    path: '/company/Company_P04_p004',
    name: '/company/Company_P04_p004',
    component: () => import('@/views/company/Company_P04_p004.vue'),
  },
  {
    path: '/company/Company_P05_p001',
    name: '/company/Company_P05_p001',
    component: () => import('@/views/company/Company_P05_p001.vue'),
  },
  {
    path: '/company/Company_P05_p002',
    name: '/company/Company_P05_p002',
    component: () => import('@/views/company/Company_P05_p002.vue'),
  },
  {
    path: '/company/Company_P05_p003',
    name: '/company/Company_P05_p003',
    component: () => import('@/views/company/Company_P05_p003.vue'),
  },
  {
    path: '/company/Company_P05_p004',
    name: '/company/Company_P05_p004',
    component: () => import('@/views/company/Company_P05_p004.vue'),
  },
  {
    path: '/company/Company_P05_p005',
    name: '/company/Company_P05_p005',
    component: () => import('@/views/company/Company_P05_p005.vue'),
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
    path: '/agent/Agent_P00_l002',
    name: '/agent/Agent_P00_l002',
    component: () => import('@/views/agent/Agent_P00_l002.vue'),
  },
  {
    path: '/agent/Agent_P00_l003',
    name: '/agent/Agent_P00_l003',
    component: () => import('@/views/agent/Agent_P00_l003.vue'),
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

  // affiliate-plaza
  {
    path: '/affiliate-plaza/Partner_P00_p001',
    name: '/affiliate-plaza/Partner_P00_p001',
    component: () => import('@/views/affiliatePlaza/Partner_P00_p001.vue'),
  },
];

export default routes;
