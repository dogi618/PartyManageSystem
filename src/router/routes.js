const routes = [

  {
    path: '*',
    redirect: '/Information'
  },
  {
    path: '/Navigation',
    meta: {
      title: '华南农业大学党务管理系统'
    },
    component: () => import('../views/Navigation')
  },
  {
    path: '/Information',
    meta: {
      title: '学生信息查询'
    },
    component: () => import('../views/InformationSearch/InformationSearchMain')
  },
  {
    path: '/MemberManage',
    meta: {
      title: '党员管理'
    },
    component: () => import('../views/PartyMemberManage')
  },
  {
    path: '/VolunteerAduit',
    meta: {
      title: '志愿时审核'
    },
    component: () => import('../views/VolunteerAduit')
  },

];

export default routes;