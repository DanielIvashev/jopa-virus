import React from "react";
import {Link} from "react-scroll";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.value.length < 3) {
            console.log(1)
            this.setState({
                error: 'too short'
            })
        } else if (e.target.value.length > 35) {
            console.log(2)
            this.setState({
                error: 'too long'
            })
        } else {
            console.log(3)
            this.setState({
                error: ''
            })
        }
        this.setState({
            value: e.target.value,
        })
    };


    ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    handleSubmit = (e) => {
        this.setState({
            value: ''
        })
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">search by country</label>
                    <input type="email"
                           className={this.state.error ? 'form-control error' : 'form-control'}
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="enter country"
                           value={this.state.value}
                           onChange={this.handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        {this.state.error}
                    </small>
                </div>
                <Link
                    onClick={this.handleSubmit}
                    to={this.ucFirst(this.state.value)}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                    <button
                        disabled={this.state.error ? 'disabled' : null}
                        className={this.state.error ? 'error' : null}
                    >search
                    </button>
                </Link>
            </form>
        )
    }
}

export default Search