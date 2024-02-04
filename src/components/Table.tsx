import { useState, useEffect } from 'react'

type Data = {
    id: number;
    name: string;
    grams: string;
    protein: string;
    carb: string;
    fat: string;
    calories: string;
  };

function Table () {

    const [data, setData] = useState([]);


    useEffect(() => {
            fetch('https://run.mocky.io/v3/393ec0ab-ff86-4a3d-8244-9614a3a2b469')
            .then((res) => res.json())
            .then((data) => {
            setData(data);
            console.table(data);
            });
          //eslint-disable-next-line
      }, []);
      

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">Name</th>
                        <th scope="col" className="px-6 py-4">Grams</th>
                        <th scope="col" className="px-6 py-4">Protein</th>
                        <th scope="col" className="px-6 py-4">Carb</th>
                        <th scope="col" className="px-6 py-4">Fat</th>
                        <th scope="col" className="px-6 py-4">Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-b transition duration-300 ease-in-out border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">Rice</td>
                        <td className="whitespace-nowrap px-6 py-4">100 g</td>
                        <td className="whitespace-nowrap px-6 py-4">20 g</td>
                        <td className="whitespace-nowrap px-6 py-4">40 g</td>
                        <td className="whitespace-nowrap px-6 py-4">40 g</td>
                        <td className="whitespace-nowrap px-6 py-4">654 kcal</td>
                    </tr>

                    { 

                        data.map( (item: Data) => {
                            return ( 
                            <tr key={item.id} className="border-b transition duration-300 ease-in-out border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.grams}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.protein}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.carb}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.fat}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.calories}</td>
                            </tr>
                            )
                        })

                    }

                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        )
}

export default Table