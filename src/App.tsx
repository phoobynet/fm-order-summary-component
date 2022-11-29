import OrderSummary from './routes/OrderSummary'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<OrderSummary />}
      />
    </Routes>
  )
}
