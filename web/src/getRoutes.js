import AppRoutes from './Routes'
import BrandRoutes from './BrandRoutes'

export default function getRoutes() {
  const { hostname } = window.location
  const isApp = hostname === 'app.localhost'
  return isApp ? AppRoutes : BrandRoutes
}
