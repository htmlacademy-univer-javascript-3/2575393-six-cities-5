import {BaseUser} from './user-data.ts';

export type Review = {
  id: string;
  date: string;
  user: BaseUser;
  comment: string;
  rating: number;
}

export type ReviewData = {
  comment: string;
  rating: number;
}

export type Reviews = Review[];
