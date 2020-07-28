import React from 'react';

class EmployeesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: this.props.employees,
			filterBy: '',
		};
	}

	handleChange = (e) => {
		this.setState({ filterBy: e.target.value.toLowerCase() });
	};

	render() {
		// const { employees } = this.props;
		return (
			<React.Fragment>
				<div className="controls">
					<input
						type="text"
						className="filter-input"
						data-testid="filter-input"
						onChange={this.handleChange}
					/>
				</div>
				<ul className="employees-list">
					{this.state.employees.map((employee) => {
						if (employee.name.toLowerCase().includes(this.state.filterBy)) {
							return (
								<li key={employee.name} data-testid="employee">
									{employee.name}
								</li>
							);
						}
					})}
				</ul>
			</React.Fragment>
		);
	}
}

export default EmployeesList;
