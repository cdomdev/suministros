import { lazy } from 'react'

// export {CardsOfertas} from './CardsOfertas'
// export {CardSubcategorias} from './CardSubcategorias'
// export {CardCategorias} from './CardCategorias'

export const CardCategorias = lazy(() =>import('./CardCategorias'))
export const CardSubcategorias = lazy(() =>import('./CardSubcategorias'))
export const CardsOfertas = lazy(() =>import('./CardsOfertas'))