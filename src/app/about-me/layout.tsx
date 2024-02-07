import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-0 w-full grow gap-6 overflow-hidden px-4 py-3">
      <div className=" overflow-hidden ">
        <div className="h-10 flex-col items-end ">
          {Array(116)
            .fill(0)
            .map((a, n) => (
              <p key={n} className="text-sm">
                {n + 1}
              </p>
            ))}
        </div>
      </div>
      {children}
    </main>
  )
}

export default layout
