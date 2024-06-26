import { Fragment, useEffect, useState } from 'react'
// headlessUi
import { Combobox, Transition } from '@headlessui/react'

export default function CustomComboBox({ name, placeholder, onBlur, inputRef, buttonRef, formik, className, activeInput, data, focus }) {
    const [items, setItems] = useState(data)
    const [selected, setSelected] = useState({})
    const [query, setQuery] = useState('')

    useEffect(() => {
        setItems(data)
    }, [data])

    //find initial value
    useEffect(() => {
        items.forEach((item) => {
            String(item.id) === String(formik.values[name]) && setSelected(item)
        })
    }, [items, data])

    useEffect(() => {
        if (selected && selected.id !== undefined) {
            formik.setFieldValue(name, selected.id)
        }
    }, [selected])

    const filteredItems =
        query === ''
            ? items
            : items.filter((item) =>
                item.text
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    //fix this code
    const onBlurHandler = (e) => {
        onBlur(e)
        formik.setFieldTouched(name)
    }

    return (
        <div className={`w-full absolute bottom-0 ${className}`}>
            <Combobox disabled={activeInput} value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default text-left sm:text-sm ">
                        <Combobox.Button ref={buttonRef} className="w-full">
                            <Combobox.Input
                                autoComplete='off'
                                ref={inputRef}
                                onBlur={onBlurHandler}
                                placeholder={placeholder}
                                className={`w-full outline-none rounded-md border-none pb-1 pr-4 pl-10 text-sm leading-5 text-gray-900 ${activeInput ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                displayValue={(item) => item.text}
                                onChange={(event) => { setQuery(event.target.value) }}
                            />
                        </Combobox.Button>
                    </div>
                    {focus &&
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="z-20 scroll_custom py-1 absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredItems.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        اطلاعات مورد نظر پیدا نشد.
                                    </div>
                                ) : (
                                    filteredItems.map((item) => (
                                        <Combobox.Option
                                            key={item.id}
                                            className={({ active, selected }) =>
                                                `relative cursor-default select-none py-3 pl-10 pr-4 ${active ? 'bg-primary-100 text-primary-500' : 'text-gray-900'
                                                } ${selected ? 'bg-primary-100 text-primary-500' : ''}`
                                            }
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 right-0 flex items-center pl-1 ${active ? 'text-primary-500 bg-primary-500 h-full' : 'text-teal-600 bg-primary-500 h-full '
                                                                }`}
                                                        >

                                                        </span>
                                                    ) : null}
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium text-primary-500' : 'font-normal'
                                                            }`}
                                                    >
                                                        {item.text}
                                                    </span>

                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    }
                </div>
            </Combobox>
        </div>
    )
}
