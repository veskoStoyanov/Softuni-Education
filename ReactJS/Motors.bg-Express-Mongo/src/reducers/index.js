import ajaxStatusReducer from './ajaxStatusReducer'

import { registerReducer, loginReducer, registerErrorReducer, loginErrorReducer, logoutReducer } from './authReducer';
import { videoReducer, videoDetailsReducer, createVideoReducer, deleteVideoReducer } from '../reducers/videoReducer';
import { motorReducer, motorDetailsReducer, createMotorReducer, deleteMotorReducer, editMotorReducer } from './motorReducer'
import { deleteContactReducer, contactReducer, createContactReducer, contactDetailsReducer } from './contactReducer';
import { commentReducer, deleteCommentReducer, createCommentReducer } from './commentReducer';
import { userContactReducer, editUserContactReducer, userContactDetailsReducer } from './userContactReduser';
import { fetchHotelReducer, editHotelReducer, deleteHotelReducer, } from './hotelReducer'
export default {
  register: registerReducer,
  login: loginReducer,
  ajaxCalls: ajaxStatusReducer,
  logout: logoutReducer,
  registerError: registerErrorReducer,
  loginError: loginErrorReducer,
  video: videoReducer,
  motor: motorReducer,
  motorDetails: motorDetailsReducer,
  videoDetails: videoDetailsReducer,
  createVideo: createVideoReducer,
  createMotor: createMotorReducer,
  deleteMotor: deleteMotorReducer,
  deleteVideo: deleteVideoReducer,
  editMotor: editMotorReducer,
  deleteContact: deleteContactReducer,
  contacts: contactReducer,
  createContact: createContactReducer,
  detailsContact: contactDetailsReducer,
  comments: commentReducer,
  deteleComment: deleteCommentReducer,
  createComment: createCommentReducer,
  getUserContacts: userContactReducer,
  getUserContactDetails: userContactDetailsReducer,
  editUserContact: editUserContactReducer,
  fetchHotels: fetchHotelReducer,
  editHotel: editHotelReducer,
  deleteHotel: deleteHotelReducer,
}
