import "./ObjectCombinator.scss"

import ObjectCombinatorCockpit from '../component/object_combinator/ObjectCombinatorCockpit'
import ObjectEditor from '../component/object_combinator/ObjectEditor'
import React from 'react'

const ObjectCombinator = props => {
	return (
		<div className="ObjectCombinator">
			<ObjectCombinatorCockpit></ObjectCombinatorCockpit>
			<ObjectEditor></ObjectEditor>
		</div>
	)
}

ObjectCombinator.propTypes = {

}

export default ObjectCombinator;