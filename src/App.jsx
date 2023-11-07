import React from 'react'
import "./App.css";
import { CounterReducer } from './hooks/CounterReducer';
import { InputWithFocus } from './hooks/InputWithFocus';
import { MeasureElement } from './hooks/MeasureElement';
import RoomWithCanvas from './hooks/RoomWithCanvas';
import { Office } from './hooks/useContext/Office';
import { Statistics } from './hooks/useMemo/Statistics';
import { ParentComponent } from './hooks/useCallback/ParentComponent';
import ComponentBasic from './proptypes/ComponentBasic';
import { ComponentAvanzado } from './proptypes/ComponentAvanzado';
import { ComponentsConChildren } from './proptypes/ComponentsConChildren';

const list = [
	{ id: 1, name: 'React'},
	{ id: 2, name: 'Vue' },
	{ id: 3, name: 'Angular' },
	{ id: 4, name: 'Laravel'}
]

true


const App = () => {

	return (
		<>
			PropTypes
			<br />
			<br />
      {/* Hooks */}
      {/* <AppCounter /> */}
			{/* <RoomWithCanvas /> */}
			{/* <Office /> */}
			{/* <CounterReducer /> */}
			{/* <InputWithFocus /> */}
			{/* <MeasureElement /> */}
			{/* <Statistics /> */}
			{/* <ParentComponent /> */}
			{/* <ComponentBasic  data={[1,2,3]} /> */}
			{/* <ComponentAvanzado list={list} title={'Tecnologias'} /> */}
			<ComponentsConChildren title={'Encabezado'}>
				{/* <p>Soy un parrafo</p> */}
			</ComponentsConChildren>
		</>
	);
};

export default App;
