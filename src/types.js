// CORE
export type Deps = {
  getUid: () => string,
  now: () => number
};

//MODEL
export type Note = {|
  title: string,
  content: string,
  id: string
|};

// REDUCERS
export type AppState = {|
  started: boolean,
  currentTheme: string
|};

export type FirebaseState = {|
  data: object,
  fetching: boolean,
  success: string,
  error: string
|};

// STATE
export type State = {
  app: AppState,
  firebase: FirebaseState
};

// ACTIONS
export type Action =
  | { type: 'APP_STARTED' }
  | { type: 'SET_THEME', payload: { theme: string } }
  | { type: 'FETCH_REQUESTED' }
  | { type: 'FETCH_FAILED' }
  | { type: 'FETCH_SUCCEEDED', payload: { articles: object } };
