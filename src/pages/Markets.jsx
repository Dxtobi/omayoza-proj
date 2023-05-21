import React, { useState } from 'react'
import Search from '../assets/icons/search.svg'
import ChevronDown from '../assets/icons/chevron-down.svg'
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

        <section className='container mx-auto py-8 px-4'>
            {/* table */}
            
            <div className="grid grid-cols-1 bg-white md:p-16 p-4" >
            <table class=" text-black table-auto ">
            <thead>
                <tr>
                <th className='text-left'>Name</th>
                <th className='text-left'>Sell</th>
                <th className='text-left'>Buy</th>
                <th className='text-left'>Spread</th>
                <th className='text-left'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>U.S. dollar</td>
                <td>
                    <span className='bg-success-color text-white p-2'>
                        1.2345
                    </span>
                </td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>British Pound</td>
                <td>
                    <span className='bg-success-color text-white p-2'>
                        1.2345
                    </span>
                </td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>Euro</td>
                <td>1.2345</td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>Pound Sterling</td>
                <td>
                    <span className='bg-success-color text-white p-2'>
                        1.2345
                    </span>
                </td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>Australian Dollar</td>
                <td>1.2345</td>
                <td>
                    <span className='bg-danger-color text-white p-2'>
                        1.2345
                    </span>
                </td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>U.S. dollar</td>
                <td>1.2345</td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>British Pound</td>
                <td>1.2345</td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>Euro</td>
                <td>1.2345</td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
                <tr>
                <td>Pound Sterling</td>
                <td>1.2345</td>
                <td>1.2345</td>
                <td>1.7</td>
                <td><button>
                        <img src={ChevronDown} alt="" />
                    </button></td>
                </tr>
            </tbody>
            </table>
            </div>
        </section>
    </>
  )
}

export default Markets