// function getClassName({selfState, focus, error, touched, required, value}) {
//     let className = 'bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ring-1 ring-cf-200';

//     if (selfState !== 'None') {
//         className += ' cursor-pointer';
//     }

//     if (focus) {
//         className += error && touched ? ' ring-2 ring-error' : ' ring-primary-500 ring-2';
//     } else if (required) {
//         switch (selfState) {
//             case 'None':
//                 className += ' ring-primary-500 ring-2';
//                 break;
//             case 'Medium':
//                 className += ' border-dashed border-warning border-2';
//                 break;
//             case 'High':
//                 className += ' ring-error ring-2';
//                 break;
//             default:
//                 break;
//         }
//     }

//     return className;
// }


function InputText({ state, title, placeholder, type, className, id, name, required, formik }) {
    // ... rest of your code ...

    const baseClass = 'bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden';
    const cursorClass = selfState !== 'None' ? 'cursor-pointer' : '';
    const focusClass = focus ? errorCondition ? 'ring-2 ring-error' : 'ring-primary-500 ring-2' : '';
    const requiredClass = !focus && required ? selfState === 'None' ? 'ring-primary-500 ring-2' : selfState === 'Medium' ? 'border-dashed border-warning border-2' : selfState === 'High' ? 'ring-error ring-2' : 'ring-1 ring-cf-200' : 'ring-1 ring-cf-200';

    return (
        <div className={`${className}`}>
            <div onClick={clickHandler} className={`${baseClass} ${cursorClass} ${focusClass} ${requiredClass}`}>

                {/* ... rest of your code ... */}

            </div>
            {/* ... rest of your code ... */}
        </div>
    )
}