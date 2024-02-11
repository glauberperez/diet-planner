

import Table from '../components/Table'
import Menu from '../components/Menu'


const Main = () => {


    return (
        <>

        <main className="py-5">

        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl backdrop-blur-3xl bg-gray-800 rounded-xl p-3">

            <Table/>

            <Menu/>

        </div>
        
        </main>
    
        </>
    )
}

export default Main