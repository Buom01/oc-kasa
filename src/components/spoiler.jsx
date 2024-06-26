import { useState } from "react";
import clsx from 'clsx';

const Spoiler = ({title, children, ...props}) =>
{
    const [_open, _setOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleAction = (e) =>
    {
        e.preventDefault();
        setOpen((open) => !open);
        if (!open)
            _setOpen(true);
    }
    const updateRawOpenState = () =>
    {
        _setOpen(open);
    }
    return (
        <details
                {...props}
                className={clsx('spoiler', open && 'open')}
                open={_open} onClick={toggleAction}
                onTransitionEnd={updateRawOpenState}
            >
            <summary>{title}</summary>
            <div className="content">{children}</div>
        </details>
    );
}

export default Spoiler;