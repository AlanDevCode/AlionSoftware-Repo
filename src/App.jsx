import React, { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
    const [isDark, setIsDark] = useState(false)

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-[#233D4D] text-[#F5FBE6]' : 'bg-[#F5FBE6] text-[#233D4D]'}`}>
            <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen relative">
                <nav className="absolute top-4 right-4 z-50">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="px-6 py-2 rounded-xl bg-[#215E61] text-[#F5FBE6] hover:opacity-90 transition-opacity font-bold shadow-lg"
                    >
                        Mode: {isDark ? 'Dark' : 'Light'}
                    </button>
                </nav>

                <main className="text-center z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                    >
                        Alion Software
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-2xl md:text-3xl mb-8 font-light"
                    >
                        Tú lo piensas, nosotros lo creamos.
                    </motion.p>

                    {/* Abstract 3D Placeholder - Blur Effect */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="w-64 h-64 bg-[#215E61] rounded-full mx-auto blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"
                    ></motion.div>
                </main>
            </div>
        </div>
    )
}

export default App
