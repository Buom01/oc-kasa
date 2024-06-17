import Spoiler from './spoiler';

const Equipments = ({values, ...props}) =>
(
    <Spoiler title="Équipements" {...props}>
        <ul className='unstyled-list'>
            {
                values.map(
                    value =>
                        <li key={value}>{value}</li>
                )
            }
        </ul>
    </Spoiler>
);

export default Equipments;