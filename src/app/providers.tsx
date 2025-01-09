 "use client"
 
 import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
 
 const Providers = ({ children}: {children  : React . ReactNode}) => {

    let persistor = persistStore(store)

   return (
     <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
     </Provider>
   )
 }
 
 export default Providers