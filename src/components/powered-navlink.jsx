import clsx from 'clsx';
import {
    NavLink
} from "react-router-dom";

const PoweredNavlink = ({className, ...props}) => 
(
    <NavLink
        className={
            ({ isActive, isPending }) =>
                clsx(
                    isActive && "active",
                    isPending && "pending",
                    className
                )
        }
        {...props}
    />
);

export default PoweredNavlink;