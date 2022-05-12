import * as React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import useFetchDocument from '~hooks/api/useFetchDocument'
import DetailsLayout from '~layouts/DetailsLayout'
import LoadingState from '~components/LoadingState'
import { DatasetType } from '~hooks/api/useFetchSearch'

const DetailsPage: NextPage<{ id: number; dataset: DatasetType }> = ({ id, dataset }) => {
  const { data, error, isLoading } = useFetchDocument({ id, dataset })

  return (
    <DetailsLayout>
      {error ? (
        <div className='text-red-600 dark:text-red-400 text-center'>Unable to load data</div>
      ) : isLoading ? (
        <div className='flex justify-center items-center'>
          <LoadingState />
        </div>
      ) : (
        <article className='flex flex-col gap-10'>
          <h1 className='text-slate-800 dark:text-slate-300 font-bold text-center text-2xl sm:text-4xl'>
            {dataset} - {data.id}:
          </h1>
          <p className='text-slate-800 dark:text-slate-300 max-w-4xl mx-auto'>{data.text}</p>
        </article>
      )}
    </DetailsLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = typeof params.id === 'string' ? +params.id : +params.id[0]
  const dataset = typeof params.dataset === 'string' ? params.dataset : (params.dataset[0] as DatasetType)

  return { props: { id, dataset } }
}

export default DetailsPage
