import * as React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'

import Document from '~components/Document'
import SearchLayout from '~layouts/SearchLayout'
import { fromMilisecondsToSeconds } from '~utils'

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
        Found {documentsAmount} documents in {fromMilisecondsToSeconds(responseTime)} seconds
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

const Results = () => {
  return (
    <div className='w-full sm:w-4/5 md:w-1/2 divide-y pt-10'>
      <Document title='Hola mundo' body='Documento de ejemplo' />
      <Document
        title='Esto es un lorem ipsum'
        body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repellat necessitatibus cupiditate quas
      facere labore modi? Est vero delectus sed fuga obcaecati iusto, eveniet et quisquam maxime nihil,
      possimus unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe id eaque eum corporis
      officia ex quaerat labore deleniti nesciunt nobis? Ad a delectus sint iusto et rerum neque expedita'
      />
      <Document
        title='Esto es un lorem ipsum'
        body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repellat necessitatibus cupiditate quas
      facere labore modi? Est vero delectus sed fuga obcaecati iusto, eveniet et quisquam maxime nihil,
      possimus unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe id eaque eum corporis
      officia ex quaerat labore deleniti nesciunt nobis? Ad a delectus sint iusto et rerum neque expedita'
      />
      <Document
        title='Esto es un lorem ipsum'
        body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repellat necessitatibus cupiditate quas
      facere labore modi? Est vero delectus sed fuga obcaecati iusto, eveniet et quisquam maxime nihil,
      possimus unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe id eaque eum corporis
      officia ex quaerat labore deleniti nesciunt nobis? Ad a delectus sint iusto et rerum neque expedita'
      />
      <Document
        title='Esto es un lorem ipsum'
        body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repellat necessitatibus cupiditate quas
      facere labore modi? Est vero delectus sed fuga obcaecati iusto, eveniet et quisquam maxime nihil,
      possimus unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe id eaque eum corporis
      officia ex quaerat labore deleniti nesciunt nobis? Ad a delectus sint iusto et rerum neque expedita'
      />
      <Document
        title='Esto es un lorem ipsum'
        body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repellat necessitatibus cupiditate quas
      facere labore modi? Est vero delectus sed fuga obcaecati iusto, eveniet et quisquam maxime nihil,
      possimus unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe id eaque eum corporis
      officia ex quaerat labore deleniti nesciunt nobis? Ad a delectus sint iusto et rerum neque expedita'
      />
    </div>
  )
}

const SearchPage: NextPage<{ q: string }> = ({ q }) => {
  return (
    <SearchLayout>
      <div>
        <ResultsHeader q={q} suggestion='Hello World' documentsAmount={15000} responseTime={67} />
        <Results />
      </div>
    </SearchLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let search = typeof query.q === 'string' ? query.q : query.q[0]
  return { props: { q: decodeURIComponent(search) } }
}

export default SearchPage
