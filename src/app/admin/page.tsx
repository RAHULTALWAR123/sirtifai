/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import AdminDashboard from "../../components/sections/admin/admin-dashboard"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem("adminAuthenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      const result = await response.json()

      if (result.success) {
        setIsAuthenticated(true)
        sessionStorage.setItem("adminAuthenticated", "true")
      } else {
        setError("Invalid password")
      }
    } catch (error) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("adminAuthenticated")
    setPassword("")
  }

  if (!isAuthenticated) {
    return (
      <div className="bg-[#FEF7F1] font-sans min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-[#FC4C03] rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
              <p className="mt-2 text-center text-sm text-gray-600">Enter admin password to access dashboard</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#FC4C03] focus:border-[#FC4C03] focus:z-10 sm:text-sm"
                  placeholder="Admin Password"
                />
              </div>

              {error && <div className="text-red-600 text-sm text-center">{error}</div>}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FC4C03] ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FC4C03] hover:bg-[#e63d00]"
                  }`}
                >
                  {loading ? "Logging in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
      <AdminDashboard />
      <Footer />
    </div>
  )
}
