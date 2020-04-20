import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faLaptop,
  faLock,
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

function makeFAIcon(icon) {
  // eslint-disable-next-line react/display-name
  return (props) => <FontAwesomeIcon icon={icon} {...props} />;
}

export const ShoppingCartIcon = makeFAIcon(faShoppingCart);
export const LaptopIcon = makeFAIcon(faLaptop);
export const LockIcon = makeFAIcon(faLock);
export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);
