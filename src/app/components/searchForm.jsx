import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onChange, value }) => {
    return (
        <div className="input-group">
            <div className="form-outline">
                <input
                    type="search"
                    id="form1"
                    onChange={onChange}
                    className="form-control"
                    value={value}
                />
                <label className="form-label" htmlFor="form1">
                    Search
                </label>
            </div>
        </div>
    );
};

SearchForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SearchForm;
