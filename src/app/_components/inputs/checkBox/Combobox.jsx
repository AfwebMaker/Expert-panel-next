import { Fragment, useEffect, useRef, useState } from 'react'
// headlessUi
import { Combobox, Transition } from '@headlessui/react'
// react icons
import { HiOutlineCheck } from "react-icons/hi";

const people = [
    { id: 1, text: 'ضصثیب' },
    { id: 2, text: 'سثیببص' },
    { id: 3, text: 'صثبب' },
    { id: 4, text: 'صثبب' },
    { id: 5, text: 'صثبصثب' },
    { id: 6, text: 'ضصثق' },
]

export default function ComboBox({ name, placeholder, onBlur, inputRef, buttonRef, formik, className, state }) {
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')
    const optionsRef = useRef(null)

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.text
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    //fix this code
    const onBlurHandler = (e) => {
        setTimeout(() => {
            onBlur(e)
            inputRef.current.blur()
            formik.setFieldTouched(name)
        }, 120);
    }

    useEffect(() => {
        if (selected && selected.id !== undefined) {
            formik.setFieldValue(name, selected.id)
        }
    }, [selected])

    return (
        <div className={`w-full absolute bottom-0 ${className}`}>
            <Combobox disabled={state} value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default text-left sm:text-sm ">
                        <Combobox.Button ref={buttonRef} className="w-full">
                            <Combobox.Input
                                autoComplete='off'
                                ref={inputRef}
                                onBlur={onBlurHandler}
                                placeholder={placeholder}
                                className="w-full outline-none rounded-md border-none pb-1 pr-4 pl-10 text-sm leading-5 text-gray-900 bg-white"
                                displayValue={(person) => person.text}
                                onChange={(event) => { setQuery(event.target.value) }}
                            />
                        </Combobox.Button>
                        <Combobox.Button className="absolute top-[-14px] left-0 flex items-center pl-2">

                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options ref={optionsRef} className="z-10 absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    اطلاعات مورد نظر پیدا نشد.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-100 text-primary-500' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium text-primary-500' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.text}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-primary-500' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <HiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
