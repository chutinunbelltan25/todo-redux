import React from 'react'
import { connect } from 'react-redux'
import { removeNote, showActive, showInactive, setTagStatus } from '../redux/actions/actions'
import { Button, Card, Select } from 'antd';
import styles from './NotesList.module.css'

const { Option } = Select;

class NotesList extends React.Component {
  handleDeleteNote = (id) => {
    this.props.removeNote(id)
  }

  handleTagChange = (e) => {
    this.props.setTagStatus(e)
  }

  render() {
    let visibility = this.props.visibility
    let notes = this.props.notes.filter(note => note.status === visibility)
    let notesTag = notes.filter(note => this.props.showTag.tagStatus ===  'None' ? true : note.tag === this.props.showTag.tagStatus )
    return (
      <>
        <div className={styles.NotesList}>
          <h3>Notes</h3>
          {notesTag.map(note => (
            <Card key={note.id} className={styles.NoteCard}
              title={<b>{note.title}</b>}
              extra={<Button type="danger" onClick={() => this.handleDeleteNote(note.id)}>X</Button>}
              style={{ width: '100%' }}
            >
              <span><b>{note.content}</b></span><br />
              <span><b>{note.tag}</b></span><br />
              <p>{note.createDate}</p>
            </Card>
          ))}


          
          <Select style={{ width: 200 }} onChange={this.handleTagChange}>
            <Option value="None">None</Option>
          </Select>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = {
  removeNote: removeNote,
  showActive: showActive,
  showInactive: showInactive,
  setTagStatus: setTagStatus


}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    visibility: state.visibility,
    showTag: state.showTag 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesList)