import * as React from 'react'
import { invoke } from '@tauri-apps/api/core'
import { createRootRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [message, setMessage] = React.useState<string>(
    'Click the button to greet from Rust!',
  )

  const handleGreet = async () => {
    try {
      const result = await invoke<string>('greet', { name: 'Tauri' })
      setMessage(result)
    } catch {
      setMessage('Failed to fetch message from Rust')
    }
  }

  return (
    <React.Fragment>
      <div className="w-screen h-screen flex gap-2.5 flex-col justify-center items-center">
        <p className="font-bold text-2xl text-center w-full text-orange-300">
          {message}
        </p>
        <Button onClick={handleGreet}>greet</Button>
      </div>
    </React.Fragment>
  )
}
