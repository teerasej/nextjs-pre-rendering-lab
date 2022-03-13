

import React from 'react'
import { NextPage } from 'next/types'
import useSWR from 'swr'

const fetcher = (...args:any) => fetch(args).then((res) => res.json())

type CovidResultInfo = [{
    txn_date: string,
    new_case: Number,
    total_case: Number,
    new_case_excludeabroad: Number,
    total_case_excludeabroad: Number,
    new_death: Number,
    total_death: Number,
    new_recovered: Number,
    total_recovered: Number,
    update_date: string
}]

const ExcludeAbroadPage: NextPage = () => {


    const { data, error } = useSWR('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', fetcher)

    const covidResultInfo = data as CovidResultInfo

    if (error) return <div>Failed to load</div>
    if(!covidResultInfo) return <h1>loading...</h1>
    
    return (
        <div>
            <h1>Update at {covidResultInfo[0].txn_date}</h1>
            <p>New case exclude abroad: {covidResultInfo[0].new_case_excludeabroad}</p>
            <p>Total case exclude abroad: {covidResultInfo[0].total_case_excludeabroad}</p>
        </div>
    )
}

export default ExcludeAbroadPage;