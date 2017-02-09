export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/about',
    name: 'about-page',
    component: require('components/AboutPageView')
  },
  {
    path: '/scan',
    name: 'scan-page',
    component: require('components/ScanningPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
