export const routes = {
  getSpecialitiesList: (id_university: number, id_learning: number) =>
    `/vuz/getSpecialtySpisok?id_university=${id_university}&id_learning=${id_learning}`,
  getSpecialitiesR: (id_university: number, id_learning: number) =>
    `/vuz/getSpecialtyR?id_university=${id_university}&id_learning=${id_learning}`,
};
