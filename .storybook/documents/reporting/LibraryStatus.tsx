import React from 'react'
import ExpandableDirectory, { STANDARD_ROOT_COLOR } from '../utilityComponents/ExpandableDirectory'
import componentData from '../../../_pre-build/ComponentData'
import { type Documentation, computeComponentName, computeComponentPath } from '../DocUtilities'
import * as componentBadges from '../ComponentBadges'
import { type Meta } from '@storybook/vue3'

const LibraryStatus = () => {
  const componentCount = Object.getOwnPropertyNames(componentData).length

  const entryMapper = (entry: { documentation: Documentation, storybookMeta: Meta}) => {
    return {
      title: computeComponentName(entry.storybookMeta),
      path: computeComponentPath(entry.storybookMeta)
    }
  }

  const missingBadges = Object.values(componentData).filter((entry) => {
    return !entry.documentation.badges || entry.documentation.badges.length === 0
  }).map(entryMapper)

  const releasedComponents = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.RELEASED)
  }).map(entryMapper)

  const pendingComponents = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges. length > 0 &&
      entry.documentation.badges.every((badge) => badge === componentBadges.TEST_PENDING)
  }).map(entryMapper)

  const stableComponents = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.STABLE)
  }).map(entryMapper)

  const deprecatedComponents = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.DEPRECATED)
  }).map(entryMapper)

  const requiresHighPriorityMaintenance = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.RELEASED) &&
      entry.documentation.badges.find((badge) => badge === componentBadges.NEEDS_MAINTENANCE)
  }).map(entryMapper)

  const requiresMaintenance = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.NEEDS_MAINTENANCE) &&
      !entry.documentation.badges.find((badge) => badge === componentBadges.RELEASED)
  }).map(entryMapper)

  const requiresRefinement = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.NEEDS_REFINEMENT)
  }).map(entryMapper)

  const waitingForDependencies = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.WAITING_DEPENDENCIES)
  }).map(entryMapper)

  const incompleteComponents = Object.values(componentData).filter((entry) => {
    return entry.documentation.badges &&
      entry.documentation.badges.find((badge) => badge === componentBadges.INCOMPLETE)
  }).map(entryMapper)

  // TODO: add query for deprecated - released

  const taglessComponents = Object.values(componentData).filter((entry) => {
    return !entry.documentation.tags || entry.documentation.tags.length === 0
  }).map(entryMapper)

  /*
    TODO: add query for invalid badge combination
    stable - any
    released - needs refinement
    released - waiting dependencies
    released - incomplete
    deprecated - stable
    needs refinement - needs maintenance
    and others...
  */
  const withInvalidBadgeCombination = []


  return (
    <>
    <h3 style={{ marginBlockEnd: '1rem'}}>Component Count: { componentCount }</h3>
    <div style={{ marginBlockEnd: '1rem', border: '1px solid lightgreen'}}>
      <ExpandableDirectory title={`Stable components (${stableComponents.length})`} items={stableComponents} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Released Components (${releasedComponents.length})`} items={releasedComponents} color={STANDARD_ROOT_COLOR} />
    </div>
    
    <div style={{ marginBlockEnd: '1rem', border: '1px solid orange'}}>
      <ExpandableDirectory title={`Requires Hight Priority Maintenance (${requiresHighPriorityMaintenance.length})`} items={requiresHighPriorityMaintenance} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Requires Maintenance (${requiresMaintenance.length})`} items={requiresMaintenance} color={STANDARD_ROOT_COLOR}/>
      <ExpandableDirectory title={`Requires Refinement (${requiresRefinement.length})`} items={requiresRefinement} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Waiting for Dependencies (${waitingForDependencies.length})`} items={waitingForDependencies} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Incomplete Components (${incompleteComponents.length})`} items={incompleteComponents} color={STANDARD_ROOT_COLOR} />
    </div>

    <div style={{ marginBlockEnd: '1rem', border: '1px solid lightgrey'}}>
      <ExpandableDirectory title={`Components Missing Badge (${missingBadges.length})`} items={missingBadges} color={STANDARD_ROOT_COLOR}  />
      <ExpandableDirectory title={`Release Pending Components (${pendingComponents.length})`} items={pendingComponents} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Deprecated Components (${deprecatedComponents.length})`} items={deprecatedComponents} color={STANDARD_ROOT_COLOR} />
      <ExpandableDirectory title={`Tagless Components (${taglessComponents.length})`} items={taglessComponents} color={STANDARD_ROOT_COLOR} />
    </div>

    <div style={{ marginBlockEnd: '1rem', border: '1px solid red'}}>
      <ExpandableDirectory title={`Components with Invalid Badge Combination (${withInvalidBadgeCombination.length})`} items={withInvalidBadgeCombination} color={STANDARD_ROOT_COLOR} />
    </div>
    </>
  )
}

export default LibraryStatus