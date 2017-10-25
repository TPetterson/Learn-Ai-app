import type { Deps, State } from '../types';

const configureDeps = (initialState: State, platformDeps: Deps) => ({
  ...platformDeps,
  getUid: () => platformDeps.uuid.v4(),
  now: () => Date.now()
});

export default configureDeps;
