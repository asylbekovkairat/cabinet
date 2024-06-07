import { ApiDirectionsRequest, getDirections } from '~entities/institution/direction/api';
import { IDirection } from '~entities/institution/direction/model/types';
import { atom, atomWithDefault } from '~shared/lib/atom-state';

export const directionsList = atomWithDefault<IDirection[] | null>((_get) => null);

export const setDirectionsList = atom<IDirection[] | null, ApiDirectionsRequest, Promise<void>>(
  (get) => get(directionsList),
  async (_get, set, { faculty_id }) => {
    const response = await getDirections({ faculty_id });
    const data = response.data;
    set(directionsList, data);
  }
);
