
import { GetStaticProps, NextPage, InferGetStaticPropsType, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'


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

export const getServerSideProps: GetServerSideProps = async (context) => {

    const response = await fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })

    const result = await response.json()


    return {
        props: {
            result
        }
    }
}


const CovidResult: NextPage = ({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const resultObject = result as CovidResultInfo

    return (
        <div>
            <h1>Update at {resultObject[0].txn_date}</h1>
            <p>New case: {resultObject[0].new_case}</p>
        </div>
    )
}

export default CovidResult