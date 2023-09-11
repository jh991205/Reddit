import {FC} from 'react'
import SignIn from '@/components/Signin'
import CloseModal from '@/components/CloseModal'


const page = () => {
    return <div className = 'fixed inset-0 bg-zinc-900/20 z-10'>
        <div className = 'container flex items-center h-full max-w-lg mx-auto'>
            <div className = 'relative bg-white w-full h-fit py-20 px-2 rounde-lg'>
                <div className = 'absolute top-4 right-4'>
                    <CloseModal />
                </div>

                <SignIn />
            </div>
        </div>
    </div>
}

export default page