import React, { useState } from 'react'
import Search from '../assets/icons/search.svg'

import Table from '../components/Table'
const Markets = () => {

    const [query, setQuery] = useState('') //state for query

    const SearchQuery = e => {
        e.preventDefault()
        console.log(query); // log query input
    }
  return (
    <>
        <section className='container mx-auto py-8 px-4'>
            <div className="grid md:grid-cols-2 items-center gap-4">
                <div>
                    <h1 className="big-display uppercase">
                        Markets
                    </h1>
                </div>

                <div>
                    <form onSubmit={SearchQuery}>
                        <div className="append items-center">
                            <input type="text" onChange={e => setQuery(e.target.value)} className="w-full p-3.5 px-4 pr-14" placeholder='Search Currencies' />
                            <button type='submit' className='btn-send'>
                                <img src={Search} alt="" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

       <Table/>
    </>
  )
}

export default Markets