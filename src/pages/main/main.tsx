import React from 'react';
import Header from '../../components/header/header';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './main.scss';
import { pop_add } from '../../store/slices/main.slice'

const Main: React.FC = () => {

    const { popular } = useTypedSelector(state => state.main)

    const dispatch = useDispatch()



    return (
        <div className='Main' onClick={() => { dispatch(pop_add({ title: '1' })) }}>
            <Header />
            {popular.map((el, index) => {
                return <div key={index}>{el.title}</div>
            })}
        </div>
    );
}

export default Main;
