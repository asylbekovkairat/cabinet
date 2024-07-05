export const routes = {
  getLearningTypes: () => '/vuz/getLearning',
  getLearningTypesR: (id_university: number) => `/vuz/getLearningR?id_university=${id_university}`,
};
