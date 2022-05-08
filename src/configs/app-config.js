

export const PUBLIC_PREFIX = '/p';
export const LOGIN_PREFIX = "/login";
export const SIGNUP_PREFIX = "/signup";
export const PROFILE_PREFIX = "/profile";
export const PRODUCT_DETAIL_PREFIX = '/product/*';
export const ERROR_PREFIX = "/*";
export const ADMIN_PREFIX = "/cp";
export const CUSTOMER_PREFIX = "/customer";
export const ADD_PREFIX = "/add";
export const PRODUCT_PREFIX = "/product";
export const ORDER_PREFIX = "/order";
export const SHIPPING_PREFIX = '/shipping';
export const WAREHOUSE_PREFIX = '/warehouse';
export const PARCEL_PREFIX = '/parcel';
export const INTERNATIONAL_PREFIX = '/international';
export const AFILLIATE_PREFIX = '/afilliate';
export const CHECKOUT_PREFIX = '/checkout';
export const CALCULATOR_PREFIX = '/calc';
export const SEARCH_PREFIX = '/search';
export const MANUAL_PREFIX = '/manual';
export const USER_PREFIX = '/user';
export const GET_PREFIX = '/get';
export const DELETE_PREFIX = '/delete';

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1740,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


