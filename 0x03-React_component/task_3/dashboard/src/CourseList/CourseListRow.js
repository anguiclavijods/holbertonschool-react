import React from "react";
import PropTypes from "prop-types";
import propTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	// props:
	// - isHeader: bool, default: false
	// - textFirstCell: string, required
	// - textSecondCell: string, default: null
	if (isHeader) {
		if (textSecondCell === null) {
			return <tr><th colSpan="2">{textFirstCell}</th></tr>;
		} else {
			return <tr><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>;
		}
	}
	return <tr><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>;
}

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null
}

CourseListRow.propTypes = {
	isHeader: propTypes.bool,
	textFirstCell: propTypes.string.isRequired,
	textSecondCell: propTypes.oneOfType([
		propTypes.string,
		propTypes.number,
	])
}

export default CourseListRow