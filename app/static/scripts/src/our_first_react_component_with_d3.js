import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

export class AnimatableRectangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <svg width={500} height={200}>
                    <g>
                        <rect
                            id={'our_rect'}
                            height={100}
                            width={100}
                        />
                    </g>
                </svg>
                <input type={"range"} min={0} max={300} onChange={(event) => {
                    this.handleChange(event);
                }}/>
            </>
        )
    }

    handleChange(event) {
        this.state.rect.attr('transform', `translate(${event.target.value})`)
    }

    componentDidMount() {
        this.setState({
            rect: d3.select('#our_rect')
        })
    }
}

ReactDOM.render(
    <AnimatableRectangle/>,
    document.getElementById('react_container')
);


