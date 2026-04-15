import { motion } from 'motion/react';

const Marquee = ({ text }: { text: string }) => (
  <div className="flex overflow-hidden whitespace-nowrap bg-white text-black py-4 border-y-8 border-black font-black uppercase tracking-tighter text-4xl md:text-6xl">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      className="flex gap-16 will-change-transform"
    >
      {[...Array(20)].map((_, i) => (
        <span key={i}>{text}</span>
      ))}
    </motion.div>
  </div>
);

export default function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-[#ff0000] selection:text-black">
      {/* Hero */}
      <section className="min-h-screen bg-[#ff0000] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl w-full flex flex-col items-center z-10 py-20"
        >
          {/* Image */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-4xl aspect-[21/9] bg-[#ff0000] mb-12 border-8 border-black overflow-hidden relative flex items-center justify-center group"
          >
            <img 
              src="https://pbs.twimg.com/community_banner_img/2044314599067996161/s2_8GM8G?format=jpg&name=small" 
              alt="YN Community" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-8 border-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </motion.div>
          
          <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 text-black">
            Are you YN<br/>or UNC?
          </h1>
          
          <div className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black mb-16 space-y-2">
            <p>YN = 15–29</p>
            <p>UNC = 30+</p>
            <p className="mt-6 text-white bg-black inline-block px-6 py-2 transform -skew-x-6">There is no in-between.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
            <a href="https://axiom.trade/meme/DisTFmuqW8E4WWpaDqfZAvUTzt9BVYmsvTHrFDaVBabX?chain=sol" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-12 py-6 text-2xl md:text-3xl font-black uppercase tracking-widest hover:invert transition-all border-4 border-transparent hover:scale-105 active:scale-95">
              Buy YN
            </a>
            <a href="#chart" className="bg-transparent text-black px-12 py-6 text-2xl md:text-3xl font-black uppercase tracking-widest border-4 border-black hover:bg-black hover:text-[#ff0000] transition-all hover:scale-105 active:scale-95">
              Chart
            </a>
          </div>
        </motion.div>
      </section>

      <Marquee text="$YN $YN $YN $YN $YN" />

      {/* Thesis */}
      <section className="py-40 px-6 bg-black flex flex-col items-center text-center border-t-8 border-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl space-y-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            We are not an unc "beta"
          </h2>
          <div className="h-2 w-32 bg-[#ff0000] mx-auto"></div>
          <p className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-gray-400 leading-tight">
            We are the future.
          </p>
          <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#ff0000] leading-[0.9]">
            $yn takeover
          </p>
        </motion.div>
      </section>

      {/* Token Info */}
      <section className="py-40 px-6 bg-black border-y-8 border-[#ff0000] flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="border-8 border-white p-8 md:p-16 hover:bg-white hover:text-black transition-colors group">
              <h3 className="text-3xl font-black uppercase text-gray-500 group-hover:text-gray-400 mb-4 tracking-widest">Token</h3>
              <p className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-[#ff0000] group-hover:text-black">YN</p>
              <div className="mt-12 pt-12 border-t-8 border-white group-hover:border-black">
                <h3 className="text-3xl font-black uppercase text-gray-500 group-hover:text-gray-400 mb-4 tracking-widest">Dev Wallet</h3>
                <p className="text-5xl md:text-6xl font-black uppercase tracking-tighter">10% <br/><span className="text-[#ff0000] group-hover:text-black">(Locked)</span></p>
                <p className="mt-6 text-xl font-bold uppercase text-gray-400 group-hover:text-black italic">Supply sent to Chairman, idontpaytaxes, gake, Mitch and 2 others.</p>
              </div>
            </div>
            
            <div className="border-8 border-white p-8 md:p-16 flex flex-col justify-center hover:bg-[#ff0000] transition-colors group">
              <h3 className="text-3xl font-black uppercase text-gray-500 group-hover:text-black mb-12 tracking-widest">Strategy</h3>
              <ul className="space-y-8">
                <li className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">50% <br/><span className="text-gray-400 group-hover:text-black">Locks</span></li>
                <li className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">50% <br/><span className="text-gray-400 group-hover:text-black">Airdrops to YNs</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Culture / Meme / Chart */}
      <section id="chart" className="py-40 px-6 bg-black flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl w-full space-y-32"
        >
          <div className="space-y-12">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              YNs move fast.<br/>
              <span className="text-gray-700">UNCs ask questions.</span>
            </h2>
            <div className="h-2 w-32 bg-white mx-auto"></div>
            <p className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#ff0000]">
              Pick your side.
            </p>
          </div>

          {/* Meme Image */}
          <div className="w-full max-w-3xl mx-auto border-8 border-white p-2">
            <img 
              src="https://pbs.twimg.com/media/HF71jgBWQAA86IJ?format=jpg&name=medium" 
              alt="YN Meme" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full border-8 border-white p-2 md:p-4 bg-[#0a0a0a]">
            {/* Dexscreener Embed */}
            <div className="relative w-full pb-[125%] xl:pb-[65%]">
              <iframe 
                src="https://dexscreener.com/solana/9rPoaV7XE1uCYYGrFmzEX8Fa8kEVP3xDsdwypC5qpump?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="YN Chart"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 bg-[#ff0000] flex flex-col items-center text-center border-t-8 border-black">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl w-full flex flex-col items-center"
        >
          <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] text-black mb-8">
            Join YN
          </h2>
          <p className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white mb-20 bg-black px-8 py-4 transform skew-x-6">
            Don't become UNC
          </p>

          <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto">
            <a href="https://axiom.trade/meme/DisTFmuqW8E4WWpaDqfZAvUTzt9BVYmsvTHrFDaVBabX?chain=sol" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-16 py-8 text-3xl md:text-4xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-8 border-black hover:scale-105 active:scale-95">
              Buy YN
            </a>
            <a href="https://x.com/i/communities/2039285584930197815" target="_blank" rel="noopener noreferrer" className="bg-transparent text-black px-16 py-8 text-3xl md:text-4xl font-black uppercase tracking-widest border-8 border-black hover:bg-black hover:text-[#ff0000] transition-all hover:scale-105 active:scale-95">
              Twitter
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
