import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import GraphBox from './GraphBox';

function Graph() {

    const items = [
        { id:1, image :c1 , title: "Multi-Touch Attribution", p: "Track every interaction from first click to final purchase across all channels and devices"},
        { id:2, image :c2 , title: "Channel-Agnostic ROAS", p: "See true return on ad spend without platform bias or inflated numbers."},
        { id:3, image :c3 , title: "First-Party Pixel", p: "Accurate, privacy-safe tracking that works beyond iOS changes and cookie restrictions."},
        { id:4, image :c4 , title: "Creative-Level Insights", p: "Identify winning ads and creatives that actually drive profitable growth."},
        { id:5, image :c5 , title: "Profitability Metrics", p: "Track CAC, AOV, LTV, and margin in real-time to optimize for profit, not just revenue."},
    ]

    return (
        <div id='Features' className='flex flex-col justify-center items-center p-10'>
            <div className="inline-flex items-center gap-2 bg-white shadow-sm border px-4 py-1 rounded-full mb-6">
                <span className="text-purple-600 text-lg">★</span>
                <span className="text-sm font-medium">Core Features</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                Everything You Need to Measure <br /> What Matters
            </h2>

            <p className="text-center text-gray-600 text-lg mb-16">
                Trusted by growth leaders who demand real results, not just pretty reports.
            </p>

            <div className='grid grid-cols-6 gap-5 max-w-7xl'>
                {
                    items.map((item, i) => (
                        <GraphBox key={i} item={item} />
                    ))
                }
            </div>

        </div>
    )
}

export default Graph