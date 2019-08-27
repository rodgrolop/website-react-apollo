import React, { useContext, Suspense, lazy } from 'react'
import { DialogsContext } from '../../context'

const SignDialogComponent = lazy(() => import('../signDialog'))

const LazyDialogsComponent = () => {
  const dialogsContext = useContext(DialogsContext)

  return (
    dialogsContext.state.isSignDialogOpen && (
      <Suspense fallback={null}>
        <SignDialogComponent />
      </Suspense>
    )
  )
}

export default LazyDialogsComponent
