import "./ObjectCombinator.scss"

import React, { useState } from 'react'

import ObjectCombinatorCockpit from '../component/ObjectCombinatorCockpit.js'
import ObjectEditor from '../component/ObjectEditor.js'
import ObjectRepository from '../component/ObjectRepository.js'

const ObjectCombinator = props => {

	const [repository, setRepository] = useState([])
	const [selectedObject, setSelectedObject] = useState({})

	const obj_analyze = (obj) => {
		setSelectedObject(obj)
	}

	return (
		<div className="ObjectCombinator">
			<ObjectRepository selectedObject={selectedObject} objects={repository}></ObjectRepository>
			<ObjectCombinatorCockpit selectedObject={selectedObject}></ObjectCombinatorCockpit>
			<ObjectEditor
				analyze={(obj) => obj_analyze(obj)}
				selectedObject={selectedObject}></ObjectEditor>
		</div>
	)
}

ObjectCombinator.propTypes = {

}

export default ObjectCombinator;