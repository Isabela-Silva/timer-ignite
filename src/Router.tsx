import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
     
      <Route path="/" element={<DefaultLayout />}> {/*  esse Route abraça os outros pois ele tem o layout. o path dele é / pq o layout vi pegar todas as rotas*/}
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History/> }/>
      </Route>
    </Routes>
  )
}