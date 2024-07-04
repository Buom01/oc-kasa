import styes from './thumbgrid.module.scss'

const ThumbGrid = ({children}) =>
(
    <div className={styes.main}>
        {children}
    </div>
);
    
export default ThumbGrid;