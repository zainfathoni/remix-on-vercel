import { CheckCircleIcon } from '@heroicons/react/solid'
import { ReactNode } from 'react'

export default function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="bg-green-50 border-l-4 border-green-400 py-3 px-4 mt-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-900">{children}</p>
        </div>
      </div>
    </div>
  )
}
