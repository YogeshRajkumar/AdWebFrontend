import img from '../assets/Fourframe.png';

function Graph() {
    return (
        <div id='FourForm' className='flex flex-col justify-center items-center p-10'>
            <div className="inline-flex items-center gap-2 bg-white shadow-sm border px-4 py-1 rounded-full mb-6">
                <span className="text-purple-600 text-lg">★</span>
                <span className="text-sm font-medium">Target Audience</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                Built for Performance-Obsessed <br />Teams
            </h2>

            <p className="text-center text-gray-600 text-lg mb-16">
                Trusted by growth leaders who demand real results, not just pretty reports.
            </p>

            <img draggable={false} src={img} alt="" />

        </div>
    )
}

export default Graph