import React from "react";
import PropTypes from 'prop-types'

export const ComponentAvanzado = ({list, title}) => {
	return (
		<div>
			<p>{title}</p>
			<ul>
				{list.map((item) => (
					<ul key={item.id}>{item.name}</ul>
				))}
			</ul>
		</div>
	);
};

ComponentAvanzado.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired
}
