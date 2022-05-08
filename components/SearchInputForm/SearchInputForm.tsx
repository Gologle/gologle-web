import * as React from 'react'
import { useRouter } from 'next/router'
import SearchInput, { SearchInputProps } from '~components/SearchInput/SearchInput'

export type SearchInputFormProps = SearchInputProps & {}

const SearchInputForm: React.FC<SearchInputFormProps> = props => {
  const [value, setValue] = React.useState('')
  const router = useRouter()

  React.useEffect(() => {
    if (router.query.q) {
      setValue(router.query.q as string)
    }
  }, [router?.query?.q])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      router.push(`/search?q=${encodeURIComponent(value)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <SearchInput
        className='w-full py-3'
        placeholder='Search something...'
        type='search'
        value={value}
        showClear={value.length > 0}
        onChange={e => setValue(e.target.value)}
        onClear={() => setValue('')}
        {...props}
      />
    </form>
  )
}

export default SearchInputForm
