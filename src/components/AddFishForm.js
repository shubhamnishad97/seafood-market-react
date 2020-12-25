import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (e) => {
        e.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        e.currentTarget.reset();
    };
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input
                    ref={this.nameRef}
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <input
                    ref={this.priceRef}
                    name="price"
                    type="text"
                    placeholder="Price"
                />
                <select ref={this.statusRef} name="status">
                    <option value="available">Fresh</option>
                    <option value="available">Sold Out</option>
                </select>
                <textarea
                    ref={this.descRef}
                    name="desc"
                    placeholder="Description"
                ></textarea>
                <input
                    ref={this.imageRef}
                    name="img"
                    type="text"
                    placeholder="Image url"
                />
                <button type="submit">Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;
