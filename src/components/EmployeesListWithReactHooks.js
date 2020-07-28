import React, { useState } from 'react';

const EmployeesList = ({ employees }) => {
	const [state, setState] = useState('');
	return (
		<React.Fragment>
			<div className="controls">
				<input
					type="text"
					className="filter-input"
					data-testid="filter-input"
					value={state}
					onChange={(e) => setState(e.target.value)}
				/>
			</div>
			<ul className="employees-list">
				{employees
					.filter((employee) =>
						employee.name.toLowerCase().includes(state.toLowerCase())
					)
					.map((employee) => (
						<li key={employee.name} data-testid="employee">
							{employee.name}
						</li>
					))}
			</ul>
		</React.Fragment>
	);
};

export default EmployeesList;
