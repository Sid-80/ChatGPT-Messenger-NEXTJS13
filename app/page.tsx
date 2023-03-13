import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white ">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className='h-8 w-8' />
                    <h2>Examples</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">Explain Something to me</p>
                    <p className="infoText">Difference between dog and cat</p>
                    <p className="infoText">Explain life</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className='h-8 w-8' />
                    <h2>Capabilities</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">ChatGPT Model to use</p>
                    <p className="infoText">Messages stored in Firestore</p>
                    <p className="infoText">Hot Toast notification !</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className='h-8 w-8' />
                    <h2>Limitations</h2>
                </div>
                <div className="space-y-2">
                    <p className="infoText">May incorrect information</p>
                    <p className="infoText">May produce harmful instructions</p>
                    <p className="infoText">Limited Knowledge of world and events after 2021</p>
                </div>
            </div>
            
        </div>
        <div className='py-10'>
            <p className="animate-pulse">Made with ❤️ by Siddharth</p>
        </div>
    </div>
  )
}

export default HomePage