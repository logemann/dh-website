import { redirect } from 'next/navigation'
import Navigation from '@/components/Navigation'

async function login(formData: FormData): Promise<void> {
  'use server'
  
  const email = formData.get('email')
  const password = formData.get('password')
  
  // Here you would typically validate the credentials and create a session
  // For this example, we'll just check if the email and password are not empty
  if (email && password) {
    redirect('/dashboard')
  }
  
}

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form action={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

