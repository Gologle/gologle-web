import * as React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import useFetchDocument from '~hooks/api/useFetchDocument'
import DetailsLayout from '~layouts/DetailsLayout'
import LoadingState from '~components/LoadingState'
import { Document } from '~api/query.types'

const DetailsPage: NextPage<{ id: number }> = ({ id }) => {
  // const { data, isLoading, error } = useFetchDocument({ id })
  const data: Document = {
    id: String(id),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis esse a officia ex molestias vero, nostrum sint facere qui eaque, doloremque aspernatur vitae possimus consectetur blanditiis. Dolorum, at vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis esse a officia ex molestias vero, nostrum sint facere qui eaque, doloremque aspernatur vitae possimus consectetur blanditiis. Dolorum, at vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis esse a officia ex molestias vero, nostrum sint facere qui eaque, doloremque aspernatur vitae possimus consectetur blanditiis. Dolorum, at vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis esse a officia ex molestias vero, nostrum sint facere qui eaque, doloremque aspernatur vitae possimus consectetur blanditiis. Dolorum, at vero?',
  }
  const isLoading = false
  const error: any = null

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
          <h1 className='text-slate-800 dark:text-slate-300 font-bold text-center text-3xl sm:text-5xl'>
            Document {data.id}:
          </h1>
          <p className='text-slate-800 dark:text-slate-300 max-w-4xl mx-auto'>{data.text}</p>
        </article>
      )}
    </DetailsLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let id = typeof params.id === 'string' ? +params.id : +params.id[0]

  return { props: { id } }
}

export default DetailsPage
