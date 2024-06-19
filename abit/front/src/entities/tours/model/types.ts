export interface Tour {
  tour: number;
  begin_date: string;
  end_date: string;
  confirm_begin_date: string;
  confirm_end_date: string;
  bk: string;
}

export interface TourByBK {
  id_bk: number;
  tour: number;
  begin_date: string;
  end_date: string;
  vremya: string;
}
