import { SunIcon } from '@heroicons/react/24/outline';
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className='h-8 w-8' />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="">"Explain Something to me"</p>
                    <p className="">"Difference between dog and cat"</p>
                    <p className="">"Explain Something to me"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage