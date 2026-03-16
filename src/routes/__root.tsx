import * as React from 'react'
import { invoke } from '@tauri-apps/api/core'
import { createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [message, setMessage] = React.useState<string>('')

  React.useEffect(() => {
    const fetchMessage = async () => {
      try {
        const result = await invoke<string>('greet', { name: 'Tauri' })
        setMessage(result)
      } catch {
        setMessage('Failed to fetch message from Rust')
      }
    }

    fetchMessage()
  }, [])

  return (
    <React.Fragment>
      <div>{message}</div>
    </React.Fragment>
  )
}
