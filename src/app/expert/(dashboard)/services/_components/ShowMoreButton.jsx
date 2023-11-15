import React from 'react'
// react spinner
import { ThreeDots } from 'react-loader-spinner'

function ShowMoreButton({ page, dispatch, count, loading }) {
    return (
        <>
            {
                page < count && (
                    <div
                        className='h-10 w-full bg-primary-100 text-primary-500 rounded-lg mt-10 mb-5 cursor-pointer text-sm fcc'
                        onClick={() => dispatch({ type: 'SET_PAGE', payload: page + 1 })}
                    >
                        {
                            loading ? (
                                <ThreeDots
                                    height="50"
                                    width="50"
                                    radius="9"
                                    color="#4fa94d"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            ) : (
                                <span>نمایش بیشتر</span>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default ShowMoreButton