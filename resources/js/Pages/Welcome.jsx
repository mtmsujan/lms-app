import { Head } from '@inertiajs/react'

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Magic LMS - Best Learning Management System" />
      <div className="min-h-screen bg-gray-100">
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900">
                <h1 className="text-2xl font-bold mb-4">Welcome to Laravel with Inertia.js!</h1>
                <p className="text-gray-600">
                  This is a sample page created with Inertia.js and React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 