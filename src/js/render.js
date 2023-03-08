import { fetchProifle } from './api';
import { getProfileImageEle } from './element';

export const renderProfile = async () => {
  // Step 1: fetch profile data from backend
  const profile = await fetchProifle();

  // Step 2: get the target DOM from html
  const profileImageDOM = getProfileImageEle();

  // Step 3: apply the profile data on above DOM element
  profileImageDOM.src = profile.img_src;
};
