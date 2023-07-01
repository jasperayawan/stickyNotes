import { useState } from "react"
import Layout from "./layout"
import {AiOutlineFileAdd} from 'react-icons/ai'

export default function Home(){
    const [isSearch, setIsSearch] = useState('');

    

    return(
            <>
                <Layout>
                    <div className="flex flex-col w-100 p-2">
                        <div className="flex justify-between gap-2 items-center w-100">
                            <input 
                                type="search" 
                                placeholder="search"
                                value={isSearch}
                                className="px-3 py-1 w-full d-block rounded-md outline-none"
                                onChange={(e) => setIsSearch(e.target.value)}
                                />
                            
                            <button>
                                <AiOutlineFileAdd/>
                            </button>
                        </div>
                    </div>
                </Layout>
            </>
    )
}