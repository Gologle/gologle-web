import * as React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import Document from '~components/Document'
import SearchLayout from '~layouts/SearchLayout'
import { fromMilisecondsToSeconds } from '~utils'
import { Document as DocumentApi } from '~api/query.types'
import useFetchSearch from '~hooks/api/useFetchSearch'
import LoadingState from '~components/LoadingState'

type ResultsHeaderProps = {
  q: string
  suggestion?: string
  documentsAmount?: number
  responseTime?: number
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ q, suggestion, documentsAmount, responseTime }) => {
  return (
    <>
      <div className='mt-1 text-sm text-slate-600 dark:text-slate-300'>
        Found {documentsAmount} documents in {fromMilisecondsToSeconds(responseTime).toFixed(4)} seconds
      </div>
      <div className='mt-10 text-lg text-slate-900 dark:text-slate-200'>
        <span className='pr-2'>Results for:</span>{' '}
        <Link href={`/search?q=${encodeURIComponent(q)}`}>
          <a className='font-bold'>{q}</a>
        </Link>
      </div>
      <div className='mt-1 text-md text-slate-900 dark:text-slate-200'>
        {suggestion && (
          <div>
            <span className='pr-2'>Search instead:</span>{' '}
            <Link href={`/search?q=${encodeURIComponent(suggestion)}`}>{suggestion}</Link>
          </div>
        )}
      </div>
    </>
  )
}

type ResultsProps = { documents: DocumentApi[] }

const Results: React.FC<ResultsProps> = ({ documents }) => {
  return (
    <div className='w-full sm:w-4/5 md:w-1/2 divide-y pt-10'>
      {documents.map(document => (
        <Link key={document.id} href={`/details/${document.id}`} passHref>
          <Document title='' body={document.text} />
        </Link>
      ))}
    </div>
  )
}

const SearchPage: NextPage<{ q: string; documents: DocumentApi[] }> = ({ q }) => {
  const { data, isFetching, refetch } = useFetchSearch({ q })

  React.useEffect(() => {
    refetch()
  }, [q, refetch])

  return (
    <SearchLayout>
      <div className='flex flex-col'>
        {isFetching ? (
          <div className='mt-20 w-full flex flex-col items-center justify-center'>
            <LoadingState />
          </div>
        ) : (
          data && (
            <>
              <ResultsHeader
                q={q}
                suggestion='rocket'
                documentsAmount={data.total}
                responseTime={data.time}
              />
              <Results documents={data.results} />
            </>
          )
        )}
      </div>
    </SearchLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let q = typeof query.q === 'string' ? query.q : query.q[0]

  return { props: { q: decodeURIComponent(q) } }
}

export default SearchPage
