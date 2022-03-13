

import React, { useEffect, useState } from 'react'
import { NextPage } from 'next/types'

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

const RecoverPage: NextPage = () => {

    const [covidResultInfo, setCovidResultInfo] = useState<CovidResultInfo>()

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'GET'
            })

            const result:CovidResultInfo = await response.json()
            setCovidResultInfo(result)
        }

        loadData()
    }, [])

    if(!covidResultInfo) return <h1>loading...</h1>
    
    return (
        <div>
            <h1>Update at {covidResultInfo[0].txn_date}</h1>
            <p>Recover: {covidResultInfo[0].total_recovered}</p>
        </div>
    )
}

export default RecoverPage;