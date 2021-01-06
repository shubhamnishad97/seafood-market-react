import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (e) => {
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };
    render() {
        const fish = this.props.fish;
        return (
            <div className="fish-edit">
                <input
                    type="text"
                    name="name"
                    value={fish.name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="price"
                    value={fish.price}
                    onChange={this.handleChange}
                />
                <select
                    name="status"
                    value={fish.status}
                    onChange={this.handleChange}
                >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea
                    name="desc"
                    value={fish.desc}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="image"
                    value={fish.image}
                    onChange={this.handleChange}
                />
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </div>
        );
    }
}

export default EditFishForm;
