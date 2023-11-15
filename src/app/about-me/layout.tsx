import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full grow px-4 py-3">
      <main className="flex  w-full gap-6">
        <div className="flex flex-col items-end ">
          {Array(16)
            .fill(0)
            .map((a, n) => (
              <p key={n} className="text-sm">
                {n}
              </p>
            ))}
        </div>
        {children}
      </main>
    </main>
  )
}

export default layout
