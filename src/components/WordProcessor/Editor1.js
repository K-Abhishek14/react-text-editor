import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

class Editor1 extends Component {

    state = {
        value: RichTextEditor.createEmptyValue()
    }

    onChange = (value) => {
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(
                value.toString('html')
            );
        }
    };

    render() {
        return (
            <div>
                <h1>Text Editor</h1>
                <RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Editor1;