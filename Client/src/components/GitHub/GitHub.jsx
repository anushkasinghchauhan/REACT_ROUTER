
import React from 'react'
import { UNSAFE_DataRouterContext } from 'react-router-dom';
// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';


function GitHub() {
    const data = useLoaderData();
    //  const [data, setData] = useState([])

    //   useEffect(() => {
    //     fetch('https://api.github.com/users/anushkasinghchauhan')
    //     .then(response => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    //   }, [])

  return (
    <div className="text-center m-4 p-4 text-3xl font-bold text-gray-800 bg-gray-600 dark:text-white">
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="GitHub Picture" className="rounded-full w-64 h-64 mx-auto mt-4" width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anushkasinghchauhan');
    return response.json();
}
