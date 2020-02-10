import { Video } from '../models/Video';
import { User } from '../models/User';
import { Motor } from '../models/Motor';

export interface AppState {
    readonly videos: Video[];
    readonly user: User;
    readonly motors: Motor;

}