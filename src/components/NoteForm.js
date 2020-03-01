import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../redux/actions/actions'
import moment from 'moment'

import styles from './NoteForm.module.css';
import { Button, Form, Select } from 'antd';
const { Option } = Select;




class NoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      tag: '',
      nowDate: '',
    }
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  
  handleTagChange = (e) => {
    this.setState({
      tag: e.target.value
    })
  }
  


  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.title === '' || this.state.content === '' ) { 
      alert("Must fill out")
    }
    else {
      this.props.addNote(this.state.title, this.state.content, )
      this.setState({
        title: '',
        content: '',

      })
    }

  }

  componentDidMount(){
  const nowDate = moment(new Date()).format('YYYY-MM-DD')
    this.setState({
      nowDate: nowDate
    })
  }

  render() {
        return (
      <div className={styles.NoteForm}>
        <Form layout="inline" onSubmit={this.handleSubmit} className={styles.NoteForm}>
          <h3>Add a Note</h3>
          Title: <br />
          <input style={{ width: '100%' }} type="text"
            name="title"
            onChange={this.handleTitleChange}
            value={this.state.title} />
          <br />
          Content: <br />
          <textarea style={{ width: '100%' }}
            name="content"
            cols="30"
            rows="5"
            onChange={this.handleContentChange}
            value={this.state.content}></textarea>
          <br />
          <Button type="primary" htmlType="submit">Add Note</Button>
        </Form></div>
    )
  }
}

const mapDispatchToProps = {
  addNote: addNote
}

export default connect(null, mapDispatchToProps)(NoteForm)