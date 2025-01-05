// keep constants sorted alphabetically word wise.
// call `Object.freez()` on each constant to prevent modifications
// type constants to match their exactly match attribute valus to allow type script detecting custom badge usage


const IN_PROGRESS : { label: 'in-progress', color: '#02F0FC', fontColor: 'black' } = {
  label: 'in-progress',
  color: '#02F0FC',
  fontColor: 'black'
}
Object.freeze(IN_PROGRESS)


const INCOMPLETE : { label: 'incomplete', color: '#c6e5d9', fontColor: 'black'} = {
  label: 'incomplete',
  color: '#c6e5d9',
  fontColor: 'black'
}
Object.freeze(INCOMPLETE)

const WAITING_DEPENDENCIES : { label: 'waiting-dependencies', color: '#808080', fontColor: 'white'} = {
  label: 'waiting-dependencies',
  color: '#808080',
  fontColor: 'white'
}
Object.freeze(WAITING_DEPENDENCIES)

const NEEDS_REFINEMENT : { label: 'needs-refinement', color: "#e5c39a", fontColor: 'black'} = {
  label: 'needs-refinement',
  color: '#e5c39a',
  fontColor: 'black'
}
Object.freeze(NEEDS_REFINEMENT)

const TEST_PENDING : { label: 'test-pending', color: '#ffff80', fontColor: 'black' } = {
  label: 'test-pending',
  color: '#ffff80',
  fontColor: 'black'
}
Object.freeze(TEST_PENDING)

const RELEASED : { label: 'released', color: '#a66c07', fontColor: 'white' } = {
  label: 'released',
  color: '#a66c07',
  fontColor: 'white'
}
Object.freeze(RELEASED)

const STABLE : { label: 'stable', color: '#aeff6b', fontColor: 'black' } = {
  label: 'stable',
  color: '#aeff6b',
  fontColor: 'black'
}
Object.freeze(STABLE)

const NEEDS_MAINTENANCE : { label: 'needs-maintenance', color: '#ff6a6a', fontColor: 'black' } = {
  label: 'needs-maintenance',
  color: '#ff6a6a',
  fontColor: 'black'
}
Object.freeze(NEEDS_MAINTENANCE)

const DEPRECATED : { label: 'deprecated', color: '#000000', fontColor: '#ffffff' } = {
  label: 'deprecated',
  color: '#000000',
  fontColor: '#ffffff'
}
Object.freeze(DEPRECATED)

export {
  IN_PROGRESS,
  WAITING_DEPENDENCIES,
  INCOMPLETE,
  NEEDS_REFINEMENT,
  TEST_PENDING,
  RELEASED,
  STABLE,
  NEEDS_MAINTENANCE,
  DEPRECATED,
}