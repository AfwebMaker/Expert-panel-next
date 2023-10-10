import { Fragment, useEffect, useRef, useState } from "react";
// headlessUi
import { Combobox, Transition } from "@headlessui/react";
// react icons
import { HiOutlineCheck, HiOutlineX } from "react-icons/hi";

export default function ComboBox({
  name,
  placeholder,
  onBlur,
  inputRef,
  buttonRef,
  formik,
  className,
  activeInput,
  data,
  focus,
  state,
  selected,
  setSelected
}) {
  const [items] = useState(data);
  
  const [query, setQuery] = useState("");
  const optionsRef = useRef(null);

  //find initial value
  useEffect(() => {
    const selectedItems = items.list.filter((item) =>
      items.active.includes(item.id)
    );
    setSelected(selectedItems);
  }, [items]);

  const filteredItems =
    query === ""
      ? items["list"]
      : items["list"].filter((item) =>
          item.text
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  //fix this code
  const onBlurHandler = (e) => {
    setTimeout(() => {
      onBlur(e);
      inputRef.current.blur();
      formik.setFieldTouched(name);
    }, 120);
  };

  useEffect(() => {
    if (selected && selected.id !== undefined) {
      formik.setFieldValue(name, selected.id);
    }
  }, [selected]);

  const removeItem = (id) => {
    if (!activeInput) setSelected(selected.filter((item) => item.id !== id));
  };

  const getStateIcon = (e) => {
    switch (state) {
      case "None":
        return <HiOutlineCheck className="text-lg mr-2" />;
      case "Medium":
        return "";
      case "High":
        return <HiOutlineX onClick={e} className="text-lg mr-2" />;
      default:
        return <HiOutlineX onClick={e} className="text-lg mr-2" />;
    }
  };

  const getStateColor = () => {
    switch (state) {
      case "None":
        return "bg-primary-100 text-primary-600 border border-primary-200"
      case "Medium":
        return "bg-orange-100 text-orange-600 border border-orange-200";
      case "High":
        return focus ? "bg-primary-100 text-primary-600 border border-primary-200" : "bg-red-100 text-red-600 border border-red-200"
      default:
        return "bg-primary-100 text-primary-600 border border-primary-200";
    }
  };

  return (
    <>
      <div
        className={`w-full transition-all duration-300 
        ${className}
        ${state === "None" || state === "Medium" ? "mt-6" : focus || selected.length ? "mt-10" : "mt-6" }
        `}
      >
        <Combobox
          disabled={activeInput}
          value={selected}
          onChange={setSelected}
          multiple
        >
          <div className="relative mt-1">
            <div className="relative w-full cursor-default text-left sm:text-sm ">
              <Combobox.Button
                ref={buttonRef}
                // ${state === "None" || state === "Medium" ? "hidden" : focus || selected.length || data.active.length ? "flex" : "hidden" }
                // ${focus  ? "flex" : "hidden"}
                className={`w-full ${state === "None" || state === "Medium" ? "hidden" : focus || selected.length ? "flex" : "hidden" } `}
              >
                <Combobox.Input
                  autoComplete="off"
                  ref={inputRef}
                  onBlur={onBlurHandler}
                  placeholder={placeholder}
                  className={`w-full outline-none rounded-md border-none pb-1 pr-4 pl-10 text-sm leading-5 text-gray-900 ${
                    activeInput ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  displayValue={(item) => item.text}
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                ></Combobox.Input>
              </Combobox.Button>
              <div
                className={`w-full items-center p-3 gap-2 flex-wrap pl-24 ${
                  selected.length ? "flex" : "hidden"
                }`}
              >
                {selected.map((item) => (
                  <div
                    key={item.id}
                    className={`h-8 rounded-lg flex items-center justify-between px-2 ${getStateColor()}`}
                  >
                    <span>{item.text}</span>
                    <div className="h-full text-lg fcc">
                      {getStateIcon(() => removeItem(item.id))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options
                ref={optionsRef}
                className="z-20 scroll_custom py-1 absolute mt-2 max-h-60 w-full overflow-auto rounded-lg bg-white text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {filteredItems.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    اطلاعات مورد نظر پیدا نشد.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active, selected }) =>
                        `relative cursor-default select-none py-3 pl-10 pr-4 ${
                          active
                            ? "bg-primary-100 text-primary-500"
                            : "text-gray-900"
                        } ${selected ? "bg-primary-100 text-primary-500" : ""}`
                      }
                      value={item}
                      onClick={(e) => {e.stopPropagation()}}
                    >
                      {({ selected, active }) => (
                        <>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pl-1 ${
                                active
                                  ? "text-primary-500 bg-primary-500 h-full"
                                  : "text-teal-600 bg-primary-500 h-full "
                              }`}
                            ></span>
                          ) : null}
                          <span
                            className={`block truncate ${
                              selected
                                ? "font-medium text-primary-500"
                                : "font-normal"
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
          </div>
        </Combobox>
      </div>
    </>
  );
}
