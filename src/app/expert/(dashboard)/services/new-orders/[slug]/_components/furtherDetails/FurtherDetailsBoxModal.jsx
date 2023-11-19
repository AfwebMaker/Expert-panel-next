function DescriptionBoxModal({ text }) {
    return (
        <div className="w-full h-full overflow-y-scroll scroll_custom px-2">
            <p className='w-full my-6 flex leading-7'>
                {text}
            </p>
        </div>
    )
}

export default DescriptionBoxModal;