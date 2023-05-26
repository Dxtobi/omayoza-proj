import React from 'react';
import ChevronDown from '../assets/icons/chevron-down.svg'
function Table(props) {
    return (
        <section className='container mx-auto py-8'>
        {/* table */}
        
        <div className="grid grid-cols-1 bg-white md:p-16 p-4" >
        <table className=" text-black table-auto ">
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
    );
}

export default Table;