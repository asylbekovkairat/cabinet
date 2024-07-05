import { AttestatCandidateParams } from '../model';

export const routes = {
  getAbiturientRegistraziyList: (params: AttestatCandidateParams) =>
    `/vuz/getAbiturientRegistraziyList?id_university=${params.id_university}&id_admission_plan=${params.id_admission_plan}&tour=${params.tour}&id_bk=${params.id_bk}`,
};
