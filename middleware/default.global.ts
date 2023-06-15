export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/demo1') {
    console.log('禁止访问这个页面')
    abortNavigation()
    return navigateTo('/')
  }
})
