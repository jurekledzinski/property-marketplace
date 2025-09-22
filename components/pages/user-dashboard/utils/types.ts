type Params = { open?: boolean };

export type ClassNamesUserDashboard = (params: Params) => {
  dashboard: string;
  container: string;
  content: string;
};

export type ClassNamesGrid = (params: Params) => {
  chartContainer: string;
};
