import * as React from 'react'
import { useRouter } from 'next/router'
import SearchInput, { SearchInputProps } from '~components/SearchInput/SearchInput'
import SearchInputFilters from '~components/SearchInputFilters'
import { DatasetType, ModelType } from '~hooks/api/useFetchSearch'

export type SearchInputFormProps = SearchInputProps & {}

const SearchInputForm: React.FC<SearchInputFormProps> = props => {
  const [value, setValue] = React.useState('')
  const [dataset, setDataset] = React.useState<DatasetType>('cranfield')
  const [model, setModel] = React.useState<ModelType>('vectorial')

  const router = useRouter()

  const handleChangeDataset = (v: string) => setDataset(v as DatasetType)
  const handleChangeModel = (v: string) => setModel(v as ModelType)

  React.useEffect(() => {
    const { q, dataset, model } = router.query
    q && setValue(q as string)
    dataset && setDataset(dataset as DatasetType)
    model && setModel(model as ModelType)
  }, [router?.query])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      console.log('here')
      router.push(`/search?q=${encodeURIComponent(value)}&dataset=${dataset}&model=${model}`)
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
        end={
          <SearchInputFilters
            dataset={dataset}
            model={model}
            onChangeDataset={handleChangeDataset}
            onChangeModel={handleChangeModel}
          />
        }
        {...props}
      />
    </form>
  )
}

export default SearchInputForm
