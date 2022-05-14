import { FilterIcon } from '@heroicons/react/solid'
import * as React from 'react'
import Button from '~components/Button'

import Modal from '~components/Modal'
import ModalContent from '~components/ModalContent'
import ModalFooter from '~components/ModalFooter'
import Select from '~components/Select'
import Option from '~components/Option'
import { DatasetType, ModelType } from '~hooks/api/useFetchSearch'
import { Function } from '~utils/types'

export type SearchInputFiltersProps = {
  dataset?: DatasetType
  model?: ModelType
  onChangeDataset?: Function<string, void>
  onChangeModel?: Function<string, void>
}

const SearchInputFilters: React.FC<SearchInputFiltersProps> = ({
  dataset = 'cranfield',
  model = 'vectorial',
  onChangeDataset,
  onChangeModel,
}) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const models = [
    {
      value: 'vectorial',
    },
  ] as { value: string; disabled?: boolean }[]
  const datasets = [
    {
      value: 'cranfield',
    },
    {
      value: 'reuters',
      disabled: true,
    },
    {
      value: 'newsgroups',
    },
  ]

  return (
    <>
      <button
        type='button'
        color='white'
        className='py-1 px-2 focus:outline-none border-none shadow-none focus:ring-0'
        onClick={handleOpen}
      >
        <FilterIcon className='w-5 h-5 text-slate-600 ' />
      </button>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <h2 className='text-xl font-semibold text-slate-800 dark:text-slate-600'>Filters:</h2>
          <div className='mt-3 grid grid-cols-2 gap-x-3'>
            <Select
              label='Dataset'
              variant='disabled'
              value={dataset}
              onChange={v => onChangeDataset?.(v as string)}
            >
              {datasets.map(dataset => (
                <Option
                  key={dataset.value}
                  variant='disabled'
                  value={dataset.value}
                  disabled={dataset.disabled}
                >
                  {dataset.value}
                </Option>
              ))}
            </Select>
            <Select
              label='Model'
              variant='disabled'
              value={model}
              onChange={v => onChangeModel?.(v as string)}
            >
              {models.map(model => (
                <Option key={model.value} variant='disabled' value={model.value} disabled={model?.disabled}>
                  {model.value}
                </Option>
              ))}
            </Select>
          </div>
        </ModalContent>
        <ModalFooter>
          <Button className='w-full' onClick={handleClose}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default SearchInputFilters
