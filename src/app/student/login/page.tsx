
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Pencil, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StudentLoginPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/student/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-login-gradient text-white font-sans">
      {/* Top Bar */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold">WELCOME, PLEASE LOGIN.</h1>
        <p className="text-sm">♦ Powered by simon styles technologies</p>
      </header>

      <main className="flex items-center justify-center py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Logo */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <span className="text-6xl font-bold" style={{color: '#004400'}}>Online</span>
              <span className="text-6xl font-bold" style={{color: '#FFFF00'}}> Platform</span>
              <div className="mt-8">
                  <Link href="/">
                      <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-green-800">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Go Back Home
                      </Button>
                  </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-black bg-opacity-20 p-8 rounded-2xl shadow-lg border border-white/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">System Login</h2>
                <Pencil className="w-5 h-5 text-white" />
              </div>
              <hr className="border-white/30 mb-6"/>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Label htmlFor="username" className="text-sm font-light">Username</Label>
                  <Input 
                    id="username" 
                    type="text" 
                    className="bg-white/10 border-white/20 rounded-full mt-2 text-white placeholder-white/50 focus:ring-yellow-400"
                  />
                </div>
                
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type={passwordVisible ? "text" : "password"}
                    className="bg-white/10 border-white/20 rounded-full mt-2 text-white placeholder-white/50 focus:ring-yellow-400"
                  />
                  <button 
                    type="button" 
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-4 top-10"
                  >
                    {passwordVisible ? <EyeOff className="w-5 h-5 text-white/50" /> : <Eye className="w-5 h-5 text-white/50" />}
                  </button>
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 rounded-full text-white font-bold py-3 mt-4">
                  LOGIN
                </Button>
              </form>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
