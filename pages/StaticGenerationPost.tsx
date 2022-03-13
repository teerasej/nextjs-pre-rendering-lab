
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import React from 'react'


type Team = {
  username:string,
  members:string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  
  return {
    props: {
      username: 'tody',
      members:  ['Tony', 'Peter']
    }
  }
}


const StaticGenerationPost: NextPage = ({ username, members }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log(username)
  console.log(members?.[0])

  return (
    <div>1. {username} with {members?.length} members</div>
  )
}

export default StaticGenerationPost