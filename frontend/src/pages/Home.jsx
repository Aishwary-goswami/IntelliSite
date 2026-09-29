import React from 'react'
import Navbar from '../components/Navbar'
import { Sparkles, ArrowRight , Zap, LayoutTemplate, Download} from "lucide-react"
import { motion } from 'motion/react'


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className='relative min-h-screen bg-[#050505] text-white overflow-hidden'>
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute -top-40 -left-40 w-125 h-125 bg-indigo-600/20 rounded-full blur-[140px]' />
          <div className='absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[140px]' />
        </div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className='relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center'>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.4 }}
            className='inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur '>
            <Sparkles className=" w-4 h-4 text-purple-400 " />
            <span className='text-sm text-gray-300 '>Ai Website Builder </span>
          </motion.div>

          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }} className='text-5xl md:text-7xl font-bold leading-tight '>Build websites with <br /> <span className='bg-linear-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent'>AI in minutes</span></motion.h1>

          <motion.p
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='max-w-2xl mx-auto mt-6 text-lg text-gray-400'
          >
            Generate stunning , responsive websites instantly using Ai . No coding required . Perfect for startups , creaters and freelancers.
          </motion.p>

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col sm:flex-row justify-center gap-4 mt-10'
          >
            <a href="/dashboard"><button  className='flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-semibold transition cursor-pointer hover:scale-110'>Start Building <ArrowRight size={18} /></button></a>

            <a href="https://www.youtube.com/watch?v=FBJ2HZr2hH4"><button className='px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl transition cursor-pointer '>Watch demo</button>
            </a>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 '>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition '>
              <Zap className=" text-yellow-400 mb-4 " />
              <h3 className='font-semibold text-lg mb-2 '>Instant Generation </h3>
              <p className='text-sm text-gray-400'>Describe your website and AI generates it instantly</p>
            </div>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition '>
              <LayoutTemplate className=" text-indigo-400 mb-4 " />
              <h3 className='font-semibold text-lg mb-2 '>Responsive Layout </h3>
              <p className='text-sm text-gray-400'>Responsive layout and perfect look on mobile , tabltes and PC</p>
            </div>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:border-indigo-400 transition '>
              <Download className=" text-green-400 mb-4 " />
              <h3 className='font-semibold text-lg mb-2 '>Export  Code </h3>
              <p className='text-sm text-gray-400'>Download clean HTML , CSS and JS instantly</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
