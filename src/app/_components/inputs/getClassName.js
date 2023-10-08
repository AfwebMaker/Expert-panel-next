function getClassName({selfState, focus, error, touched, required, value}) {
    let className = 'bg-white h-[60px] relative fcc flex-col rounded-md overflow-hidden ring-1 ring-cf-200';

    if (selfState !== 'None') {
        className += ' cursor-pointer';
    }

    if (focus) {
        className += error && touched ? ' ring-2 ring-error' : ' ring-primary-500 ring-2';
    } else if (required) {
        switch (selfState) {
            case 'None':
                className += ' ring-primary-500 ring-2';
                break;
            case 'Medium':
                className += ' border-dashed border-warning border-2';
                break;
            case 'High':
                className += ' ring-error ring-2';
                break;
            default:
                break;
        }
    }

    return className;
}