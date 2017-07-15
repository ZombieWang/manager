import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount () {
    this.props.employeesFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource ({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  render () {
    return (
      <View>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
        <Text>Employee</Text>
      </View>
    )
  }
}

export default connect(null, { employeesFetch })(EmployeeList)
