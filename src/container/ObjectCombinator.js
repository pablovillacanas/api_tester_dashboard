import "./ObjectCombinator.scss"

import React, { useState } from 'react'

import ObjectCombinatorCockpit from '../component/ObjectCombinatorCockpit.js'
import ObjectEditor from '../component/ObjectEditor.js'
import ObjectRepository from '../component/ObjectRepository.js'

const ObjectCombinator = props => {

	const [repository, setRepository] = useState([])
	const [selectedObject, setSelectedObject] = useState({})

	const alerta = (obj) => {
		alert(obj)
	}

	return (
		<div className="ObjectCombinator">
			<ObjectRepository selectedObject={selectedObject} objects={repository}></ObjectRepository>
			<ObjectCombinatorCockpit selectedObject={selectedObject}></ObjectCombinatorCockpit>
			<ObjectEditor alerta={(obj) => {
				alerta(obj); console.log("ay");
			}} selectedObject={selectedObject}></ObjectEditor>
		</div>
	)
}

ObjectCombinator.propTypes = {

}

export default ObjectCombinator;