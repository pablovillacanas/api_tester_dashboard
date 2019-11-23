import "./ObjectCombinator.scss"

import ObjectCombinatorCockpit from '../component/object_combinator/ObjectCombinatorCockpit'
import ObjectVisualizer from '../component/object_combinator/ObjectVisualizer'
import React from 'react'

const ObjectCombinator = props => {
	return (
		<div className="ObjectCombinator">
			<ObjectCombinatorCockpit></ObjectCombinatorCockpit>
			<ObjectVisualizer></ObjectVisualizer>
		</div>
	)
}

ObjectCombinator.propTypes = {

}

export default ObjectCombinator;